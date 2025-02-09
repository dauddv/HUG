import { GrMicrophone } from "react-icons/gr";
import { LiaImageSolid } from "react-icons/lia";
import { RiShutDownLine } from "react-icons/ri";

const Innerpage = () => {
  return (
    <div>
        <div className="InnerPageInner">
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
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="utilitiesClass">
                            <div className="utilitiesClassLogo"><RiShutDownLine /></div>
                            <div className="utilitiesClasstext"><p className="Inter">Help me turn on my utilities</p></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="utilitiesClass">
                            <div className="utilitiesClasstext"><p className="Inter">Help me turn on my utilities</p></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="utilitiesClass">
                            <div className="utilitiesClasstext"><p className="Inter">Help me turn on my utilities</p></div>
                        </div>
                    </div>


                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="utilitiesClass">
                            <div className="utilitiesClassLogo"><RiShutDownLine /></div>
                            <div className="utilitiesClasstext"><p className="Inter">Help me turn on my utilities</p></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="utilitiesClass">
                            <div className="utilitiesClasstext"><p className="Inter">Help me turn on my utilities</p></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="utilitiesClass">
                            <div className="utilitiesClasstext"><p className="Inter">Help me turn on my utilities</p></div>
                        </div>
                    </div>.
                </div>
        </div>
      
    </div>
  )
}

export default Innerpage
