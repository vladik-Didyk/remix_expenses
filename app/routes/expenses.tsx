import type { LoaderFunction } from "@remix-run/react";
import { Link, Outlet } from "@remix-run/react";
import expensesStyles from "~/styles/expenses.css";

export const links = () => {
  return [{ rel: "stylesheet", href: expensesStyles }];
};
export const loader: LoaderFunction = async () => {
  return {};
};

export default function ExpensesLayout(): JSX.Element {
  console.log("ExpensesPage");
  return (
    <main>
      <p>Sheard element!</p>
      <Link to="/expenses/raw">Go to Raw Expenses</Link>
      <Outlet /> {/* This will render the nested route */}
    </main>
  );
}
