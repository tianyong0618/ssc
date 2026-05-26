import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { SocialWorkerPage } from "./pages/SocialWorkerPage";
import { EmployerPage } from "./pages/EmployerPage";
import { PersonalArchivePage } from "./pages/PersonalArchivePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: SocialWorkerPage },
      { path: "employer", Component: EmployerPage },
      { path: "archive", Component: PersonalArchivePage },
    ],
  },
]);
