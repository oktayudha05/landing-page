function createAccount() {
    return(
        <>
    <div className="w-full container mx-auto">
        <div className="w-full flex items-center justify-between">
        <a 
            className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out" 
            href="/login">
            <svg className="fill-current h-6" xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
        </a>
        </div>
    </div>
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-transparent rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Buat akun dlu bang</h1>
                <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" className="bg-blue-300 border text-black sm:text-sm rounded-lg focus:ring-black focus:border-black placeholder-black block w-full p-2.5" placeholder="email@untidar.ac.id" required=""/>
                </div>
                <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="Your Password" className="bg-blue-300 border text-black sm:text-sm rounded-lg focus:ring-black focus:border-black placeholder-black block w-full p-2.5" required=""/>
                  </div>
                <div className="d-flex flex-row-reverse">
                    <button type="submit" className="text-black bg-white hover:bg-slate-950 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2x">Submit</button>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default createAccount