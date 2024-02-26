import {Link, useLocation} from "react-router-dom";
import "./index.css";
import {
    FaBook,
    FaClock,
    FaQuestionCircle,
    FaRegCalendarAlt,
    FaRegUserCircle,
    FaTachometerAlt,
    FaTv
} from "react-icons/fa";
import {FaArrowRightFromBracket} from "react-icons/fa6";

function KanbasNavigation() {
    const links = [
        {label: "Account", icon: <FaRegUserCircle className="fs-2"/>},
        {label: "Dashboard", icon: <FaTachometerAlt className="fs-2"/>},
        {label: "Courses", icon: <FaBook className="fs-2"/>},
        {label: "Calendar", icon: <FaRegCalendarAlt className="fs-2"/>},
        {label: "Inbox", icon: <FaRegCalendarAlt className="fs-2"/>},
        {label: "History", icon: <FaClock className="fs-2"/>},
        {label: "Studio", icon: <FaTv className="fs-2"/>},
        {label: "Commons", icon: <FaArrowRightFromBracket className="fs-2"/>},
        {label: "Help", icon: <FaQuestionCircle className="fs-2"/>}
    ];
    const {pathname} = useLocation();
    return (
        <ul className="wd-kanbas-navigation">
            <li>
                <a href="http://northeastern.edu">
                    <img height="50px" src="/images/northeastern_logo.jpeg" width="50px"/>
                </a>
            </li>
            {links.map((link, index) => (
                <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                    <Link to={`/Kanbas/${link.label}`}> {link.icon} <br/>{link.label} </Link>
                </li>
            ))}
        </ul>
    );
}

export default KanbasNavigation;