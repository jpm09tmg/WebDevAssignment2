import React from "react";

const Footer = ({footerText})=>{
    return(
        <footer className='text-3xl font-semibold py-4 bg-gray-800 text-white w-full text-center'>
            <p>Canada High School</p>
            <p className="text-sm font-light">Est. 1886</p>
        </footer>
    )
}

export default Footer