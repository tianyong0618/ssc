import { createBrowserRouter } from "react-router";
import { lazy } from "react";
import { Layout } from "./components/Layout";

const SocialWorkerPage = lazy(() => import("./pages/SocialWorkerPage"));
const EmployerPage = lazy(() => import("./pages/EmployerPage"));
const PersonalArchivePage = lazy(() => import("./pages/PersonalArchivePage"));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <div className="flex-1 flex items-center justify-center text-slate-400">页面加载出错</div>,
    children: [
      { index: true, Component: SocialWorkerPage },
      { path: "employer", Component: EmployerPage },
      { path: "archive", Component: PersonalArchivePage },
    ],
  },
]);