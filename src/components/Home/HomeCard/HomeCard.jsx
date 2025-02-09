import { PiWarningFill } from "react-icons/pi";
import { FaRegCalendarCheck,FaRegClock } from "react-icons/fa";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
import { FaExclamation } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const HomeCard = () => {
  const [pagination] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <>
    <div className="NavbarAlert">
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <span className="navbarExclamination"><FaExclamation /></span>
                    <p className="publicsans">I found 8 Urgent tasks from your inspection report</p>
                    <button type="button" data-bs-dismiss="alert" aria-label="Close"><IoMdClose /></button>
                </div>
            </div>
      <div className="HomeCardMAin">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
                <div className="HVAClogoText">
                    <div className="HVAClogo"><PiWarningFill /></div>
                    <div className="HVACText">
                        <h1>HVAC Filter Replacement</h1>
                        <p>Moderate to heavy cooling damage was present on the exterior unit.</p>
                        <div className="HVACTextSplit">
                          <p>Due: 2024-12-25</p>
                          <p>Estimated Cost: $30-50</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
                <div className="cardMAin">
                    <div className="card1TextandImg">
                      <div className="card1Text">
                        <h2>Jimmy Jones Roofing Company and Son</h2>
                        <div className="card1btn"><a href="#">ROOFER</a></div>
                      </div>
                      <div className="card1Img"><img src="cardImg.png"/></div>
                    </div>
                    <div className="card2TextandBtn">
                      <div className="card2Text">
                        <div className="card2Innerlogotext">
                          <div className="card2Innerlogo"><FaRegCalendarCheck /></div>
                          <div className="card2InnerText"><h3>Tomorrow</h3></div>
                        </div>
                        <div className="card2Innerlogotext">
                          <div className="card2Innerlogo"><FaRegClock /></div>
                          <div className="card2InnerText"><h3>$500-$2,300</h3></div>
                        </div>
                      </div>
                      <div className="card2Btn"><a href="#">REQUEST QUOTE</a></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="cardPagination">
          <div className="cardPaginationtext"><h4>DO-IT-YOURSELF</h4></div>
          <div className="cardPaginationNumber">
            <div className="paginationPrev paginatioBtn"><a href="#"><IoIosArrowBack /></a></div>
            {
              pagination.map((item) => {
                return <div className="paginatioBtn" key={item}><a href="#">{item}</a></div>
              })
            }
            <div className="paginationPrev paginatioBtn"><a href="#"><IoIosArrowForward /></a></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeCard
