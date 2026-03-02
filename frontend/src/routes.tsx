import React, { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "./MainLayout";

const CoursePage = lazy(() => import("./components/backend_api"));
const CloudPractitioner = lazy(() => import("./whiz_prod_page/course_page"));

export type AppRoute = {
  path: string;
  name?: string;
  element?: React.ReactNode;
  children?: AppRoute[];
};

export const routesConfig: AppRoute[] = [
  {
    path: "/api-course/:id",
    element: <CoursePage />,
  },
  {
  path: "/",
  element: <CloudPractitioner />,
  },
  {
    path: "/courses/cloud-practitioner",
    element: <CloudPractitioner />,
  },
];

function buildChildrenFromConfig(routes: AppRoute[]) {
  const children: Array<Record<string, any>> = [];

  for (const r of routes) {
    if (r.path === "/") {
      children.push({ index: true, element: r.element });
      continue;
    }

    if (r.path === "*") {
      children.push({ path: "*", element: r.element });
      continue;
    }

    const relative = r.path.startsWith("/")
      ? r.path.replace(/^\//, "")
      : r.path;

    children.push({ path: relative, element: r.element });
  }

  return children;
}

export default function AppRoutes(): React.ReactElement {
  const children = buildChildrenFromConfig(routesConfig);

  const elements = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children,
    },
  ]);

  return (
    <Suspense
      fallback={
        <div className="d-flex justify-content-center align-items-center py-5">
          <div className="text-center">
            <div className="spinner-border text-warning mb-3" role="status" />
            <div>Loading...</div>
          </div>
        </div>
      }
    >
      {elements}
    </Suspense>
  );
}