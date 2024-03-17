import { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "../../components/FormInput";

function Register() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="relative bg-base-100 flex flex-col justify-center min-h-screen overflow-hidden px-6">
      <div className="bg-base-100 p-6 m-auto rounded-md shadow-md max-w-[600px] w-full">
        <h1 className="text-center text-3xl font-bold">Sign up</h1>
        <form className="mt-6">
          <FormInput
            name="username"
            label="Username"
            placeholder="example: John"
            type="text"
          />
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
                Sign up <span className="loading loading-spinner"></span>
              </button>
            ) : (
              <button
                type="submit"
                className="w-full uppercase btn btn-active btn-neutral"
              >
                Sign up
              </button>
            )}
          </div>
        </form>

        <p className="mt-8 text-xs font-light tracking-[1px] text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-purple-600 hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Register;
