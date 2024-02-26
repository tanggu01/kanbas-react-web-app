import {courses} from "../Database";
import {Navigate, Route, Routes, useLocation, useMatch, useParams} from "react-router-dom";
import {HiMiniBars3} from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";

const colorRed = {color: "red"};
const colorBlack = {color: "black"};

function Courses() {
    const {courseId} = useParams();
    const course = courses.find((course) => course._id === courseId);
    const {pathname} = useLocation();
    const match = useMatch('/Kanbas/Courses/:courseId/:path')
    const value = match?.params.path;
    return (
        <div>
            <h2 style={colorRed}>
                <HiMiniBars3/>
                {`${course?.name} `}
                <span style={colorBlack}>{`> ${value}`}</span></h2>

            <div>
                <hr/>
            </div>

            <div className={"d-flex"}>
                <div className={"d-none d-sm-block"}>
                    <CourseNavigation/>
                </div>
                <div className={"flex-fill"} >
                    {/*// className="overflow-y-scroll position-fixed bottom-0 end-0"*/}
                    {/*// style={{left: "200px", top: "70px"}}>*/}
                    <Routes>
                        <Route path="/" element={<Navigate to="Home"/>}/>
                        <Route path="Home" element={<Home/>}/>
                        <Route path="Modules" element={<Modules/>}/>
                        <Route path="Piazza" element={<h1>Piazza</h1>}/>
                        <Route path="Assignments" element={<Assignments/>}/>
                        <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>}/>
                        <Route path="Grades" element={<h1>Grades</h1>}/>
                    </Routes>
                </div>
            </div>

        </div>
    );
}

export default Courses;