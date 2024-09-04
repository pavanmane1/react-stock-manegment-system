import React from 'react'
import * as FiIcons from 'react-icons/fi'
import * as AiIcons from 'react-icons/ai'
import * as MdIcons from 'react-icons/md'
import * as FaIcons from 'react-icons/fa'
import * as RiIcons from 'react-icons/ri'

export const Sidebardata = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text",


    },
    {
        title: "Dashboard",
        path: "/Dashboard",
        icon: <MdIcons.MdDashboard />,
        cName: "nav-text"
    },

    {
        title: "Transaction",
        path: "/Transaction",
        icon: <FaIcons.FaExchangeAlt />,
        cName: "nav-text"
    },


    {
        title: "Product-type",
        path: "/Product_type",
        icon: <MdIcons.MdCategory />,
        cName: "nav-text"
    },

    {
        title: "Catagoury",
        path: "/Catagoury",
        icon: <RiIcons.RiFileListLine />,
        cName: "nav-text"
    },
    // {
    //     title: "employee_Registration",
    //     path: "/employee_registration",
    //     icon: <FiIcons.FiUsers />,
    //     cName: "nav-text"
    // },
    {
        title: "new catagory",
        path: "/Newcatagory",
        icon: <FiIcons.FiPlusSquare />,
        cName: "nav-text"
    },
    {
        title: "registration",
        path: "/RegistrationScreen",
        icon: <FiIcons.FiUserPlus />,
        cName: "nav-text"
    },
    {
        title: "Stock",
        path: "/Stockscreen",
        icon: <FaIcons.FaBoxes />,
        cName: "nav-text"
    },

    {
        title: "Newuserregistration",
        path: "/Newuserregistration",
        icon: <FiIcons.FiUserPlus />,
        cName: "nav-text"
    },
]