import type { LoaderFunction } from "@remix-run/react";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import ExpensesList from "~/components/expenses/ExpensesList";
import { getExpenses } from "~/data/expenses.server";
import { json } from "@remix-run/node";
// import {FaPlus, FaDownload } from "react-icons/fa";

export async function loader(): LoaderFunction {
  const expenses = await getExpenses();
  return json(expenses);
}

export default function ExpensesLayout(): JSX.Element {
  const expenses = useLoaderData();
  console.log("ExpensesLayout expenses");
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
