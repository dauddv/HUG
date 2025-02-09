import { FaPlus } from "react-icons/fa6";
import { FaHouseUser, FaBinoculars, FaBrain, FaHistory } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { PiUser } from "react-icons/pi";

const Sidebar = ( { sideBarInnerisActive } ) => {
    return (
        <div className={`sideBarInner ${sideBarInnerisActive ? 'sideBarActiveClass' : ''}`}>
            <div className="sidebarInnerTop">
                <div className="newChat">
                    <div className="newChatLogo"><FaPlus /></div>
                    <div className="newChattext"><h3>New Chat</h3></div>
                </div>
                <div className="sideBarlists">
                    <div className="sidebarlist Home">
                        <div className="sidebarlistLogo"><FaHouseUser /></div>
                        <div className="sidebarlisttext"><h2>Home</h2></div>
                    </div>
                    <div className="sidebarlist Discover">
                        <div className="sidebarlistLogo"><FaBinoculars /></div>
                        <div className="sidebarlisttext"><h2>Discover</h2></div>
                    </div>
                    <div className="sidebarlist Brain">
                        <div className="sidebarlistLogo"><FaBrain /></div>
                        <div className="sidebarlisttext"><h2>Brain</h2></div>
                    </div>
                    <div className="sidebarlist History">
                        <div className="sidebarHistory">
                            <div className="sidebarlistLogo"><FaHistory /></div>
                            <div className="sidebarlisttext"><h2>History</h2></div>
                        </div>
                        <div className="historyInner">
                            <h6>AI Chat Tool Ethics</h6>
                            <h6>AI Chat Tool Ethics</h6>
                            <h6>AI Chat Tool Ethics</h6>
                            <h6>Al Chat Tool Impact with...</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sidebarInnerBottom">
                <div className="sidebarInnerBottomlogoandtext">
                    <div className="sidebarInnerBottomlogo"><PiUser /></div>
                    <div className="sidebarInnerBottomtext"><p className="Inter">Your agent team</p></div>
                </div>
                <div className="sidebarInnerBottomlogoandtext">
                    <div className="sidebarInnerBottomlogo"><IoSunnyOutline /></div>
                    <div className="sidebarInnerBottomtext"><p className="Inter">Help & Support</p></div>
                </div>
                <div className="copyRight">
                    <p>H.U.G © 2024 | Privacy | Terms</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
