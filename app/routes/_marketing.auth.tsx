import type { LoaderFunction } from "@remix-run/react";
import expensesAuth from "~/styles/auth.css";
import AuthForm from "~/components/auth/AuthForm";

export const links = () => {
  return [{ rel: "stylesheet", href: expensesAuth }];
};

export const loader: LoaderFunction = async () => {
  return {};
};

export default function AuthPage(): JSX.Element {
  return <AuthForm />;
}
