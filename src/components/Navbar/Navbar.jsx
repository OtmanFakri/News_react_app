import tw from "tailwind-styled-components"
import {FaAccessibleIcon} from "react-icons/fa";

import {model_nav} from "../../Models/Navbar_model.jsx";
import {Link, NavLink, Outlet} from "react-router-dom";

function Navbar(props) {
    const isActive = (match, location) => {
        return match != null;
    };
    const todo = [
        new model_nav('Weather', false, "/Weather"),
        new model_nav('Insight', false, "/Insight"),
        new model_nav('News', false, "/News"),
        new model_nav('Maps', false, "/Maps"),

    ]

    const Titles = tw.p`
    bg-red-500
    text-white
    p-[10px]
    w-[15rem]
    flex
    flex-row
    items-center
    text-[1.5rem]
    justify-center
  `
    const Rectangle = tw.div`
    bg-[#007155]
    w-[16.875rem]
    h-[100vh]
    flex flex-col
    items-center 
    justify-center
    space-y-5
    
`

    const listTitle = todo.map(value => {
        return (
            <Titles key={value.link}>
                <NavLink  isActive={isActive}
                         className={"flex flex-row items-center "} to={value.link}>
                    <FaAccessibleIcon className={"mx-1"}/> {value.title}
                </NavLink>
            </Titles>
        )
    })
    return (
        <>
            <Rectangle>
                {listTitle}
            </Rectangle>
            <Outlet/>
        </>
    );
}

export default Navbar;

