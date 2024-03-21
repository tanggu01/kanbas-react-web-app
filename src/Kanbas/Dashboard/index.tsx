import React, {useState} from "react";
import {Link} from "react-router-dom";
import * as db from "../Database";
import {FaPenSquare} from "react-icons/fa";

function Dashboard(
    //3.2  move the state variables and event handler functions to Kanbas
    // and then accept them as parameters
    { courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse }: {
        courses: any[]; course: any; setCourse: (course: any) => void;
        addNewCourse: () => void; deleteCourse: (course: any) => void;
        updateCourse: () => void; }
) {

    //3.1
    // const [courses, setCourses] = useState(db.courses);
    // const [course, setCourse] = useState({
    //     _id: "0", name: "New Course!!", number: "New Number",
    //     startDate: "2023-09-10", endDate: "2023-12-15",
    //     image: "/tree.jpeg"
    // });

    // const updateCourse = () => {
    //     setCourses(
    //         courses.map((c) => {
    //             if (c._id === course._id) {
    //                 return course;
    //             } else {
    //                 return c;
    //             }
    //         })
    //     );
    // };
    // const addNewCourse = () => {
    //     const newCourse = {
    //         ...course,
    //         _id: new Date().getTime().toString()
    //     };
    //     setCourses([...courses, {...course, ...newCourse}]);
    // };
    //
    // const deleteCourse = (courseId: string) => {
    //     setCourses(courses.filter((course) => course._id !== courseId));
    // };


    return (
        <div className="p-4">
            <h1>Dashboard</h1>

            <h5>Course</h5>
            <input value={course.name} className="form-control"
                   onChange={(e) => setCourse({...course, name: e.target.value})}
            />
            <input value={course.number} className="form-control"
                   onChange={(e) => setCourse({...course, number: e.target.value})}
            />
            <input value={course.startDate} className="form-control" type="date"
                   onChange={(e) => setCourse({...course, startDate: e.target.value})}
            />
            <input value={course.endDate} className="form-control" type="date"
                   onChange={(e) => setCourse({...course, endDate: e.target.value})}
            />

            <button onClick={addNewCourse}>
                Add
            </button>
            <button onClick={updateCourse}>
                Update
            </button>


            <hr/>
            <h2>Published Courses (3)</h2>
            <hr/>
            <div className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div key={course._id} className="col" style={{width: 300}}>

                            <div className="card">

                                <img src={`/images/${course.image}`} className="card-img-top"
                                     style={{height: 150}}/>
                                <div className="card-body">

                                    <Link className="card-title"
                                          to={`/Kanbas/Courses/${course._id}/Home`}
                                          style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                                        {course.name}
                                        <button onClick={(event) => {
                                            event.preventDefault();
                                            setCourse(course);
                                        }}>
                                            Edit
                                        </button>
                                        <button onClick={(event) => {
                                            event.preventDefault();
                                            deleteCourse(course._id);
                                        }}>
                                            Delete
                                        </button>
                                    </Link>

                                    <p className="card-text">
                                        {course.name}
                                    </p>
                                    <p className="card-text"
                                       style={{
                                           "color": "dimgray",
                                           "fontSize": "small",
                                           "margin": "0",
                                           "paddingBottom": "5px"
                                       }}>202430_1
                                        Spring 2024 Semester</p>
                                    <FaPenSquare style={{color: "black"}}/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;