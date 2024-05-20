import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const Landing = () => {
  const { fullName } = useSelector((store) => store.customer);
  const btnDefault = fullName === "" ? "btn-disabled" : "";
  return (
    <section>
      <div className="container mx-auto px-4 py-5">
        <h1 className="text-3xl py-6">👋Hi There, <span className="font-semibold italic">{ fullName === "" ? "Ghest" : fullName }</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card w-auto bg-red-600 shadow-xl text-white">
            <div className="card-body text-center">
              <h2 className="text-3xl pt-2 pb-4 font-semibold">💰Account Operations💱</h2>
              <p className="text-xl mb-14">If you has a account click start.</p>
              <div className="card-actions justify-center">
                <Link
                  className={`btn btn-white hover:bg-white ${btnDefault}`}
                  to='/operations'>
                  Start Operations
                </Link>
              </div>
            </div>
          </div>
          <div className="card w-auto bg-red-600 shadow-xl text-white">
            <div className="card-body text-center">
              <h2 className="text-3xl pt-2 pb-4 font-semibold">🏦Create a Account🕴️</h2>
              <p className="text-xl mb-14">If you hasn't a account click create account.</p>
              <div className="card-actions justify-center">
                <Link
                  className="btn btn-white hover:bg-white" 
                  to='/createaccount'>
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Landing

// className="btn btn-white hover:bg-white btn-disabled" 