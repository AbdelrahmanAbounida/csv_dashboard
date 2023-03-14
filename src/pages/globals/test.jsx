import { useTheme } from '@emotion/react';
import React, { useEffect, useState } from 'react'
import { colorPalette } from '../../assets/theme';
import { Box, Typography } from '@mui/material';
import { SiShopware } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar,sidebarClasses, menuClasses } from 'react-pro-sidebar';

import {AiOutlineHome} from 'react-icons/ai'
import {MdOutlinePersonOutline} from 'react-icons/md'

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
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      menuItemStyles={{
        fontSize:26
      }}
    >
      <Typography >{title}</Typography>
      <Link to={to} />
    </MenuItem>
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
        <Menu >
          
            <Link  to="/" style={{ textDecoration: 'none' }} >
              <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",mb:7,mt:5}} >
                  <SiShopware style={{fontSize:29,color:theme.palette.green.main}}/>
                  <Box>{logoname && <Typography variant='h3' sx={{textDecoration:"none", color:"#fff",fontWeight:"bold",fontSize:27,mr:5,ml:1}}>ExcelDashboard</Typography>}</Box>
              </Box>
            </Link>


          <Box >
            <Item
              title="Home"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h4"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 25px" }}
            >
              Excel Model
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h4"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 25px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h4"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 25px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
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