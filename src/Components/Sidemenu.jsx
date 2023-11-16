import React from 'react';
import {Box,Icon} from "@chakra-ui/react";
import {ChevronLeftIcon,SettingsIcon} from "@chakra-ui/icons";
import {CgProfile} from "react-icons/cg";
import {MdLogout} from "react-icons/md";
import {MdOutlinePhonelinkSetup} from "react-icons/md";
import {BsMotherboard} from "react-icons/bs";
import {FcDataConfiguration} from "react-icons/fc";
import {BsTools} from "react-icons/bs";
import {MdInventory} from "react-icons/md";
import {TfiAnnouncement} from "react-icons/tfi";
import {MdOutlineWebStories} from "react-icons/md";
import {FaFirstOrderAlt} from "react-icons/fa";
import {RxDashboard} from "react-icons/rx";


const Sidemenu = () => {
  return (
    <Box border={"1px solid black"} width={"200px"} height={"100%"} bgColor={"#020024"}>
        <Box display={"flex"}  gap={"5px"}>
            <Box>Logo</Box>
            <Box lineHeight={"15px"} borderLeft={"1px solid white"} color={"white"} fontSize={"small"} textAlign={"left"}>
                <Box marginLeft={"2px"}>
                <Box>RELIABLE</Box>
                <Box>SIGN</Box>
                <Box>SUPPLY</Box>
                </Box>
            </Box>
        </Box>

        <Box color={"white"} display={"flex"} flexDirection={"column"} gap={"30px"} marginLeft={"5px"}>
            <Box textAlign={"left"} marginTop={"30px"}> <Icon color={"#d1dd0c"} as={RxDashboard}/> Dashboard</Box>
            <Box display={"flex"} justifyContent={"space-between"}>
                <Box alignItems={"center"}> <Icon color={"#30742c"} as={FaFirstOrderAlt} /> Order Management</Box>
                <Box><ChevronLeftIcon/></Box>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
                <Box> <Icon as={MdOutlineWebStories} /> Web 360</Box>
                <Box><ChevronLeftIcon/></Box>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
                <Box alignItems={"center"}> <Icon color={"#dd0cca"} as={TfiAnnouncement} /> Promotion</Box>
                <Box><ChevronLeftIcon/></Box>
            </Box>
            
            <Box display={"flex"} justifyContent={"space-between"}>
                <Box alignItems={"center"}> <Icon color={'#840b79'} as={MdInventory} /> Inventory</Box>
                <Box><ChevronLeftIcon/></Box>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
                <Box alignItems={"center"}> <Icon color={"#0b2684"} as={BsTools} /> Custom Tools</Box>
                <Box><ChevronLeftIcon/></Box>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
                <Box alignItems={"center"}> <Icon color={"#0b2884"} as={FcDataConfiguration} /> Configuration</Box>
                <Box><ChevronLeftIcon/></Box>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
                <Box alignItems={"center"}> <Icon color={"#d83c08"} as={BsMotherboard} /> Customization</Box>
                <Box><ChevronLeftIcon/></Box>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
                <Box textAlign={"left"}> <Icon color={"#0b8433"} as={MdOutlinePhonelinkSetup}/> Set Up</Box>
                <Box><ChevronLeftIcon/></Box>
            </Box>
            <Box alignItems={"center"} textAlign={"left"}><SettingsIcon /> Setting</Box>
            <Box alignItems={"center"} textAlign={"left"}><Icon color={"#d83c08"} as={CgProfile}/> Profile</Box>
            <Box alignItems={"center"} textAlign={"left"}><Icon color={"#9dcb19"} as={MdLogout}/> Logout</Box>
            <Box></Box>
            
        </Box>

    </Box>
  )
}

export default Sidemenu