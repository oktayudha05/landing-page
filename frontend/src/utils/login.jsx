
import { useNavigate} from "react-router-dom"

function Login() {

    const navigate = useNavigate()

    return (
        <section className="bg-gray-50 dark:bg-transparent">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-white">
      <img src="/img/Logo FAV.jpg" alt="" style={{width:50}} className="pr-2"/>
          URFAV
      </a>
      <div className="w-full bg-transparent rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl ">
                  Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                      <input type="email" name="email" id="email" className="bg-black border text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="email@untidar.ac.id" required=""/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="Your Password" className="bg-black border text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-white">Remember me</label>
                          </div>
                      </div>
                      <a href="#" className="text-white hover:underline ">Forgot password?</a>
                  </div>
                  <button type="submit" className="text-white bg-black hover:bg-slate-50 hover:text-black focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Sign in</button>
                  <p className="text-sm font-light text-white ">
                      Don’t have an account yet? <a href="" onClick={() => navigate('/signup')} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
              </form>
              
          </div>
      </div>
  </div>
</section>



    )

    
}




export default Login
