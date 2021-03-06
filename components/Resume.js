import React from 'react'
import Image from 'next/image'
import { HeartIcon, MailIcon, DownloadIcon } from '@heroicons/react/solid'


function Resume() {
    
    return (
        <div  id="home" className="w-full flex-col med:flex-row items-center align-center">
             {/*Image and title*/}
            <div className="w-full lg:pl-4 px-8 border-b-2 py-2 flex pr-4 flex-grow  align-center items-center">
                <div className="w-full flex justify-between">
                <h1 id="text" className="text-xl  w-full align-center h-full mt-auto flex-grow flex font-bold">Resume</h1>
                </div>

            </div>
            <div className="w-full transition  p-4 ">
                {/*Content Text*/}
                <div className="flex border-b-2 lg:pb-4 lg:p-0 space-y-3 p-4 flex-col text-left">
                    <h1 id="text" className="text-lg md:text-xl font-bold"> User Experience Lead</h1> 
                    <p id="text" className="text-xs md:text-md text-gray-400"> North American Plastics
                    | Dallas, TX  
                    <br /> 2021 </p>
                    <h1 className="">Oversee the user experience and user interface of our e-commerce stores for the 30+ plastics companies under our umbrella including <a href="https://www.uscutter.com/">US Cutter</a> and <a href="https://www.totalplastics.com/">Total Plastics</a><br /> <br /> Conduct user research, oversee the user experience life cycle, create wireframes and high-fidelity prototypes </h1>
                </div>
                <div className="flex border-b-2 lg:pb-4 lg:p-0 space-y-3 p-4 flex-col text-left">
                    <h1 id="text" className="text-lg md:text-xl font-bold"> UX Designer and UI Developer</h1> 
                    <p id="text" className="text-xs md:text-md text-gray-400"> Fayette County Public Schools 
                    <Image 
                    src= "/FCPS_star.jpg"
                    alt="FCPS"
                    className="m-4 absolute right-4 object-left
                    object-contain border-4 border-solid border-gray-100" 
                    height={15}
                    width={15}/> | Lexington, KY   
                    <br /> 2021 </p>
                    <h1 className="">Conduct user experience research, build wireframes and prototypes based on stakeholders input<br /> <br /> Build web, and mobile applications to be used by Fayette County Public Schools employees and community partners.</h1>
                </div>
                <div className="flex border-b-2 lg:pb-4 lg:p-0 lg:pt-4 space-y-3 p-4 flex-col text-left">
                    <h1 id="text" className="text-lg md:text-xl font-bold">Project Manager</h1>
                    <p id="text" className="text-xs md:text-md text-gray-400"> Fayette County Public Schools 
                    <Image 
                    src= "/FCPS_star.jpg"
                    alt="FCPS"
                    className="m-4 absolute right-4 object-left
                    object-contain border-4 border-solid border-gray-100" 
                    height={15}
                    width={15}/>
                    | Lexington, KY <br /> March 2020 - February 2021</p>
                    <h1 className="">Collaborated with Superintendent???s Cabinet and Lexington Health Department to build a mobile application to inform stakeholders about COVID-19. <br> Developed the 5 star public safety FPCS KY Matrix app, which is available on Google Play and Apple App Store. </br></h1>
                </div>
                <br/>
                <div className="flex lg:p-0 lg:pb-4 border-b-2 p-4 space-y-3 flex-col text-left">
                    <h1 id="text" className="text-lg md:text-xl font-bold">Behavior Researcher</h1>
                    <p id="text" className="text-xs md:text-md text-gray-400"> Centre College 
                    <Image 
                    src= "/centre.png"
                    alt="FCPS"
                    className="m-4 absolute right-4 object-left
                    object-contain border-4 border-solid border-gray-100" 
                    height={15}
                    width={15}/> | Danville, KY <br /> August 2018 - May 2019 </p>
                    <h1 className="">Programmed a cognitive test using Inquisit software for a psychological study which assessed delays in response time due to mobile device distractions.<br /> <br /> Analyzed empirical data about User Experience (UX) and presented to college faculty and students. <br /> </h1>
                </div>
                <br /> 
                <div className="flex mb-4 lg:p-0 p-4 space-y-3 flex-col text-left">
                    <h1 id="text" className="text-lg md:text-xl font-bold"> Computer Science Instructor</h1>
                    <p id="text" className="text-xs md:text-md text-gray-400">Uncommon Schools | Boston, MA<br /> June 2018 - August 2018 </p>
                    <h1 className="">Curated 10 weeks of various lessons, effectively teaching the fundamentals of computer science resulting in 100 percent of students passing the final exam.</h1>
                </div>
            </div>
        </div>

        
    )
}

export default Resume