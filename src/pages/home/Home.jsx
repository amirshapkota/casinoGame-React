import "./home.scss";
import { useState } from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navbar/Navbar";
import { Widget } from "../../components/widget/Widget";
import { Chat } from "../../components/chat/Chat";

const Home = () => {
    const [chatPopup, setChatPopup] = useState(false);

    const changeNavbar = () => {
        setChatPopup(!chatPopup)
    }

    return(
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar setChatPopup = {changeNavbar} />
                <div className="widgets">
                    <Widget type="crash" />
                    <Widget type="spin" />
                    <Widget type="wheel" />
                    <Widget type="lottery" />
                </div>
            </div>
            <Chat trigger={chatPopup} setTrigger = {setChatPopup} />
        </div>
    )
}

export default Home