// /_expenses/<some-id> => /_expenses/expense-1, /_expenses/e-1

import type { LoaderFunction } from "@remix-run/react";
import { useNavigate } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import {
  deleteExpense,
  getExpense,
  updateExpense,
} from "~/data/expenses.server";
import { validateExpenseInput } from "~/data/validation.server";

export async function action({ params, request }) {
  const expenseId = params.id;

  if (request.method === "PATCH") {
    const formData = await request.formData();
    const expenseData = Object.fromEntries(formData);

    try {
      validateExpenseInput(expenseData);
    } catch (error) {
      return error;
    }

    await updateExpense(expenseId, expenseData);
    return redirect("/expenses");
  } else if (request.method === "DELETE") {
    await deleteExpense(expenseId);
    return redirect("/expenses");
  }
}

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
