import type { LoaderFunction } from "@remix-run/react";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import ExpensesList from "~/components/expenses/ExpensesList";
import { getExpenses } from "~/data/expenses.server";
// import {FaPlus, FaDownload } from "react-icons/fa";

export function loader(): LoaderFunction {
  return getExpenses();
}

export default function ExpensesLayout(): JSX.Element {
  const expenses = useLoaderData();

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
        <ExpensesList expenses={expenses} />
      </main>
    </>
  );
}
