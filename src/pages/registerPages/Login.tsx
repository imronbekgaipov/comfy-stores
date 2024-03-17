import { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "../../components/FormInput";

function Login() {
  const [loading, setLoading] = useState(false);
  const [loadingGuest, setLoadingGuest] = useState(false);
  return (
    <div className="relative bg-base-100 flex flex-col justify-center min-h-screen overflow-hidden px-6">
      <div className="bg-base-100 p-6 m-auto rounded-md shadow-md max-w-[600px] w-full">
        <h1 className="text-center text-3xl font-bold">Login</h1>
        <form className="mt-6">
          <FormInput
            name="email"
            label="Email"
            placeholder="example@gmail.com"
            type="email"
          />
          <FormInput
            name="password"
            label="Password"
            placeholder="Password"
            type="password"
          />
          <div className="mt-6">
            {loading ? (
              <button
                type="submit"
                className="w-full uppercase btn-disabled btn btn-active btn-neutral"
              >
                Login <span className="loading loading-spinner"></span>
              </button>
            ) : (
              <button
                type="submit"
                className="w-full uppercase btn btn-active btn-neutral"
              >
                Login
              </button>
            )}
          </div>
        </form>

        <div className="mt-6">
          {loadingGuest ? (
            <button
              type="button"
              className="w-full btn uppercase btn-active btn-disabled btn-neutral"
            >
              Guest user <span className="loading loading-spinner"></span>
            </button>
          ) : (
            <button
              type="button"
              className="w-full uppercase btn btn-active btn-neutral"
            >
              Guest user
            </button>
          )}
        </div>

        <p className="mt-8 text-xs font-light tracking-[1px] text-center">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-medium text-purple-600 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Login;
