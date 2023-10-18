import type { LoaderFunction } from "@remix-run/react";
import expensesAuth from "~/styles/auth.css";
import AuthForm from "~/components/auth/AuthForm";
import { validateCredentials } from "~/data/validation.server";

export const links = () => {
  return [{ rel: "stylesheet", href: expensesAuth }];
};

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const authMode = searchParams.get("mode") || "login";

  const formData = await request.formData();
  const credentials = Object.fromEntries(formData);

  // validate user input

  try {
    validateCredentials(credentials);
  } catch (error) {
    return error;
  }
  if (authMode === "login") {
    // login logic
  } else {
    // signup logic
  }
}

export const loader: LoaderFunction = async () => {
  return {};
};

export default function AuthPage(): JSX.Element {
  return <AuthForm />;
}
