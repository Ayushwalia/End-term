import React, { useState, useSyncExternalStore } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { GlobalContext } from "../Context";
// import { Link } from "react-scroll";
import {makeStyles} from '@material-ui/core'
import { useEffect } from "react";

const useStyle=makeStyles(()=>({
  lgnbtn:{
    backgroundColor:'#166bd3',
    padding:'7px',
    paddingLeft:'20px',
    paddingRight:'20px',
    borderRadius:'10px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    '&:hover':{
      backgroundColor:'lightgrey',
      color:'black'
    }
    },
    items:{
      '&:hover':{
        color:'white'
      }
    },
    itemsactive:{
      color:'#166bd3',
      fontWeight:'bold',
    }
}))

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  let loc=useLocation().pathname.split('/')[1];
  const {users,admin,setUsers}=GlobalContext();
  const classes=useStyle();
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black"
    style={{
      position:'relative',
      zIndex:'2'
    }}
    >
      <div>
        <h1 className="text-5xl font-signature ml-2">Ayush Walia</h1>
      </div>
      <div style={{
        flex:1,
        display:'flex',
        justifyContent:'flex-end',
        marginRight:'40px',
      }}>
        {users?
        <Link className={classes.lgnbtn} onClick={()=>{
          setUsers(null);
        }}>
        Logout
        </Link>
      :
      <Link to='/login' className={classes.lgnbtn}>
      Login
      </Link>
      }
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link className={`
              ${
                loc===link || (loc===''&& link==='home')?classes.itemsactive:classes.items
              }`} to={`${link==='home'?'/':link}`}>
              {link}
            </Link>
          </li>
        ))}
        { (users && admin) && <li
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link className={`${loc==='admin'?classes.itemsactive:classes.items}`} to='/admin'>
              Admin
            </Link>
          </li>}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes className={classes.items} size={30} /> : <FaBars className={classes.items} size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link className={`
              ${
                loc===link || (loc===''&& link==='home')?classes.itemsactive:classes.items
              }
              `} to={`${link==='home'?'/':link}`} onClick={()=>{
                setNav(!nav)
              }}>
              {link}
            </Link>
            </li>
          ))}
          {(users && admin) && <li
            className="px-4 cursor-pointer capitalize py-6 text-4xl"
          >
            <Link
             className={`${loc==='admin'?classes.itemsactive:classes.items}`} to='/admin' onClick={()=>{
              setNav(!nav);
            }}>
              Admin
            </Link>
          </li>}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
