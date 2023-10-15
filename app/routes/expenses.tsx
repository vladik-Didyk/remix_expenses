import { Outlet } from "@remix-run/react";
import expensesStyles from "~/styles/expenses.css";

export const links = () => {
  return [{ rel: "stylesheet", href: expensesStyles }];
};
export default function ExpensesAppLayout(): JSX.Element {
  console.log("ExpensesAppLayout");
  return (
    <>
      <Outlet />
    </>
  );
}
