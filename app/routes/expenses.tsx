import { Outlet } from "@remix-run/react";
import expensesStyles from "~/styles/expenses.css";
import ExpensesHeader from "~/components/navigation/ExpensesHeader";

export const links = () => {
  return [{ rel: "stylesheet", href: expensesStyles }];
};
export default function ExpensesAppLayout(): JSX.Element {
  return (
    <>
      <ExpensesHeader />
      <Outlet />
    </>
  );
}
