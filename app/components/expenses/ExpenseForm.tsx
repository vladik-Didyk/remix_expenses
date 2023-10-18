import {
  Form,
  Link,
  useActionData,
  // useMatches,
  useNavigation,
  // useParams,
  useLoaderData,
} from "@remix-run/react";

function ExpenseForm() {
  const today = new Date().toISOString().slice(0, 10); // yields something like 2023-09-10
  const validationErrors = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";
  const expenseData = useLoaderData();

  // // // This block of code is better approach to get the data from the server - I didn't finish it, but it's a good example of how to do it - need to realize how to go to outer scope and get the data from the routes
  // const params = useParams();
  // const matches = useMatches();
  // console.log("matches -> ", matches);
  // const match = matches.find((match: string) => match.id == "routes/expenses");
  // console.log("match -> ", match);
  // const expenses = match ? match.data : null;
  // console.log("expenses -> ", expenses);
  // const expenseData = expenses
  //   ? expenses.find((expense) => expense.id === params.id)
  //   : null;

  // console.log("expenseData -> ", expenseData);

  const defaultValues = expenseData
    ? {
        title: expenseData.title,
        amount: expenseData.amount,
        date: expenseData.date,
      }
    : {
        title: "",
        amount: "",
        date: "",
      };
  // const submit = useSubmit();
  // function submitHandler(event) {
  //   event.preventDefault();
  //   // perform your own validation
  //
  //   submit(event.target, {
  //     action: "/expenses/add",
  //     method: "post",
  //   });
  // }

  return (
    <Form
      method="post"
      className="form"
      id="expense-form"
      // onSubmit={submitHandler}
    >
      <p>
        <label htmlFor="title">Expense Title</label>
        <input
          type="text"
          id="title"
          name="title"
          required
          maxLength={30}
          defaultValue={defaultValues.title}
        />
      </p>

      <div className="form-row">
        <p>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            min="0"
            step="0.01"
            required
            defaultValue={defaultValues.amount}
          />
        </p>
        <p>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            max={today}
            required
            defaultValue={
              defaultValues.date ? defaultValues.date.slice(0, 10) : ""
            }
          />
        </p>
      </div>
      {validationErrors && (
        <ul>
          {Object.values(validationErrors).map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
      <div className="form-actions">
        <button disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save Expense"}
        </button>
        <Link to="..">Cancel</Link>
      </div>
    </Form>
  );
}

export default ExpenseForm;
