// /expenses/add

import type { LoaderFunction } from "@remix-run/react";

export const loader: LoaderFunction = async () => {
  return {};
};

export default function ExpensesAddPage(): JSX.Element {
  return <h1>Add Expenses Page</h1>;
}
