import { Outlet } from "@remix-run/react";
import marketingStyles from "~/styles/marketing.css";

export const links = () => {
  return [{ rel: "stylesheet", href: marketingStyles }];
};
export default function MarketingAppLayout(): JSX.Element {
  console.log("MarketingAppLayout");
  return (
    <>
      <Outlet />
    </>
  );
}
