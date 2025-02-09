import { BiSolidError } from "react-icons/bi";
import { FaListCheck } from "react-icons/fa6";
import { IoMdCheckmark, IoMdHome  } from "react-icons/io";
import { HiOutlineXMark } from "react-icons/hi2";
import { AiFillLike } from "react-icons/ai";

const Todo = () => {
    return (
        <div>

            <div className="todoPage">
                <div className="todoNavabar">
                    <ul>
                        <li className="active">Nearby</li>
                        <li>Todo’s</li>
                        <li>Design</li>
                        <li>Shop</li>
                    </ul>
                </div>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <div className="accordion-body"><p>This is your home inspection report summarized and organized into a to do list, I have highlighted theareas of concern and have found reliable contractors to get the work done.</p></div>
                        <div className="UrgRecMenMAin">
                            <div className="UrgRecMen Urg"><h5>Urgent</h5></div>
                            <div className="UrgRecMen Rec"><h5>Recommendation</h5></div>
                            <div className="UrgRecMen Men"><h5>Maintenance</h5></div>
                        </div>
                    </div>

                </div>

                <div className="urgentMain">
                    <BiSolidError />
                    <div className="fenceMAin">
                        <div className="fenceLofoText">
                            <h2><span>What's Urgent </span></h2>
                            <div className="todosLodoAndText todos1">
                                <FaListCheck /><h6>TO-DO’S (0/8)</h6>
                            </div>
                        </div>
                        <h6 className="Summarryh6"><strong>Simple Summary:</strong> Your exterior is in good condition overall. Their are 8 items that you should consider getting fixed right away in red. </h6>
                    </div>
                    <div className="todoMain">
                        <div className="todosTop">
                        </div>
                        <div className="todosbottom">
                            <div className="todosLodoAndText todos3"><h6>Completed</h6><IoMdCheckmark /></div>
                            <div className="todosLodoAndText todos4"><h6>Dismiss All</h6><HiOutlineXMark /></div>
                        </div>
                    </div>
                </div>
                <div className="todoCardMain">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="todoCard todoCardred">
                                <div className="todoCardMainheaChec">
                                    <p>Windows and Doors</p>
                                    <input type="checkbox" />
                                </div>
                                <div className="exteriorBtn">
                                    <h5>EXTERIOR</h5>
                                </div>
                                <div className="todoCardImg">
                                    <img src="/todocardimg1.png" />
                                </div>
                                <div className="todoCardPara"><h6>Rear living room window exterior panel has a chip that needs replacing.</h6></div>
                                <div className="todoCardBtn">
                                    <button><h6>Request 3+ Quotes</h6></button>
                                    <div className="todocardPriceline"><h5>Approx Cost: $700-$1,200</h5></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="todoCard todoCardred">
                                <div className="todoCardMainheaChec">
                                    <p>Windows and Doors</p>
                                    <input type="checkbox" />
                                </div>
                                <div className="exteriorBtn">
                                    <h5>EXTERIOR</h5>
                                </div>
                                <div className="todoCardImg">
                                    <img src="/todocardimg2.png" />
                                </div>
                                <div className="todoCardPara"><h6>Cracked outer window pane in the rear living room needs replacing.</h6></div>
                                <div className="todoCardBtn">
                                    <button><h6>Request 3+ Quotes</h6></button>
                                    <div className="todocardPriceline"><h5>Approx Cost: $700-$1,200</h5></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="todoCard todoCardred">
                                <div className="todoCardMainheaChec">
                                    <p>Windows and Doors</p>
                                    <input type="checkbox" />
                                </div>
                                <div className="exteriorBtn">
                                    <h5>EXTERIOR</h5>
                                </div>
                                <div className="todoCardImg">
                                    <img src="/todocardimg3.png" />
                                </div>
                                <div className="todoCardPara"><h6>Front living room window has condensation issues and difficulty opening/closing that needs further evaluation and repair.</h6></div>
                                <div className="todoCardBtn">
                                    <button><h6>Request 3+ Quotes</h6></button>
                                    <div className="todocardPriceline"><h5>Approx Cost: $700-$1,200</h5></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="todoCard todoCardred">
                                <div className="todoCardMainheaChec">
                                    <p>Electrical</p>
                                    <input type="checkbox" />
                                </div>
                                <div className="exteriorBtn">
                                    <h5>EXTERIOR</h5>
                                </div>
                                <div className="todoCardImg">
                                    <img src="/todocardimg4.png" />
                                </div>
                                <div className="todoCardPara"><h6>Loose rear patio outlet needs further evaluation and repair by an electrician.</h6></div>
                                <div className="todoCardBtn">
                                    <button><h6>Request 3+ Quotes</h6></button>
                                    <div className="todocardPriceline"><h5>Approx Cost: $700-$1,200</h5></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="todoCard todoCardred">
                                <div className="todoCardMainheaChec">
                                    <p>Electrical</p>
                                    <input type="checkbox" />
                                </div>
                                <div className="exteriorBtn">
                                    <h5>EXTERIOR</h5>
                                </div>
                                <div className="todoCardImg">
                                    <img src="/todocardimg5.png" />
                                </div>
                                <div className="todoCardPara"><h6>Non-working rear patio step lights need further checking on current functionality.</h6></div>
                                <div className="todoCardBtn">
                                    <button><h6>Request 3+ Quotes</h6></button>
                                    <div className="todocardPriceline"><h5>Approx Cost: $700-$1,200</h5></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="todoCard todoCardred">
                                <div className="todoCardMainheaChec">
                                    <p>Plumbing</p>
                                    <input type="checkbox" />
                                </div>
                                <div className="exteriorBtn">
                                    <h5>EXTERIOR</h5>
                                </div>
                                <div className="todoCardImg">
                                    <img src="/todocardimg6.png" />
                                </div>
                                <div className="todoCardPara"><h6>Missing outlet and fixture covers in downstairs closet need further evaluation and repair.</h6></div>
                                <div className="todoCardBtn">
                                    <button><h6>Request 3+ Quotes</h6></button>
                                    <div className="todocardPriceline"><h5>Approx Cost: $700-$1,200</h5></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="todoCard todoCardred">
                                <div className="todoCardMainheaChec">
                                    <p>Plumbing</p>
                                    <input type="checkbox" />
                                </div>
                                <div className="exteriorBtn">
                                    <h5>EXTERIOR</h5>
                                </div>
                                <div className="todoCardImg">
                                    <img src="/todocardimg7.png" />
                                </div>
                                <div className="todoCardPara"><h6>Loose toilets in downstairs and upstairs hall bathrooms need new wax rings and further evaluation by a plumber.</h6></div>
                                <div className="todoCardBtn">
                                    <button><h6>Request 3+ Quotes</h6></button>
                                    <div className="todocardPriceline"><h5>Approx Cost: $700-$1,200</h5></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="todoCard todoCardred">
                                <div className="todoCardMainheaChec">
                                    <p>Pool/Spa</p>
                                    <input type="checkbox" />
                                </div>
                                <div className="exteriorBtn">
                                    <h5>EXTERIOR</h5>
                                </div>
                                <div className="todoCardImg">
                                    <img src="/todocardimg8.png" />
                                </div>
                                <div className="todoCardPara"><h6>Section of spa tiles separated from grout needs sealant installed.</h6></div>
                                <div className="todoCardBtn">
                                    <button><h6>Request 3+ Quotes</h6></button>
                                    <div className="todocardPriceline"><h5>Approx Cost: $700-$1,200</h5></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="information informationred">
                    <h2>Notes from your inspector</h2>
                    <div className="paraInformation">
                        <p>A visual inspection  of the exterior surfaces was performed around the home to include the exterior surface material, soffit/fascia surfaces, doors and windows, and other exterior surface areas. </p>
                        <p>The exterior wall covering, trim, and flashing were visually inspected for concerns related to installation, paint/stain condition, damage and general maintenance issues. The entry doors to the home were tested and inspected by operating the doors, checking the lock and latch, inspecting the weather-stripping, inspecting any screens present and checking for any physical damage.</p>
                        <p>The exterior of the windows were visually inspected for signs of cracked glass, damaged screens, caulking around edges and seams, paint or finish deterioration, and general concerns. The driveway and exterior concrete surfaces around the home were walked and inspected for surface deterioration, trip hazards, poor slope or drainage and any general areas of concern. The surface grading and drainage was inspected to determine if areas exist that will adversely affect the home.</p>
                    </div>
                </div>
                <div className="informationLine"></div>

                <div className="urgentMain urgentLike">
                    <div className="AiFillLike"><AiFillLike /></div>

                    <div className="fenceMAin">
                        <div className="fenceLofoText">
                            <h2>What's Recommended</h2>
                            <div className="todosLodoAndText todos1">
                                <FaListCheck /><h6>TO-DO’S (0/8)</h6>
                            </div>
                        </div>
                        <h6 className="Summarryh6"><strong>Simple Summary:</strong> Your exterior is in good condition overall. Their are 8 items that you should consider getting fixed right away in red. </h6>
                    </div>
                    <div className="todoMain">
                        <div className="todoMain">
                            <div className="todosTop">
                            </div>
                            <div className="todosbottom">
                                <div className="todosLodoAndText todos3"><h6>Completed</h6><IoMdCheckmark /></div>
                                <div className="todosLodoAndText todos4"><h6>Dismiss All</h6><HiOutlineXMark /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="todoCardMain">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="todoCard todoCardyellow">
                                <div className="todoCardMainheaChec">
                                    <p>Meter base not secure</p>
                                    <input type="checkbox" />
                                </div>
                                <div className="exteriorBtn">
                                    <h5>Pool & Spa</h5>
                                </div>
                                <div className="todoCardImg">
                                    <img src="/todocardimg9.png" />
                                </div>
                                <div className="todoCardPara"><h6>At the time of inspection the metal fencing in the back was broken and had rust on it. Recommend ....</h6></div>
                                <div className="todoCardBtn">
                                    <button><h6>Request 3+ Quotes</h6></button>
                                    <div className="todocardPriceline"><h5>Approx Cost: $700-$1,200</h5></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="todoCard todoCardyellow">
                                <div className="todoCardMainheaChec">
                                    <p>Meter base not secure</p>
                                    <input type="checkbox" />
                                </div>
                                <div className="exteriorBtn">
                                    <h5>Pool & Spa</h5>
                                </div>
                                <div className="todoCardImg">
                                    <img src="/todocardimg9.png" />
                                </div>
                                <div className="todoCardPara"><h6>At the time of inspection the metal fencing in the back was broken and had rust on it. Recommend ....</h6></div>
                                <div className="todoCardBtn">
                                    <button><h6>Request 3+ Quotes</h6></button>
                                    <div className="todocardPriceline"><h5>Approx Cost: $700-$1,200</h5></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="todoCard todoCardyellow">
                                <div className="todoCardMainheaChec">
                                    <p>Meter base not secure</p>
                                    <input type="checkbox" />
                                </div>
                                <div className="exteriorBtn">
                                    <h5>Pool & Spa</h5>
                                </div>
                                <div className="todoCardImg">
                                    <img src="/todocardimg9.png" />
                                </div>
                                <div className="todoCardPara"><h6>At the time of inspection the metal fencing in the back was broken and had rust on it. Recommend ....</h6></div>
                                <div className="todoCardBtn">
                                    <button><h6>Request 3+ Quotes</h6></button>
                                    <div className="todocardPriceline"><h5>Approx Cost: $700-$1,200</h5></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="todoCard todoCardyellow">
                                <div className="todoCardMainheaChec">
                                    <p>Meter base not secure</p>
                                    <input type="checkbox" />
                                </div>
                                <div className="exteriorBtn">
                                    <h5>Pool & Spa</h5>
                                </div>
                                <div className="todoCardImg">
                                    <img src="/todocardimg9.png" />
                                </div>
                                <div className="todoCardPara"><h6>At the time of inspection the metal fencing in the back was broken and had rust on it. Recommend ....</h6></div>
                                <div className="todoCardBtn">
                                    <button><h6>Request 3+ Quotes</h6></button>
                                    <div className="todocardPriceline"><h5>Approx Cost: $700-$1,200</h5></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="information informationyellow">
                    <h2>Information from your inspector</h2>
                    <div className="paraInformation">
                        <p>A visual inspection  of the exterior surfaces was performed around the home to include the exterior surface material, soffit/fascia surfaces, doors and windows, and other exterior surface areas. </p>
                        <p>The exterior wall covering, trim, and flashing were visually inspected for concerns related to installation, paint/stain condition, damage and general maintenance issues. The entry doors to the home were tested and inspected by operating the doors, checking the lock and latch, inspecting the weather-stripping, inspecting any screens present and checking for any physical damage. The exterior of the windows were visually inspected for signs of cracked glass, damaged screens, caulking around edges and seams, paint or finish deterioration, and general concerns. The driveway and exterior concrete surfaces around the home were walked and inspected for surface deterioration, trip hazards, poor slope or drainage and any general areas of concern. The surface grading and drainage was inspected to determine if areas exist that will adversely affect the home.</p>
                    </div>
                </div>



                <div className="informationLine"></div>

                <div className="urgentMain maintenanceHome">
                    <div className="IoMdHome"><IoMdHome /></div>

                    <div className="fenceMAin">
                        <div className="fenceLofoText">
                            <h2>Maintenance  </h2>
                            <div className="todosLodoAndText todos1">
                                <FaListCheck /><h6>TO-DO’S (0/8)</h6>
                            </div>
                        </div>
                        <h6 className="Summarryh6"><strong>Simple Summary:</strong> Your exterior is in good condition overall. Their are 8 items that you should consider getting fixed right away in red. </h6>
                    </div>
                    <div className="todoMain">
                        <div className="todoMain">
                            <div className="todosTop">
                            </div>
                            <div className="todosbottom">
                                <div className="todosLodoAndText todos3"><h6>Completed</h6><IoMdCheckmark /></div>
                                <div className="todosLodoAndText todos4"><h6>Dismiss All</h6><HiOutlineXMark /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="todoCardMain">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="todoCard todoCardgreen">
                                <div className="todoCardMainheaChec">
                                    <p>Meter base not secure</p>
                                    <input type="checkbox" />
                                </div>
                                <div className="exteriorBtn">
                                    <h5>Pool & Spa</h5>
                                </div>
                                <div className="todoCardImg">
                                    <img src="/todocardimg9.png" />
                                </div>
                                <div className="todoCardPara"><h6>At the time of inspection the metal fencing in the back was broken and had rust on it. Recommend ....</h6></div>
                                <div className="todoCardBtn">
                                    <button><h6>Request 3+ Quotes</h6></button>
                                    <div className="todocardPriceline"><h5>Approx Cost: $700-$1,200</h5></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="todoCard todoCardgreen">
                                <div className="todoCardMainheaChec">
                                    <p>Meter base not secure</p>
                                    <input type="checkbox" />
                                </div>
                                <div className="exteriorBtn">
                                    <h5>Pool & Spa</h5>
                                </div>
                                <div className="todoCardImg">
                                    <img src="/todocardimg9.png" />
                                </div>
                                <div className="todoCardPara"><h6>At the time of inspection the metal fencing in the back was broken and had rust on it. Recommend ....</h6></div>
                                <div className="todoCardBtn">
                                    <button><h6>Request 3+ Quotes</h6></button>
                                    <div className="todocardPriceline"><h5>Approx Cost: $700-$1,200</h5></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="todoCard todoCardgreen">
                                <div className="todoCardMainheaChec">
                                    <p>Meter base not secure</p>
                                    <input type="checkbox" />
                                </div>
                                <div className="exteriorBtn">
                                    <h5>Pool & Spa</h5>
                                </div>
                                <div className="todoCardImg">
                                    <img src="/todocardimg9.png" />
                                </div>
                                <div className="todoCardPara"><h6>At the time of inspection the metal fencing in the back was broken and had rust on it. Recommend ....</h6></div>
                                <div className="todoCardBtn">
                                    <button><h6>Request 3+ Quotes</h6></button>
                                    <div className="todocardPriceline"><h5>Approx Cost: $700-$1,200</h5></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="todoCard todoCardgreen">
                                <div className="todoCardMainheaChec">
                                    <p>Meter base not secure</p>
                                    <input type="checkbox" />
                                </div>
                                <div className="exteriorBtn">
                                    <h5>Pool & Spa</h5>
                                </div>
                                <div className="todoCardImg">
                                    <img src="/todocardimg9.png" />
                                </div>
                                <div className="todoCardPara"><h6>At the time of inspection the metal fencing in the back was broken and had rust on it. Recommend ....</h6></div>
                                <div className="todoCardBtn">
                                    <button><h6>Request 3+ Quotes</h6></button>
                                    <div className="todocardPriceline"><h5>Approx Cost: $700-$1,200</h5></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="information informationgreen">
                    <h2>Information from your inspector</h2>
                    <div className="paraInformation">
                        <p>A visual inspection  of the exterior surfaces was performed around the home to include the exterior surface material, soffit/fascia surfaces, doors and windows, and other exterior surface areas. </p>
                        <p>The exterior wall covering, trim, and flashing were visually inspected for concerns related to installation, paint/stain condition, damage and general maintenance issues. The entry doors to the home were tested and inspected by operating the doors, checking the lock and latch, inspecting the weather-stripping, inspecting any screens present and checking for any physical damage. The exterior of the windows were visually inspected for signs of cracked glass, damaged screens, caulking around edges and seams, paint or finish deterioration, and general concerns. The driveway and exterior concrete surfaces around the home were walked and inspected for surface deterioration, trip hazards, poor slope or drainage and any general areas of concern. The surface grading and drainage was inspected to determine if areas exist that will adversely affect the home.</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Todo
