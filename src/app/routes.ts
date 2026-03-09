import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./components/pages/HomePage";
import { AboutPage } from "./components/pages/AboutPage";
import { ServicesPage } from "./components/pages/ServicesPage";
import { ServiceDetailPage } from "./components/pages/ServiceDetailPage";
import { OurWorkPage } from "./components/pages/OurWorkPage";
import { ContactPage } from "./components/pages/ContactPage";
import { BlogPage } from "./components/pages/BlogPage";
import { BlogPostPage } from "./components/pages/BlogPostPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "services", Component: ServicesPage },
      { path: "services/:serviceSlug", Component: ServiceDetailPage },
      { path: "our-work", Component: OurWorkPage },
      { path: "contact", Component: ContactPage },
      { path: "blog", Component: BlogPage },
      { path: "blog/:slug", Component: BlogPostPage },
    ],
  },
]);
