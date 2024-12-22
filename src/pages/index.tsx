import GlobalLayout from "../components/GlobalLayout";
import { Outlet } from "react-router";

export default function Index() {
  return (
    <GlobalLayout>
      <Outlet />
    </GlobalLayout>
  );
}
