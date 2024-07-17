import { RequireAuth } from "../router/require-auth.tsx";
import { Outlet } from "react-router-dom";

export default function VerticalLayout() {
  return (
    <RequireAuth>
      <Outlet />
    </RequireAuth>
  );
}
