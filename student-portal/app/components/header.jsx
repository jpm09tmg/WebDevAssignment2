import React from "react";

const Header = () =>{
    return(
    <header className="text-3xl font-bold py-7 bg-gray-800 text-white w-full text-center">
            <p>Student information</p>
        <nav className="mt-4 flex justify-center text-lg font-light">
            <a href="home" className="hover:text-indigo-400 px-4">Home</a>
            <a href="students" className="hover:text-indigo-400 px-4">Students</a>
            <a href="add-student" className="hover:text-indigo-400 px-4">Add Student</a>
            <a href="contact" className="hover:text-indigo-400 px-4"> Contact</a>
        </nav>
    </header>
    )
}

export default Header
