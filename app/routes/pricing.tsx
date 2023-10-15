import type { LoaderFunction } from "@remix-run/react";

export const loader: LoaderFunction = async () => {
  return {};
};

export default function PricingPage(): JSX.Element {
  return <h1>Pricing Page</h1>;
}
