import {useState, useEffect} from "react";

export const NavBar = () => {
    const [active1, setActive1] = useState("active");
    const [active2, setActive2] = useState("");

    useEffect ( () => {
        if(window.location.pathname === "/CheckPassword"){
            setActive1("");
            setActive2("active");
        }else{
            setActive1("active");
            setActive2("");
        }
    },[])
    return (
        <>
        <ul className="navbar">
            <li><a href="/" id={active1} >Generate Password</a></li>
            <li><a href="/CheckPassword" id={active2}>Check Password</a></li>
        </ul>
        </>
    );
}