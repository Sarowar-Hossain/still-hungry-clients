import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextProvider } from "../../context/AuthContext";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const [error, setError] = useState("");
  const { passwordLogin, userlogOut } = useContext(ContextProvider);
  const navigator = useNavigate();

  const handleSignUpForm = (e) => {
    setError("");
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photourl.value;

    // Password validation
    const passwordRegex =
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (!passwordRegex.test(password)) {
      return setError(
        "Password should be 6-20 characters including at least one special character"
      );
    }

    {/*--- Create User With Email and Pass ---*/}
    passwordLogin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigator("/signin");
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            userlogOut();
            navigator("/signin");
            e.target.reset();
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-4xl font-bold text-center text-orange-500">
          Sign-Up
        </h1>
        <form onSubmit={handleSignUpForm} className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-800"
            >
              Name
            </label>
            <input
              name="name"
              required
              type="text"
              className="block w-full px-4 py-2 mt-2 text-orange-700 bg-white border 
              rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none 
              focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              name="email"
              required
              type="email"
              className="block w-full px-4 py-2 mt-2 text-orange-700 bg-white border 
              rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none 
              focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              name="password"
              required
              type="password"
              className="block w-full px-4 py-2 mt-2 text-orange-700 bg-white border 
              rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none 
              focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mb-2">
            <label
              htmlFor="photourl"
              className="block text-sm font-semibold text-gray-800"
            >
              Photo URL
            </label>
            <input
              name="photourl"
              type="text"
              required
              className="block w-full px-4 py-2 mt-2 text-orange-700 bg-white border 
              rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none 
              focus:ring focus:ring-opacity-40"
            />
          </div>
          <p className="text-red-600">{error}</p>
          <div className="flex gap-2 items-center justify-start">
            <input type="checkbox" required />{" "}
            <p>accept terms and conditions</p>
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-600"
          >
            Sign-Up
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/signin" className="font-medium text-orange-500">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
