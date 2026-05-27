import { RouterProvider } from "react-router";
import { Suspense } from "react";
import { router } from "./routes";

function AppContent() {
  return (
    <Suspense fallback={<div className="flex-1 flex items-center justify-center text-slate-400">加载中...</div>}>
      <RouterProvider router={router} fallbackElement={<div className="flex-1 flex items-center justify-center text-slate-400">加载中...</div>} />
    </Suspense>
  );
}

export default AppContent;