import { Form, Link, useNavigation, useSearchParams } from "@remix-run/react";

// import { FaLock } from 'react-icons/fa';

function AuthForm() {
  const navigation = useNavigation();

  const [searchParams] = useSearchParams();
  const authMode = searchParams.get("mode") || "login";
  const submitBtnCaption = authMode === "login" ? "Login" : "Create User";
  const toggleBtnCaption =
    authMode === "login" ? "Create a new user" : "Login with existing user";

  const isSubmitting = navigation.state !== "idle";
  return (
    <Form method="post" className="form" id="auth-form">
      <div className="icon-img">{/*<FaLock />*/}</div>
      <p>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" required />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" minLength={7} />
      </p>
      <div className="form-actions">
        <button disabled={isSubmitting}>
          {isSubmitting ? "Authenticating..." : submitBtnCaption}
        </button>
        <Link to={authMode === "login" ? "?mode=signup" : "?mode=login"}>
          {toggleBtnCaption}
        </Link>
      </div>
    </Form>
  );
}

export default AuthForm;
