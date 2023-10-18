// /_expenses/<some-id> => /_expenses/expense-1, /_expenses/e-1

import type { LoaderFunction } from "@remix-run/react";
import { useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import { getExpense } from "~/data/expenses.server";

export async function loader({ params }): LoaderFunction {
  const expenseId = params.id;
  const expense = await getExpense(expenseId);
  return expense;
}

export default function UpdateExpensesPage(): JSX.Element {
  const navigate = useNavigate();

  function closeModalHandler() {
    // Navigate programmatically to the previous page
    navigate("/expenses");
  }

  return (
    <Modal onClose={closeModalHandler}>
      <ExpenseForm />;
    </Modal>
  );
}
