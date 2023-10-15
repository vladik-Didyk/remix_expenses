// /expenses/analysis
import type { LoaderFunction } from "@remix-run/react";

import ExpensesStatitstics from "~/components/expenses/ExpenseStatistics";
import Chart from "~/components/expenses/Chart";

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
export const loader: LoaderFunction = async () => {
  return {};
};

export default function ExpensesAnalysisPage(): JSX.Element {
  return (
    <main>
      <Chart expenses={DUMMY_EXPENSES} />
      <ExpensesStatitstics expenses={DUMMY_EXPENSES} />
    </main>
  );
}
