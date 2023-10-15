import type { LoaderFunction } from "@remix-run/react";
import { Outlet } from "@remix-run/react";
import ExpensesList from "~/components/expenses/ExpensesList";

export const loader: LoaderFunction = async () => {
  return {};
};

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Paper",
    amount: 54.12,
    date: new Date(2010, 7, 14),
  },
];
export default function ExpensesLayout(): JSX.Element {
  console.log("ExpensesPage");
  return (
    <>
      <Outlet /> {/* This will render the nested route */}
      <main>
        <ExpensesList expenses={DUMMY_EXPENSES} />
      </main>
    </>
  );
}
