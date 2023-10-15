import type { LoaderFunction } from "@remix-run/react";
import { Link, Outlet } from "@remix-run/react";
import ExpensesList from "~/components/expenses/ExpensesList";
// import {FaPlus, FaDownload } from "react-icons/fa";

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
        <section id="expenses-actions">
          <Link to="add">
            {/*<FaPlus />*/}
            <span>Add Expense</span>
          </Link>
          <a href="/expenses/raw">
            {/*<FaDownload />*/}
            <span>Load Raw Data</span>
          </a>
        </section>
        <ExpensesList expenses={DUMMY_EXPENSES} />
      </main>
    </>
  );
}
