import HomeCard from './HomeCard/HomeCard'
import { GrMicrophone } from "react-icons/gr";
import { LiaImageSolid } from "react-icons/lia";
import { RiShutDownLine } from "react-icons/ri";

const Home = () => {

  return (
    <>
     <div className="homeBackground">
            <div className="InnerPageInner HomeMainClass">
                <div className="inenerPageheading">
                    <h1>What can I help with?</h1>
                </div>
                <div className="innerPageSearch">
                    <div className="innerPageSearchInput">
                        <input type="text" placeholder="Ask me...." />
                    </div>
                    <div className="innerPageSearchLogo">
                        <GrMicrophone />
                        <LiaImageSolid />
                    </div>
                </div>
                <div className="row utilitiesRow">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="utilitiesClass">
                                <div className="utilitiesClassLogo"><RiShutDownLine /></div>
                                <div className="utilitiesClasstext"><p className="Inter">Help me turn on my utilities</p></div>
                            </div>
                        </div>    
    
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="utilitiesClass">
                                <div className="utilitiesClassLogo"><RiShutDownLine /></div>
                                <div className="utilitiesClasstext"><p className="Inter">Help me turn on my utilities</p></div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="utilitiesClass">
                                <div className="utilitiesClassLogo"><RiShutDownLine /></div>
                                <div className="utilitiesClasstext"><p className="Inter">Help me turn on my utilities</p></div>
                            </div>
                        </div>    
    
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="utilitiesClass">
                                <div className="utilitiesClassLogo"><RiShutDownLine /></div>
                                <div className="utilitiesClasstext"><p className="Inter">Help me turn on my utilities</p></div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="hameCardCall">          
          <HomeCard/>
        </div>
        </div>
          
        </>
  )
}

export default Home