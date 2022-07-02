import "./home.scss";
import { useState } from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navbar/Navbar";
import { Widget } from "../../components/widget/Widget";
import { Chat } from "../../components/chat/Chat";
import { List } from "../../components/table/Table";

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
                    <Widget type="dice" />
                    <Widget type="mines" />
                    <Widget type="towers" />
                </div>
                <div className="widgets">
                    <Widget type="plinko" />
                    <Widget type="roulette" />
                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest Bets</div>
                    <List />
                </div>
            </div>
            <Chat trigger={chatPopup} setTrigger = {setChatPopup} />
        </div>
    )
}

export default Home