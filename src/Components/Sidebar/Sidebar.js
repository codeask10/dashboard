import css from './Sidebar.module.css';
import { MdSpaceDashboard } from "react-icons/md";
import { AiFillCalendar, AiOutlineTable } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { NavLink, useNavigate} from 'react-router-dom';
import logo from '../Images/logo.png'
import { useEffect, useState } from 'react';
const Sidebar = () => {
    const [isMobileView,setIsMobileView]=useState();
    const navigate = useNavigate();
    useEffect(()=>{
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 768);
          };
      
          // Listen for window resize events
          window.addEventListener('resize', handleResize);
      
          // Remove the event listener when the component unmounts
          return () => {
            window.removeEventListener('resize', handleResize);
          };
    },[]);
    return (
        <div className={css.container}>
            <img src={logo} alt="logo" className={css.logo} />
            <div className={css.menu}>
                <NavLink to="/dashboard" className={css.item} title={"Dashboard"}>
                    <MdSpaceDashboard size={30} />
                </NavLink>
                {isMobileView ?
                <NavLink
                    to="/calender"
                    className={css.item}
                    title="Calendar">
                    <AiFillCalendar size={30} />
                </NavLink>:null
                }

                <NavLink
                    to="/dropdown"
                    className={css.item}
                    title="Trello Board"
                >
                    <FaTasks size={30} />
                </NavLink>

                <NavLink
                    to="/datagrid"
                    className={css.item}
                    title="Users"
                >
                    <AiOutlineTable size={30} />
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar