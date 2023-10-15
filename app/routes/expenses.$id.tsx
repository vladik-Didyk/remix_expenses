// /_expenses/<some-id> => /_expenses/expense-1, /_expenses/e-1

import type { LoaderFunction } from "@remix-run/react";
import { useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

export const loader: LoaderFunction = async () => {
  return {};
};

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
