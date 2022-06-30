import "./home.scss";
import { useState } from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navbar/Navbar";
import { Widget } from "../../components/widget/Widget";
import { Chat } from "../../components/chat/Chat";
import { Login } from "../../components/login/Login";

const Home = () => {
    const [chatPopup, setChatPopup] = useState(false);

    const changeNavbar = () => {
        setChatPopup(!chatPopup)
    }

    const [login, setLogin] = useState(false);

    const toggleLogin = () => {
        setLogin(!login)
    };


    return(
        <div className="home">
            <Sidebar toggleLogin={toggleLogin} />
            <div className="homeContainer">
                <Navbar setChatPopup = {changeNavbar} />
                <div className="widgets">
                    <Widget type="crash" />
                    <Widget type="dice" />
                    <Widget type="mines" />
                    <Widget type="towers" />
                </div>
            </div>
            <Chat trigger={chatPopup} setTrigger = {setChatPopup} />
            <Login login={login} toggleLogin={toggleLogin} />
        </div>
    )
}

export default Home