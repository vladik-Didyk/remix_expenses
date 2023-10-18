import ExpenseListItem from "./ExpenseListItem.js";

function ExpensesList({ expenses }) {
  return (
    <ol id="expenses-list">
      {expenses &&
        expenses.map((expense) => (
          <li key={expense.id}>
            <ExpenseListItem
              id={expense.id}
              title={expense.title}
              amount={expense.amount}
            />
          </li>
        ))}
    </ol>
  );
}

export default ExpensesList;
