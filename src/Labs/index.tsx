import Assignment3 from "./a3";
import Assignment4 from "./a4";
import Nav from "../Nav";
import {Link, Route, Routes} from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

function Labs() {
    return (
        <Provider store={store}>
            <div>
                <Nav/>
                {/*<Assignment3/>*/}
                <Link to="/Labs/a3">Assignment 3</Link>
                <Routes>
                    <Route path="/a3/*" element={<Assignment3/>}/>
                    <Route path="a4" element={<Assignment4/>}/>
                    {/*// 별 차이? */}
                </Routes>
            </div>
        </Provider>

    );
}

export default Labs;