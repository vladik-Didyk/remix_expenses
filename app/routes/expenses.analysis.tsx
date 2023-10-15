// /expenses/analysis
import type { LoaderFunction } from "@remix-run/react";

import ExpensesStatitstics from "~/components/expenses/ExpenseStatistics";
import Chart from "~/components/expenses/Chart";
export const loader: LoaderFunction = async () => {
  return {};
};

export default function ExpensesAnalysisPage(): JSX.Element {
  return (
    <main>
      <Chart />
      <ExpensesStatitstics />
    </main>
  );
}
