import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle} from "react-icons/fa";
import { useContext, useState } from "react";
import { ContextProvider } from "../../context/AuthContext";


const SignIn = () => {
  const [error, setError]= useState();
  const navigate = useNavigate();
  const location = useLocation();
  const {googleLogin, gitLogin, emailPassLogin, setUser,}= useContext(ContextProvider)
  const redirect = location.state?.from?.pathname || '/'

  const loginForm = (e)=>{
    setError('')
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    {/* sign in with email pass */}

    emailPassLogin(email, password)
    .then(result=>{
      const user = result.user;
      console.log(user);
      setUser(user);
      navigate(redirect, {replace: true})
    })
    .catch(error=>{
      console.log(error)
      console.log(error.message)
      if(error.message){
        return setError(error.message);
      }
    })
  }

  {/* Google sign in */}

  const handleGoogleLogin =()=>{
    googleLogin()
    .then(result=>{
      const user= result.user;
      console.log("Google Login: ",user);
      navigate(redirect, {replace: true})
    })
    .catch(error=>{
      console.log(error.message);
    })
  }

  {/* Github Sign In */}

  const handleGithubLogin = ()=>{
    gitLogin()
    .then(result=>{
      const user= result.user;
      console.log("GitHub Login: ",user);
      navigate(redirect, {replace: true})
    })
    .catch(error=>{
      console.log(error.message);
    })
  }



  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-4xl font-bold text-center text-orange-500">
          Sign-In
        </h1>
        <form
        onSubmit={loginForm}
        className="mt-6">
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
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
            <label className="block text-sm font-semibold text-gray-800">
              Password
            </label>
            <input
              name="password"
              required
              type="password"
              className="block w-full px-4 py-2 mt-2 text-orange-700 bg-white border rounded-md
               focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring 
               focus:ring-opacity-40"
            />
          </div>
          <a href="#" className="text-xs text-orange-600 hover:underline">
            Forget Password?
          </a>
          <div className="mt-6">
            <p className="text-red-600 mb-3">{error}</p>
            <button
              className="w-full px-4 py-2 font-semibold tracking-wide text-white transition-colors 
            duration-200 transform bg-orange-500 rounded-md hover:bg-orange-600 
            focus:outline-none focus:bg-orange-700"
            >
              SingIn
            </button>
          </div>
        </form>
        <div className="relative flex items-center justify-center w-full mt-6 border border-t">
          <div className="absolute px-5 bg-white">Or</div>
        </div>
        <div className="flex mt-4 gap-x-2">
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-orange-600"
          >
            <FaGoogle></FaGoogle>
          </button>
          <button
          onClick={handleGithubLogin}
          className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-orange-600">
            <FaGithub></FaGithub>
          </button>
        </div>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          Don't have an account?
          <Link
          to='/signup'
            className="font-medium text-orange-600 hover:underline"
          >
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
