import { Link } from "react-router-dom"

const NoPage = () => {
  return (
    <section>
      <div className="sm:container mx-auto px-4">
      <h2 className="text-6xl font-semibold text-red-600">Error 404😰</h2>
      <h3 className="mt-4 text-3xl font-light text-red-600">Ohh!</h3>
        <p className='mb-4 text-xl font-light pt-4 text-red-600'>
        We can't seem to find page you are looking for.
        </p>
        <Link
             className="btn btn-outline border-red-600 text-red-600 hover:bg-red-700 hover:border-red-600"
            to='/' 
        >
        Back to Home
        </Link>
      </div>
    </section>

  )
}
export default NoPage