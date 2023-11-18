
import { useNavigate} from "react-router-dom"

function Login() {

    const navigate = useNavigate()

    return (
        <section className="bg-gray-50 dark:bg-transparent">

<div className="w-full container mx-auto">
        <div className="w-full flex items-center justify-between">
        <a 
            className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out" 
            href="/">
            <svg className="fill-current h-6" xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
            </a>
        </div>
</div>
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-white rounded outline outline-2 outline-offset-2 pr-2 pl-2">
      <img src="/img/LOGOTI.png" alt="" style={{height:50}} className="pr-2"/>Teknologi Informasi</a>
      <div className="w-full bg-transparent rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl ">
                  Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email</label>
                      <input type="email" name="email" id="email" className="bg-blue-300 border text-black sm:text-sm rounded-lg focus:ring-black focus:border-black placeholder-black block w-full p-2.5" placeholder="email@gmail.com" required=""/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="Your Password" className="bg-blue-300 border text-black sm:text-sm rounded-lg focus:ring-black focus:border-black placeholder-black block w-full p-2.5" required=""/>
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
                  <button type="submit" className="text-black bg-white hover:bg-slate-950 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Sign in</button>
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
