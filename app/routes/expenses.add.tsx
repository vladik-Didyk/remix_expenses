// /_expenses/add

import type { LoaderFunction } from "@remix-run/react";
import { useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import { addExpense } from "~/data/expenses.server";
import { redirect } from "@remix-run/node";
import { validateExpenseInput } from "~/data/validation.server";

export const loader: LoaderFunction = async () => {
  return {};
};

export default function ExpensesAddPage(): JSX.Element {
  const navigate = useNavigate();

  function closeModalHandler() {
    // Navigate programmatically to the previous page
    navigate("/expenses");
  }

  return (
    <Modal onClose={closeModalHandler}>
      <ExpenseForm />
    </Modal>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const expenseData = Object.fromEntries(formData);

  try {
    validateExpenseInput(expenseData);
  } catch (error) {
    return error;
  }

  await addExpense(expenseData);
  return redirect("/expenses");
}
