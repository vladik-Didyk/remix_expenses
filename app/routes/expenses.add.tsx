// /expenses/add

import type { LoaderFunction } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";

export const loader: LoaderFunction = async () => {
  return {};
};

export default function ExpensesAddPage(): JSX.Element {
  return <ExpenseForm />;
}
