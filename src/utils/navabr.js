import React from "react";


const Navbar = () => {


    return (
        <>
            {/* <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"> <h6 style={{ color: window.location.href.includes('/home') ? "red" : "black" }}>Navbar</h6> </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/home"> <h6 style={{ color: window.location.href.includes('/home') ? "red" : "black" }}>Home</h6> </a>

                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/about"><h6 style={{ color: window.location.href.includes('/about') ? "red" : "black" }}>About</h6></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contact"><h6 style={{ color: window.location.href.includes('/about') ? "red" : "black" }}>Contact</h6></a>
                            </li>


                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav> */}



            <header class="text-gray-600 body-font">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span class="ml-3 text-xl">NT GYM</span>
                    </a>
                    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <a class="mr-5 hover:text-gray-900" href="/Home" >Home</a>
                        <a class="mr-5 hover:text-gray-900" href="/About" >About</a>
                        <a class="mr-5 hover:text-gray-900" href="/Pricing" >Pricing</a>
                        <a class="mr-5 hover:text-gray-900" href="/Contact" >Contact Us</a>
                    </nav>
                    {/* <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button> */}
                </div>
            </header>


        </>
    )


}


export default Navbar; 