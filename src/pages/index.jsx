import { lazy } from "react";
const Main = lazy(() => import("./Main"));
const Other = lazy(() => import("./Other"));

const routes = [
  {
    path: "",
    component: <Main />,
  },
  {
    path: "other",
    component: <Other />,
  },
  {
    path: "other/:id",
    component: <Other />,
  },
];

export default routes;
