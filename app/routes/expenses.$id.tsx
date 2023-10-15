// /expenses/<some-id> => /expenses/expense-1, /expenses/e-1

import type { LoaderFunction } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";

export const loader: LoaderFunction = async () => {
  return {};
};

export default function UpdateExpensesPage(): JSX.Element {
  return <ExpenseForm />;
}
