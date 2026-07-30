import { Layout } from "./components/Layout";
import { HomePage } from "./components/pages/HomePage";
import { AboutPage } from "./components/pages/AboutPage";
import { ServicesPage } from "./components/pages/ServicesPage";
import { ServiceDetailPage } from "./components/pages/ServiceDetailPage";
import { LocationPage } from "./components/pages/LocationPage";
import { OurWorkPage } from "./components/pages/OurWorkPage";
import { ContactPage } from "./components/pages/ContactPage";
import { BlogPage } from "./components/pages/BlogPage";
import { BlogPostPage } from "./components/pages/BlogPostPage";
import { NotFoundPage } from "./components/pages/NotFoundPage";

/**
 * Plain route config, shared by the browser router (App.tsx) and the
 * build-time prerenderer (entry-server.tsx) so both render identical trees.
 */
export const routes = [
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "services", Component: ServicesPage },
      { path: "services/:serviceSlug", Component: ServiceDetailPage },
      { path: "lawn-care/:citySlug", Component: LocationPage },
      { path: "our-work", Component: OurWorkPage },
      { path: "contact", Component: ContactPage },
      { path: "blog", Component: BlogPage },
      { path: "blog/:slug", Component: BlogPostPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
];
