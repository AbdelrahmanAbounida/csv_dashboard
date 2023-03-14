import React, { useContext } from 'react'
import { Box,InputBase } from '@mui/material'

import IconButton from "@mui/material/IconButton";
import {BiSearch} from "react-icons/bi";

import {MdOutlineDarkMode,MdOutlineLightMode} from 'react-icons/md'
import {MdNotificationsNone} from 'react-icons/md'
import {FiSettings} from 'react-icons/fi'
import {MdOutlinePersonOutline} from 'react-icons/md'
import { useTheme } from '@mui/material';
import { colorPalette,ColorModeContext } from '../../assets/theme';

import { useProSidebar } from 'react-pro-sidebar';

import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {

  const theme = useTheme()
  const colors = colorPalette(theme.palette.mode)
  const modeContext = useContext(ColorModeContext)
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();


  return (
    <Box sx={{display:"flex", justifyContent:"space-between", mt:3, mx:2}}>

     {/* Search Bar */}

     <Box display={"flex"} gap={3} sx={{justifyContent:"center",}}>

        <IconButton onClick={() => collapseSidebar()}>
            <GiHamburgerMenu />
        </IconButton>

        <Box sx={{display:"flex",justifyContent:"space-between", border:1, borderRadius:4,backgroundColor:colors.primary[400]}}>
          <InputBase placeholder='Search' sx={{pl:1}}/>
          <IconButton>
            <BiSearch />
          </IconButton>
        </Box>

     </Box>

      <Box sx={{display:"flex", justifyContent:"space-center",gap:2}}>

          <IconButton onClick={modeContext.toggleColorMode}>

              {theme.palette.mode === "dark" ? 
              (<MdOutlineDarkMode />) : (<MdOutlineLightMode />)  
              }
          </IconButton>

          <IconButton>
              <MdNotificationsNone />
          </IconButton>

          <IconButton>
              <FiSettings />
          </IconButton>

          <IconButton>
              <MdOutlinePersonOutline />
          </IconButton>

      </Box>
    </Box>
  )
}

export default Navbar