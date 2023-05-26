import image from "../assets/bg.jpg";
import { useContext, useState } from "react";
import { ContextProvider } from "../context/AuthContext";
import { TailSpin } from "react-loader-spinner";
import { FaCamera, FaEnvelope } from "react-icons/fa";
import Swal from "sweetalert2";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useNavigate } from "react-router-dom";

function UserCardImage() {
  const { user, loader, updatePass, userlogOut } = useContext(ContextProvider);
  const [isDisabled, setIsDisabled] = useState(false);
  const email = user.email;
  const auth = getAuth(app);
  const navigation = useNavigate();

  const handleName = (event)=>{
    event.preventDefault();
    const name = event.target.name.value;

    updateProfile(auth.currentUser,{
      displayName: name
    }).then(result=>{
      console.log('user');
      Swal.fire(
        "Successfully Update!",
        "Your User Name Successfully Updated!",
        "success"
      );
      event.target.reset()
      navigation('/')
    })
    .catch(error=>console.log(error))
  }
  const handlePhoto = (event)=>{
    event.preventDefault();
    const photo = event.target.photo.value;

    updateProfile(auth.currentUser,{
      photoURL: photo
    }).then(result=>{
      console.log('user');
      Swal.fire(
        "Successfully Update!",
        "Your User Photo Successfully Updated!",
        "success"
      );
      event.target.reset()
      navigation('/')
    })
    .catch(error=>console.log(error))
  }
  
  const handleLogOut=()=>{
    userlogOut();
    navigation('/')
  }
  
  const changePass = () => {
    updatePass(email)
      .then((result) => {
        sweetAlert();
        userlogOut();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const sweetAlert = () => {
    Swal.fire(
      "Email Sent!",
      "Please check your inbox for password reset",
      "success"
    );
    setIsDisabled(true);
  };

  if (loader) {
    return (
      <div className="flex justify-center items-center">
        <TailSpin
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  return (
    <div className="mx-auto w-[500px] h-[600px] my-[80px] ">
      <div className="border rounded-md bg-white relative">
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="h-40 bg-cover rounded-t-md"
        />
        <img
          src={user.photoURL}
          className="w-[120px] h-[120px] rounded-full mx-auto border-[5px] border-orange-600 absolute bottom-[-30px] left-[39%]"
        />
      </div>
      <div className="">
        <div className="flex items-center mt-[50px] gap-4 mx-auto justify-center">
          <h1 className="text-center text-lg font-bold text-black">
            Name: {user.displayName}
          </h1>
        </div>
        <p className="text-xl text-center mt-1">Email: {user.email}</p>
        <div className="">
          <p className="ms-8 mb-1 mt-4">Change Name</p>
          <form onSubmit={handleName}
            action="rename"
            className="flex items-center gap-3 justify-center"
          >
            <input
              name="name"
              required
              type="text"
              placeholder="write your new name"
              className="block w-[70%] px-4 py-2 text-orange-700 bg-white border 
              rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none 
              focus:ring focus:ring-opacity-40"
            />
            <button className="border-2 px-2 py-[5px] rounded-md hover:bg-orange-600 hover:text-white">
              Update
            </button>
          </form>
        </div>
        <div className="">
          <p className="ms-8 mb-1 mt-4">Update Photo</p>
          <form
          onSubmit={handlePhoto}
            action="profileUpdate"
            className="flex items-center gap-3 justify-center"
          >
            <input
              name="photo"
              required
              type="text"
              placeholder="Your Photo URL"
              className="block w-[70%] px-4 py-2 text-orange-700 bg-white border 
              rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none 
              focus:ring focus:ring-opacity-40"
            />
            <button className="border-2 px-2 py-[5px] rounded-md hover:bg-orange-600 hover:text-white">
              Update
            </button>
          </form>
        </div>
        <div className="mt-4 flex justify-center gap-4">
          <button
            onClick={changePass}
            disabled={isDisabled}
            className="border-2 px-1 rounded-md hover:bg-orange-600 hover:text-white"
          >
            Change Password
          </button>
        </div>
      </div>
      <button
      onClick={handleLogOut}
      className="mt-6 py-3 bg-orange-600 hover:bg-orange-700 text-xl text-white font-bold w-full">
        SignOut
      </button>
    </div>
  );
}

export default UserCardImage;
