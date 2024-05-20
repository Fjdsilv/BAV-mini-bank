import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const HomeLayout = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
        <Navbar />
        <main>
        <Outlet />
        </main>
        <Footer />
    </div>
  )
}
export default HomeLayout