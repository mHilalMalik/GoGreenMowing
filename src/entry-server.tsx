import { renderToString } from "react-dom/server";
import {
    createStaticHandler,
    createStaticRouter,
    StaticRouterProvider,
} from "react-router";
import { routes } from "./app/routes";
import "./styles/index.css";

export {
    getRouteMeta,
    notFoundMeta,
    prerenderPaths,
    indexableRoutes,
} from "./app/seo/routeMeta";

/**
 * Build-time entry point used by scripts/prerender.mjs.
 *
 * Renders one route to an HTML string so every URL ships real, crawlable
 * markup instead of an empty <div id="root">. Nothing here runs in the browser.
 */
export async function render(path: string): Promise<string> {
    const handler = createStaticHandler(routes);
    const context = await handler.query(
        new Request(`https://gogreenmowing.ca${path}`),
    );

    if (context instanceof Response) {
        throw new Error(
            `Route "${path}" returned a Response (${context.status}) instead of render context.`,
        );
    }

    const router = createStaticRouter(handler.dataRoutes, context);

    return renderToString(
        <StaticRouterProvider router={router} context={context} nonce={undefined} />,
    );
}
