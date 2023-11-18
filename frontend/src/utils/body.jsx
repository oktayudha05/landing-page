import Navbar from './navbar'
function body() {
    return(
        <>
        <div>
            <Navbar/>
        </div>

        <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full xl:w-3/6 justify-center lg:items-start overflow-y-hidden">

        <div className="w-full xl:w-7/8 p-12 overflow-hidden">
          <img className="mx-auto w-full md:w-full transform rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:-rotate-6 " src="img/cewegw.jpg" style={{width:300}} />
        </div>
        </div>
        <div className="flex flex-col w-full xl:w-3/6 justify-center lg:items-start overflow-y-hidden">
        <div className="w-full xl:w-7/8 p-12 overflow-hidden">
          <img className="mx-auto w-full md:w-full transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6" src="img/wibu.jpg" style={{height:250}} />
        </div>
        </div>
        </div>
        </>
    )
}

export default body