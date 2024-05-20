import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createCustomer } from "../features/customer/customerSlice";
import { nanoid } from "nanoid";

const CreateAccountForm = () => {
  const [fullName, setFullName] = useState("");
  const [accountEmail, setAccountEmail] = useState("");
  const [accountPassword, setAccountPassword] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <div>
      <div className="w-auto">
      <h2 className="text-3xl pb-3 font-semibold">👥Create a Account</h2>
        <form className="flex flex-col gap-2">
          <h3>Customer Full Name: </h3>
          <label className="input input-bordered flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
            <input 
              className="grow" 
              type="text" 
              placeholder="Full Name" 
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </label>
          <h3>Customer Email: </h3>
          <label className="input input-bordered flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
            <input 
              className="grow" 
              type="text" 
              placeholder="Email" 
              value={accountEmail}
              onChange={(e) => setAccountEmail(e.target.value)}
              required
            />
          </label>
          <h3>Customer Password: </h3>
          <label className="input input-bordered flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
            <input 
              className="grow" 
              type="password" 
              placeholder="Password"
              value={accountPassword}
              onChange={(e) => setAccountPassword(e.target.value)}
              required
            />
          </label>
        </form>
          <div className="text-right pt-2">
            <button 
              className="btn bg-red-600 hover:bg-red-700 text-white"
              onClick={() => {
                if (fullName === "" || accountEmail === "" || accountPassword === "") {
                  alert("Please enter a valid value!");
                  return
                }
                dispatch(createCustomer(
                    { 
                      fullName, 
                      accountID: nanoid(), 
                      accountEmail, 
                      accountPassword, 
                      createdAt: new Date().toISOString(), 
                    }
                  ));
                setFullName("");
                setAccountEmail("");
                setAccountPassword("");
                
                navigate('/');
              }}
            >
              Create Account
            </button>
            <div className="pt-10 text-center">
            <Link
               className="btn btn-outline border-red-600 text-red-600 hover:bg-red-700 hover:border-red-600"
               to='/' 
            >
            Back to Home
            </Link>
          </div>
          </div>
      </div>
    </div>
  )
}
export default CreateAccountForm