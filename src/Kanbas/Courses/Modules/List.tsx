import React, {useState} from "react";
import "./index.css";
import {modules} from "../../Database";
import {FaCheckCircle, FaEllipsisV, FaPlusCircle, FaRegCheckCircle} from "react-icons/fa";
import {useParams} from "react-router";

function ModuleList() {
    const {courseId} = useParams();
    // const modulesList = modules.filter((module) => module.course === courseId);
    const [moduleList, setModuleList] = useState<any[]>(modules);
    const [module, setModule] = useState({
        _id : "M000",
        name: "New Module",
        description: "New Description",
        course: courseId,
    });
    const addModule = (module: any) => {
        const newModule = {
            ...module,
            _id: new Date().getTime().toString()
        };
        const newModuleList = [newModule, ...moduleList];
        setModuleList(newModuleList);
    };
    const deleteModule = (moduleId: string) => {
        const newModuleList = moduleList.filter(
            (module) => module._id !== moduleId );
        setModuleList(newModuleList);
    };
    const updateModule = () => {
        const newModuleList = moduleList.map((m) => {
            if (m._id === module._id) {
                return module;
            } else {
                return m;
            }
        });
        setModuleList(newModuleList);
    };



    const [selectedModule, setSelectedModule] = useState(moduleList[0]);
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
                    <li className="list-group-item">
                        <input value={module.name} style={{"margin": "5px"}}
                               onChange={(e) => setModule({
                                   ...module, name: e.target.value
                               })}
                        />
                        <button style={{"margin": "5px"}} onClick={() => {
                            addModule(module)
                        }}>
                            Add
                        </button>
                        <button onClick={updateModule}>
                            Update
                        </button>
                        <br/>
                        <textarea value={module.description} style={{"margin": "5px"}}
                                  onChange={(e) => setModule({
                                      ...module, description: e.target.value
                                  })}
                        />

                    </li>
                    {moduleList
                        .filter((module) => module.course === courseId)
                        .map((module, index) => (
                            <li key={index} className="list-group-item"
                                onClick={() => setSelectedModule(module)}>
                                <button className={"float-end btn-red"} style={{"margin": "5px"}}
                                    onClick={(event) => {
                                        setModule(module);
                                    }}>
                                    Edit
                                </button>
                                <button className={"float-end btn-red"} style={{"margin": "5px"}}
                                        onClick={() => deleteModule(module._id)}>
                                    Delete
                                </button>
                                <div>
                                    {/*<FaEllipsisV className="me-2"/>*/}
                                    <span style={{"fontSize": "20px"}}>{module.name}</span>
                                    <br/>
                                    <span style={{"fontSize": "15px"}}>{module.description}</span>
                                    <p style={{"fontSize": "12px"}}>{module._id}</p>
                                    <span className="float-end">
                    {/*<FaCheckCircle className="text-success"/>*/}
                                        {/*<FaPlusCircle className="ms-2"/>*/}
                                        {/*<FaEllipsisV className="ms-2"/>*/}
              </span>
                                </div>
                                {selectedModule._id === module._id && (
                                    <ul className="list-group">
                                        {module.lessons?.map((lesson: any) => (
                                            <li className="list-group-item">
                                                <FaEllipsisV className="me-2"/>
                                                {lesson.name}
                                                <span className="float-end">
                      {/*<FaCheckCircle className="text-success"/>*/}
                      {/*<FaEllipsisV className="ms-2"/>*/}
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

