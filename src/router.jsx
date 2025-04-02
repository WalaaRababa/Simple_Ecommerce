import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Shop = lazy(() => import("./pages/Shop"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Plants = lazy(() => import("./pages/Plants"));
const NotFound = lazy(() => import("./pages/NotFound"));
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <About />
      </Suspense>
    ),
  },
  {
    path: "/faq",
    element: (
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <FAQ />
      </Suspense>
    ),
  },
  {
    path: "/shop",
    element: (
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <Shop />
      </Suspense>
    ),
  },
  {
    path: "/plants",
    element: (
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <Plants />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <NotFound />
      </Suspense>
    ),
  },
]);

export default router;
