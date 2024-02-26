import React from "react";
import {FaCheckCircle, FaEllipsisV, FaPlusCircle} from "react-icons/fa";
import {Link, useParams} from "react-router-dom";
import {assignments} from "../../Database";
const hyperlink = {"textDecoration": "none"};
const red = {"color": "red"};
const black = {"color": "black"};

function Assignments() {
    const {courseId} = useParams();
    const assignmentList = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <>
            {/*{<!-- Add buttons and other fields here -->}*/}
            <div className="d-flex">
                {/*<div className="d-flex" style={{"justify-content":"flex-end"}}>*/}
                <input
                    type="text" className="form-control"
                    placeholder="Search for Assignments"
                    style={{"width": "50%"}}
                />
                <span style={{"justifyContent": "flex-end"}}>
                    <button className="btn " type="button">+ Group</button>
                    <button className="btn btn-red " type="button">+ Assignment</button>
                </span>
            </div>
            <hr/>
            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <div>
                        <FaEllipsisV className="me-2"/> ASSIGNMENTS
                        <span className="float-end">
              <FaCheckCircle className="text-success"/>
              <FaPlusCircle className="ms-2"/><FaEllipsisV className="ms-2"/>
            </span>
                    </div>
                    <ul className="list-group">
                        {assignmentList.map((assignment) => (
                            <li className="list-group-item">
                                <FaEllipsisV className="me-2"/>
                                <Link
                                    style={{...hyperlink, ...black}}
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}
                                </Link>
                                <br></br>
                                <a href="#" style={{...hyperlink, ...red}}>Multiple Modules</a> | Due Sep 18 at 11:59pm | 100 pts
                                <span className="float-end">
                                    <FaCheckCircle className="text-success"/><FaEllipsisV className="ms-2"/>
                                </span>
                            </li>))}
                    </ul>
                </li>
            </ul>
        </>
    );
}

export default Assignments;