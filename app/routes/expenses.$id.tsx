// /expenses/<some-id> => /expenses/expense-1, /expenses/e-1

import type { LoaderFunction } from "@remix-run/react";

export const loader: LoaderFunction = async () => {
  return {};
};

export default function UpdateExpensesPage(): JSX.Element {
  return <h1>Update Expenses Page</h1>;
}
