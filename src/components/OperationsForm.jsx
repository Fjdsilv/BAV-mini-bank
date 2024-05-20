import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getExchange, deposit, withdraw, requestLoan, payLoan } from "../features/account/accountSlice";

const OperationsForm = () => {
  const [currency, setCurrency] = useState('USD');
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [loanAmount, setloanAmount] = useState("");
  const [loanPurpose, setloanPurpose] = useState("");
  const [payLoanAmount, setPayLoanAmount] = useState("");

  const dispatch = useDispatch();
  const { isLoading, balance, loan } = useSelector((store) => store.account);

  return (
    <div>
      <div className="w-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl pb-3 font-semibold">💸Account Operations</h2>
          <p className="text-3xl">Your Balance: US$ { isLoading ? "Loading..." : balance.toFixed(2) }</p>
        </div>
          {/* deposit group */}
          <form>
            <h3 className="pb-2">Deposit:</h3>
            <div className="flex gap-2">
              <input 
                className="input input-bordered w-full" 
                type="number" 
                min="1" 
                max="11550000"
                placeholder="Type a Value" 
                value={depositAmount}
                onChange={(e) => setDepositAmount(e.target.value)}
              />
              <select 
                className="select select-bordered w-full max-w-xs"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <option value="USD">USD - Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound</option>
                <option value="BRL">BRL - Brazilian Real</option>
              </select>
              <button 
                className="btn bg-red-600 hover:bg-red-700 text-white w-36"
                type="button"
                onClick={() => {
                  if ( depositAmount === "" ) {
                    alert("Please enter a valid value");
                    return;
                  }
                  else if ( currency === "USD" ) {
                    dispatch(deposit(depositAmount));
                    setDepositAmount("");
                    return;
                  }
                  const getCurrency = `https://api.frankfurter.app/latest?amount=${depositAmount}&from=${currency}&to=USD`;
                  dispatch(getExchange(getCurrency));
                  setDepositAmount("");
                }}
                disabled={isLoading}
              >
                Deposit
              </button>
            </div>
          </form>
          {/* withdraw group */}
          <form>
          <h3 className="py-2">Withdraw:</h3>
            <div className="flex justify-start gap-2">
              <input 
                className="input input-bordered w-full" 
                type="number"
                min="1" 
                max="5000" 
                placeholder="Type a Value"
                value={withdrawAmount} 
                onChange={(e) => setWithdrawAmount(e.target.value)}
              />
              <button 
                className="btn bg-red-600 hover:bg-red-700 text-white w-36"
                type="button" 
                onClick={() => {
                  if ( balance <= 0 ) {
                    alert("No enough balance");
                    setWithdrawAmount("");
                    return;
                  }
                  else if ( withdrawAmount === "" ) {
                    alert("Please enter a valid value");
                    return;
                  }
                  dispatch(withdraw(withdrawAmount));
                  setWithdrawAmount("");
                }} 
              >
                Withdraw
              </button>
            </div>
          </form>
          {/* loan group */}
          <form>
            <h3 className="py-2">Request Loan:</h3>
            <div className="flex gap-2">
              <input 
                className="input input-bordered w-full" 
                type="number" 
                min="1"
                max="50000"
                placeholder="Type a Value" 
                value={loanAmount}
                onChange={(e) => setloanAmount(e.target.value)}
                />
              <input 
                className="input input-bordered w-full max-w-xs" 
                type="text" 
                placeholder="Type Loan Purpose" 
                value={loanPurpose}
                onChange={(e) => setloanPurpose(e.target.value)}
              />
              <button 
                className="btn bg-red-600 hover:bg-red-700 text-white w-36"
                type="button"
                onClick={() => {
                  if ( loan > 0 ) {
                    alert("Laon denied");
                    setloanAmount("");
                    setloanPurpose("");
                    return;
                  }
                  else if ( loanPurpose === "" || loanAmount === "" ) {
                    alert("Please enter a valid value");
                    return;
                  }
                  dispatch(requestLoan({ loanAmount, loanPurpose }));
                  setloanAmount("");
                  setloanPurpose("");
                }}
              >
                Request Loan
              </button>
            </div>
          </form>
          {/* pay loan */}
          {loan === 0 ? 
          ""
          :  
          <form>
          <h3 className="py-2">Pay Loan:</h3>
            <div className="flex justify-start gap-2">
              <input 
                className="input input-bordered w-full max-w-xs" 
                type="number"
                min="1" 
                max="50000" 
                placeholder="Type a Value"
                value={payLoanAmount} 
                onChange={(e) => setPayLoanAmount(e.target.value)}
              />
              <button 
                className="btn bg-red-600 hover:bg-red-700 text-white"
                type="button" 
                onClick={() => {
                  if ( payLoanAmount === "" ) {
                    alert("Please enter a valid value");
                    return;
                  }
                  dispatch(payLoan(payLoanAmount));
                }} 
              >
                Pay Loan
              </button>
            </div>
          </form>    
          }
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
  )
}
export default OperationsForm