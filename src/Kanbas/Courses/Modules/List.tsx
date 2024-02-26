import React, {useState} from "react";
import "./index.css";
import {modules} from "../../Database";
import {FaCheckCircle, FaEllipsisV, FaPlusCircle, FaRegCheckCircle} from "react-icons/fa";
import {useParams} from "react-router";

function ModuleList() {
    const {courseId} = useParams();
    const modulesList = modules.filter((module) => module.course === courseId);
    const [selectedModule, setSelectedModule] = useState(modulesList[0]);
    return (
        <>
            {/* <!-- Add buttons here --> */}
            <div className="flex-fill">
                {/*<div className="d-flex" style={{"justify-content":"flex-end"}}>*/}
                <button className="btn btn-secondary" type="button">Collapse All</button>
                <button className="btn" type="button">View Progress</button>
                <span className="dropdown">
		<button aria-expanded="false" className="btn dropdown-toggle" data-bs-toggle="dropdown" type="button">
            <FaRegCheckCircle style={{color: 'green'}}/>
            {' '}Publish All
		</button>
		<div aria-labelledby="dropdownMenuButton" className="dropdown-menu">
			<a className="dropdown-item" href="#">Action</a>
			<a className="dropdown-item" href="#">Another action</a>
			<a className="dropdown-item" href="#">Something else here</a>
		</div>
			</span>
                <button className="btn btn-red " type="button">+ Module</button>
                <button className="btn" type="button">
                    <FaEllipsisV></FaEllipsisV>
                </button>
                {/*</div>*/}
            </div>
            <hr/>

            <div className={"flex-fill"}>
                <ul className="list-group wd-modules">
                    {modulesList.map((module) => (
                        <li
                            className="list-group-item"
                            onClick={() => setSelectedModule(module)}>
                            <div>
                                <FaEllipsisV className="me-2"/>
                                {module.name}
                                <span className="float-end">
                <FaCheckCircle className="text-success"/>
                <FaPlusCircle className="ms-2"/>
                <FaEllipsisV className="ms-2"/>
              </span>
                            </div>
                            {selectedModule._id === module._id && (
                                <ul className="list-group">
                                    {module.lessons?.map((lesson) => (
                                        <li className="list-group-item">
                                            <FaEllipsisV className="me-2"/>
                                            {lesson.name}
                                            <span className="float-end">
                      <FaCheckCircle className="text-success"/>
                      <FaEllipsisV className="ms-2"/>
                    </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default ModuleList;

