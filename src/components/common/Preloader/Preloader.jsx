import React from "react";
import preloader from './../../../assets/images/preloader.gif'

const Preloader = (props) => {
    return (
        <>
        <div>
        <img src={preloader} alt="hello"/>
        </div>
        </>
    )
}

export default Preloader;