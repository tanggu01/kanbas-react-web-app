import Assignment3 from "./a3";
import Nav from "../Nav";
import {Link, Route, Routes} from "react-router-dom";

function Labs() {
    return (
        <div>
            <Nav/>
            {/*<Assignment3/>*/}
            <Link to="/Labs/a3">Assignment 3</Link>
            <Routes>
                <Route path="/a3/*" element={<Assignment3 />} />
            </Routes>
        </div>
    );
}
export default Labs;