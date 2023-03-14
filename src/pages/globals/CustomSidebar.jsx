import { useTheme } from '@emotion/react';
import React, { useEffect, useState } from 'react'
import { colorPalette } from '../../assets/theme';
import { Box, Typography } from '@mui/material';
import { SiShopware } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, useProSidebar,sidebarClasses } from 'react-pro-sidebar';

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";


import {AiOutlineDatabase} from 'react-icons/ai'



const CustomSidebar = () => {

  const theme = useTheme()
  const colors = colorPalette(theme.palette.mode)
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();
  const showSettings= (event) =>{
    event.preventDefault();
  }

const [logoname,setLogoname] = useState(true)
const [screenSize,setscreenSize] = useState(0)
const [selected, setSelected] = useState("Dashboard");


const CustomItem = ({ title, to, icon, selected, setSelected }) => {
  return (
    <Link to ={to}>
      <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography sx={{fontSize:22, color:"#fff"}}>{title}</Typography>
    </MenuItem>
    </Link>
  );
};

  // ResizeScreenSize according to screen

  useEffect(() => {
    const handleScreenSize = ()=> setscreenSize(window.innerWidth)

    window.addEventListener('resize',handleScreenSize)

    handleScreenSize()

    return () => window.removeEventListener('resize',handleScreenSize)

  }, [])

  // change logo according to screen size
  useEffect(() =>{
    if(screenSize < 900){
      setLogoname(false)
    }
    else{
      setLogoname(true)
    }
  },[screenSize])


  return (

    <Box sx={{height:"100%",display:"flex",overflow:"hidden",boxShadow: "rgb(113 122 131 / 11%) 0px 7px 30px 0px","&hover":{overflow:"auto"}}}>
      <Sidebar 
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            position:"relative",
            top:0,
            left:0,
            width:300,
            backgroundColor:theme.palette.primary.main,
          },
        }}
      >
        <Menu 
        
        menuItemStyles={{
          button: {
                // backgroundColor: 'red',
                '&:hover': {
                   backgroundColor: theme.palette.green.main,
                   borderRadius:7,
                },
            },
          icon:{
            '&:hover': {
              color: "#fff",
           },
          }
          }}
            >
          
            <Link  to="/" style={{ textDecoration: 'none' }} >
              <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",mb:7,mt:5}} >
                  <SiShopware style={{fontSize:29,color:theme.palette.green.main}}/>
                  <Box>{logoname && <Typography variant='h3' sx={{textDecoration:"none", color:"#fff",fontWeight:"bold",fontSize:27,mr:5,ml:1}}>ExcelDashboard</Typography>}</Box>
              </Box>
            </Link>


          <Box sx={{}}>
            <CustomItem
              title="Home"
              to="/"
              icon={<HomeOutlinedIcon style={{fontSize:26, color: theme.palette.green.main}}/>}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h4"
              color={colors.grey[600]}
              sx={{ m: "15px 0 5px 25px" }}
            >
              Excel Model
            </Typography>


            <CustomItem
              title="Insert Data"
              to="/insert_data"
              icon={<AiOutlineDatabase style={{fontSize:26, color: theme.palette.green.main, "&:hover":{color:"#fff"}}}/>}
              selected={selected}
              setSelected={setSelected}
            />
            <CustomItem
              title="Default"
              to="/default"
              icon={<ContactsOutlinedIcon style={{fontSize:26, color: theme.palette.green.main, "&:hover":{color:"#fff"}}}/>}
              selected={selected}
              setSelected={setSelected}
            />
           

            <Typography
              variant="h4"
              color={colors.grey[600]}
              sx={{ m: "15px 0 5px 25px" }}
            >
              Others
            </Typography>

            <CustomItem
              title="Excel"
              to="/invoices"
              icon={<ReceiptOutlinedIcon style={{fontSize:26, color: theme.palette.green.main, "&:hover":{color:"#fff"}}}/>}
              selected={selected}
              setSelected={setSelected}
            />

            <CustomItem
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon style={{fontSize:26, color: theme.palette.green.main, "&:hover":{color:"#fff"}}}/>}
              selected={selected}
              setSelected={setSelected}
            />
            <CustomItem
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon style={{fontSize:26, color: theme.palette.green.main, "&:hover":{color:"#fff"}}}/>}
              selected={selected}
              setSelected={setSelected}
            />
         
          </Box>
        </Menu>
      </Sidebar>
    </Box>

  )
}

export default CustomSidebar