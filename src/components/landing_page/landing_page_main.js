import React from 'react'
import './landing_page_main.css';
import Dash from '../img/Dashboard.png'

const Landing_Page_Main = () => {
  return (
    <>
    <div>
        <main className="flex flex-col items-center justify-center mt-32">
          <header className="container">
            {/* Navbar */}
            <nav className="flex justify-between md:justify-around py-4 bg-white/80 backdrop-blur-md shadow-md w-full px-10 fixed top-0 left-0 right-0 z-10 md:px-3">
              {/* Logo Container */}
              <div className="flex items-center">
                {/* Logo */}
                <a className="cursor-pointer">
                <a href="#" className="text-xl font-bold flex items-center lg:ml-2.5">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGJs5QCNRfQ4X9Wwzol6IepgsgqkayzQ57JsIsorc4TA&s" className="h-12 mr-2" alt="Windster Logo" />
                                    <span className="self-center whitespace-nowrap">V-Track</span>
                                </a>
                </a>
              </div>
              {/* Links Section */}
              <div className="items-center md:space-x-8 justify-center justify-items-start md:justify-items-center md:flex md:pt-2 w-full left-0 top-16 px-5 md:px-10 py-3 md:py-0 border-t md:border-t-0">
                <a className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
                  Home
                </a>
                <a className="flex cursor-pointer transition-colors duration-300 font-semibold text-blue-600">
                  Themes
                </a>
                <a className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
                  Developers
                </a>
                <a className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
                  Pricing
                </a>
                <a className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
                  Blog
                </a>
                <a className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
                  About Us
                </a>
              </div>
              {/* Auth Links */}
              <div className="items-center space-x-5 hidden md:flex">
                {/* Register */}
                <a className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
                  <svg className="fill-current h-5 w-5 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width={24} height={24} viewBox="0 0 24 24">
                    <path d="M12 0L11.34 .03L15.15 3.84L16.5 2.5C19.75 4.07 22.09 7.24 22.45 11H23.95C23.44 4.84 18.29 0 12 0M12 4C10.07 4 8.5 5.57 8.5 7.5C8.5 9.43 10.07 11 12 11C13.93 11 15.5 9.43 15.5 7.5C15.5 5.57 13.93 4 12 4M12 6C12.83 6 13.5 6.67 13.5 7.5C13.5 8.33 12.83 9 12 9C11.17 9 10.5 8.33 10.5 7.5C10.5 6.67 11.17 6 12 6M.05 13C.56 19.16 5.71 24 12 24L12.66 23.97L8.85 20.16L7.5 21.5C4.25 19.94 1.91 16.76 1.55 13H.05M12 13C8.13 13 5 14.57 5 16.5V18H19V16.5C19 14.57 15.87 13 12 13M12 15C14.11 15 15.61 15.53 16.39 16H7.61C8.39 15.53 9.89 15 12 15Z" />
                  </svg>
                  Register
                </a>
                {/* Login */}
                <a className="flex text-gray-600 cursor-pointer transition-colors duration-300 font-semibold text-blue-600">
                  <svg className="fill-current h-5 w-5 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width={24} height={24} viewBox="0 0 24 24">
                    <path d="M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z" />
                  </svg>
                  Login
                </a>
              </div>
              {/* Hamberger Menu */}
              <button className="w-10 h-10 md:hidden justify-self-end rounded-full hover:bg-gray-100">
                <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width={24} height={24} viewBox="0 0 24 24">
                  <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                </svg>
              </button>
            </nav>
          </header>
          {/* Hero */}
          
          <section className="py-20 bg-white">
            
        <div className="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
          <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
              <img className="rounded-lg shadow-xl" src={Dash} alt="" />
            </div>
            <div className="px-2 w-full lg:w-3/5">
            <div className="mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max-w-md lg:text-left">
                <h2 className="mb-4 text-3xl font-bold text-left lg:text-5xl">
                Real-time visitor 
                  <span className="text-5xl text-blue-500 leading-relaxeds"> tracking&nbsp; 
                  </span>
                  multi-store for ecommerce.
                </h2>
                <p className="visible mx-0 mt-3 mb-0 text-sm leading-relaxed text-left text-slate-400">
                  Helping, monitor product performance across multiple online stores.
                </p>
              </div>
              
              <div className="text-left">
                <a className="block visible py-4 px-8 mb-4 text-xs font-semibold tracking-wide leading-none text-white bg-blue-500 rounded cursor-pointer sm:mr-3 sm:mb-0 sm:inline-block">Key Features</a>
                <a className="block visible py-4 px-8 text-xs font-semibold leading-none bg-white rounded border border-solid cursor-pointer sm:inline-block border-slate-200 text-slate-500">How We Work?</a>
              </div>
              </div>
          </div>
          <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12">
              <img className="rounded-lg shadow-xl" src="https://cdn.devdojo.com/images/december2020/dashboard-04.png" alt="" />
            </div>
            <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16">
              <p className="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">know your data</p>
              <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">Optimized For Conversions</h3>
              <p className="mt-5 text-lg text-gray-700 text md:text-left">Backed by data, these templates have been crafted for ultimate optimization. Now, converting your visitors into customers is easier than ever before.</p>
            </div>
          </div>
          <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
              <img className="rounded-lg shadow-xl" src="https://cdn.devdojo.com/images/december2020/dashboard-03.png" alt="" />
            </div>
            <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
              <p className="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">Easy to customize</p>
              <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">Make It Your Own</h3>
              <p className="mt-5 text-lg text-gray-700 text md:text-left">All templates and components are fully customizable. You can use these templates to tell your personal story and convey your message.</p>
            </div>
          </div>
        </div>
      </section>
          {/* Parallax Background */}
          <section className="flex-col w-full h-[500px] bg-cover bg-fixed bg-center flex justify-center items-center" style={{backgroundImage: 'url(https://www.cronyxdigital.com/hubfs/Blog%20Images/Blog%20Headers/CRONYX%20HubSpot%20Blog%20image%205.jpg)'}}>
            <h1 className="text-white text-5xl font-semibold mt-20 mb-10">
              This is Parallax Effect
            </h1>
            <span className="text-center font-bold my-20 text-white/90">
              <a href="https://egoistdeveloper.github.io/twcss-to-sass-playground/" target="_blank">
                Convetert to SASS
              </a>
              <hr className="my-4" />
              <a href="https://unsplash.com/photos/8Pm_A-OHJGg" target="_blank" className="text-white/90 hover:text-white">
                Image Source
              </a>
              <hr className="my-4" />
              <p>
                <a href="https://github.com/EgoistDeveloper/my-tailwind-components/blob/main/src/templates/parallax-landing-page.html" target="_blank" className="text-white/90 hover:text-white">
                  Source Code
                </a>
                |
                <a href="https://egoistdeveloper.github.io/my-tailwind-components/./src/templates/parallax-landing-page.html" target="_blank" className="text-white/90 hover:text-white">
                  Full Preview
                </a>
              </p>
            </span>
          </section>
          {/* Content */}
          <section className="p-20 space-y-8">
            <h1 className="text-4xl text-center my-20">Tempor sit labore nostrud</h1>
            <p>
              Exercitation non Lorem exercitation tempor amet ad esse velit. Anim
              deserunt id nulla quis ex magna culpa exercitation. Mollit consequat
              enim eiusmod cupidatat commodo eiusmod nulla. Id quis amet incididunt
              cillum dolore consectetur nulla incididunt laborum excepteur
              consectetur consectetur sunt tempor. Minim fugiat sint sunt ad elit
              laboris est sit est laboris labore do velit. Cillum aliquip pariatur
              deserunt eiusmod. Consequat irure nulla adipisicing deserunt culpa.
              Veniam enim deserunt sint consequat labore. Enim ullamco ea aute duis
              et nostrud voluptate fugiat consectetur et velit cillum anim dolore.
              In exercitation proident proident nostrud voluptate. Fugiat elit esse
              labore pariatur ex. Ex labore esse voluptate nisi in. Ad anim deserunt
              reprehenderit est. Aliquip pariatur nulla dolor amet quis aliqua sit
              nisi officia enim velit. Ad enim eu dolor quis ipsum. Nulla amet
              consectetur adipisicing ullamco qui tempor dolor excepteur dolore anim
              pariatur quis laboris consequat. Consectetur ullamco consectetur minim
              eiusmod quis veniam esse consectetur anim nostrud est pariatur
              laborum. Mollit tempor minim amet esse. Lorem officia consequat
              eiusmod sunt. Proident occaecat velit et consequat irure est cupidatat
              tempor ullamco. Aliquip est pariatur ea ut qui ad sit dolor laboris
              adipisicing officia eiusmod sit. Proident Lorem ex cillum sint
              cupidatat amet nulla veniam laborum velit pariatur. Fugiat excepteur
              culpa sunt est anim sunt. Ea voluptate non do proident sunt ad cillum
              enim esse.
            </p>
            <p>
              Incididunt eu pariatur laborum reprehenderit duis ex cillum fugiat.
              Occaecat tempor commodo officia esse reprehenderit commodo. Irure nisi
              culpa anim velit esse do esse veniam dolore fugiat. Non anim elit ad
              ad esse veniam dolore labore consectetur nulla dolor occaecat quis
              tempor. Ad do exercitation cillum duis consequat. Ea anim aute elit
              velit duis quis. Anim sint ut occaecat officia id exercitation ea
              incididunt exercitation sint ex. Reprehenderit ut qui eiusmod
              cupidatat incididunt ad reprehenderit culpa tempor quis. Elit eu dolor
              anim tempor eu fugiat voluptate dolor aliqua sint ex proident ullamco.
              Labore deserunt velit quis cupidatat aliquip elit do labore ut.
              Laborum dolore incididunt officia esse reprehenderit pariatur ullamco
              consectetur tempor officia. Dolor culpa irure enim aute ex non veniam
              eiusmod ipsum elit est sit mollit dolor. Est ad anim pariatur
              consequat ad sit nisi.
            </p>
            <p>
              Ipsum ea ad fugiat incididunt ea sit laborum cupidatat in ullamco
              ullamco fugiat et id. Sit commodo enim enim veniam do. Ad id ad tempor
              deserunt cupidatat reprehenderit ullamco officia excepteur culpa.
              Officia amet in do voluptate exercitation pariatur officia et sit.
              Adipisicing deserunt do aliquip ad id elit sint voluptate sit anim
              nulla pariatur dolore. Lorem do commodo aute veniam deserunt magna
              commodo cillum magna veniam. Ea amet nostrud commodo nisi adipisicing
              cillum commodo. Nostrud aliquip cupidatat veniam culpa aute officia
              commodo velit. Laborum quis aute nulla amet officia esse proident sunt
              irure dolor fugiat incididunt occaecat. Commodo esse eiusmod fugiat eu
              enim nisi sit id ut adipisicing. Enim nisi mollit ea aliqua nisi qui
              ullamco eu velit et ullamco. Magna eiusmod eiusmod culpa proident
              minim laboris fugiat enim laborum quis mollit minim do nisi. Elit
              irure incididunt duis ullamco exercitation nulla fugiat. Eu ullamco
              aliquip aute consectetur excepteur consequat. Non nostrud officia sint
              enim et ad sunt amet pariatur deserunt enim reprehenderit. Aute Lorem
              adipisicing laborum labore labore tempor officia officia reprehenderit
              incididunt enim officia laborum. Proident eu irure occaecat ipsum elit
              elit anim eu aute commodo ullamco reprehenderit incididunt elit.
              Mollit voluptate eiusmod ullamco fugiat ex enim in fugiat et
              consectetur duis do. Et aliqua ad labore labore ea ipsum nostrud
              veniam et reprehenderit. Sint ad sit voluptate consequat cillum do
              fugiat Lorem. Pariatur ad ad reprehenderit cupidatat nulla ipsum
              voluptate. Dolore pariatur ea laboris est excepteur.
            </p>
          </section>
        </main>
        {/* Footer */}
        <footer className="bg-gray-800 pt-10 sm:mt-10 pt-10 w-full">
          <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
            {/* Col-1 */}
            <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
              {/* Col Title */}
              <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                Getting Started
              </div>
              {/* Links */}
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Installation
              </a>
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Release Notes
              </a>
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Upgrade Guide
              </a>
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Using with Preprocessors
              </a>
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Optimizing for Production
              </a>
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Browser Support
              </a>
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                IntelliSense
              </a>
            </div>
            {/* Col-2 */}
            <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
              {/* Col Title */}
              <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                Core Concepts
              </div>
              {/* Links */}
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Utility-First
              </a>
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Responsive Design
              </a>
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Hover, Focus, &amp; Other States
              </a>
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Dark Mode
              </a>
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Adding Base Styles
              </a>
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Extracting Components
              </a>
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Adding New Utilities
              </a>
            </div>
            {/* Col-3 */}
            <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
              {/* Col Title */}
              <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                Customization
              </div>
              {/* Links */}
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Configuration
              </a>
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Theme Configuration
              </a>
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Breakpoints
              </a>
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Customizing Colors
              </a>
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Customizing Spacing
              </a>
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Configuring Variants
              </a>
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Plugins
              </a>
            </div>
            {/* Col-3 */}
            <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
              {/* Col Title */}
              <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                Community
              </div>
              {/* Links */}
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                GitHub
              </a>
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Discord
              </a>
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Twitter
              </a>
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                YouTube
              </a>
            </div>
          </div>
          {/* Copyright Bar */}
          <div className="pt-2">
            <div className="flex pb-5 px-3 m-auto pt-5 border-t border-gray-500 text-gray-400 text-sm flex-col md:flex-row max-w-6xl">
              <div className="mt-2">© Copyright 1998-year. All Rights Reserved.</div>
              {/* Required Unicons (if you want) */}
              <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                <a href="#" className="w-6 mx-1">
                  <i className="uil uil-facebook-f" />
                </a>
                <a href="#" className="w-6 mx-1">
                  <i className="uil uil-twitter-alt" />
                </a>
                <a href="#" className="w-6 mx-1">
                  <i className="uil uil-youtube" />
                </a>
                <a href="#" className="w-6 mx-1">
                  <i className="uil uil-linkedin" />
                </a>
                <a href="#" className="w-6 mx-1">
                  <i className="uil uil-instagram" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Landing_Page_Main