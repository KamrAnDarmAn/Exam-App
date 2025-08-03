import { Outlet } from "react-router-dom";

export const DashboardWrapper = () => {
  return (
    <div className="flex flex-1 w-full">
      <div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-10 dark:border-neutral-700 dark:bg-neutral-900">
        <Outlet />
      </div>
    </div>
  );
};
