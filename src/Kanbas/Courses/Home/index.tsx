import ModuleList from "../Modules/List";
import {AiFillCalendar} from "react-icons/ai";
import {FaArrowRightToBracket, FaCircleExclamation} from "react-icons/fa6";
import {FaBan, FaBell, FaBullhorn, FaCheckCircle, FaDotCircle, FaFileImport, FaStream} from "react-icons/fa";

const statusBox = {"color": "grey", "font-size": "10px", "padding-left": "20px"};
const buttonMargin = {"marginRight": "5px"};

function Home() {
    return (
        <div className="d-flex">
            <div className={"flex-fill"}>
                <ModuleList/>
            </div>
            {/*<h2>Status</h2>*/}
            <div className="flex-grow-0 me-2 d-none d-lg-block" style={{"width": "250px"}}>
                <h5 style={{"paddingTop": "5px"}}>Course Status</h5>
                <div className="btn-status-group" role="group">
                    <button className="btn btn-unpublished" type="button">
                        <FaBan style={buttonMargin} />
                        Unpublish
                    </button>
                    <button className="btn btn-published" type="button">
                        <FaCheckCircle style={{ color: "white" , "marginRight" : "5px"}}/>
                        Published
                    </button>
                </div>
                <button className="btn btn-status d-block" type="button">
                    <FaFileImport style={buttonMargin} />
                    Import Existing Content
                </button>
                <button className="btn btn-status d-block" type="button">
                    <FaArrowRightToBracket style={buttonMargin} />
                    Import from Commons
                </button>
                <button className="btn btn-status d-block" type="button">
                    <FaDotCircle style={buttonMargin} />
                    Choose Home Page
                </button>
                <button className="btn btn-status d-block" type="button">
                    <FaStream style={buttonMargin} />
                    View Course Stream
                </button>
                <button className="btn btn-status d-block" type="button">
                    <FaBullhorn style={buttonMargin} />
                    New Announcement
                </button>
                <button className="btn btn-status d-block" type="button">
                    <FaStream style={buttonMargin} />
                    New Analytics
                </button>
                <button className="btn btn-status d-block" type="button">
                    <FaBell style={buttonMargin} />
                    View Course Notification
                </button>
                <br/>

                <div>
                    <p style={{"marginBottom": 0}}>To Do</p>
                    <hr style={{"margin": "unset", "width": "100%"}}/>
                </div>
                <div className="list-group list-group-flush">
                    <a className="list-group-item list-group-item-action" href="#">
                        <FaCircleExclamation style={{"color": "red"}}/>
                        <span style={{"color": "red"}}>Grade A1 - ENV + HTML</span><br/>
                        <span style={statusBox}>100 points Sp 18 at 11:59pm
				</span>
                    </a>
                </div>
                <br/>
                <div className="wd-flex-row-container">
                    <div className="d-flex">
                    <div className="col-6">Coming Up</div>
                        <AiFillCalendar style={{"color": "black", "justifyContent": "flex-end", "padding": "1px"}}/>
                    <div style={{"fontSize": "13px", "color": "red"}}> View Calendar</div>
                    </div>
                </div>

                <hr style={{"margin": "unset", "width": "100%"}}/>
                <div className="list-group list-group-flush">
                    <a className="list-group-item list-group-item-action" href="#">
                        <AiFillCalendar style={{"color": "black", "marginRight": "5px"}}/>
                        <span style={{"color": "red"}}>Grade A1 - ENV + HTML</span><br/>
                        <span style={statusBox}>CS4550.12631.202410</span><br/>
                        <span style={statusBox}>Sep 11 at 11:45am</span>
                    </a>
                    <a className="list-group-item list-group-item-action" href="#">
                        <AiFillCalendar style={{"color": "black", "marginRight": "5px"}}/>
                        <span style={{"color": "red"}}>Grade A1 - ENV + HTML</span><br/>
                        <span style={statusBox}>CS4550.12631.202410</span><br/>
                        <span style={statusBox}>Sep 11 at 11:45am</span>
                    </a>
                    <a className="list-group-item list-group-item-action" href="#">
                        <AiFillCalendar style={{"color": "black", "marginRight": "5px"}}/>
                        <span style={{"color": "red"}}>Grade A1 - ENV + HTML</span><br/>
                        <span style={statusBox}>CS4550.12631.202410</span><br/>
                        <span style={statusBox}>Sep 11 at 11:45am</span>
                    </a>
                </div>
                <div style={{"color": "red", "fontSize": "10px"}}>12 more in the next week...</div>

            </div>
        </div>
    );
}

export default Home;