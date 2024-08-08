import React from 'react';
import {Link} from 'react-router-dom';
import Logo from "../../Assets/logo-DRTkl0cC.png"
function Nav01(props) {
    return (
        <div className={"w-full h-28 bg-white"}>
            <img src={Logo} alt="" className={"w-[50px] h-[50px]}/>"}/>
            <Link to="/biz" >BizHaqimizda</Link>
            <Link to="/">home</Link>
            <Link to="/dars">Darslar</Link>


        </div>
    );
}

export default Nav01;