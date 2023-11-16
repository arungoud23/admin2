import React from 'react';
import { Box,Avatar } from '@chakra-ui/react';
import { HamburgerIcon , SearchIcon,BellIcon,ChevronDownIcon } from '@chakra-ui/icons'



const Navbar = () => {
  return (
          <Box height={"80px"} boxShadow={"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"} display={"flex"}  justifyContent={"space-between"}>
          <Box alignItems={"center"} display={"flex"} marginLeft={"20px"} gap={"100px"}>
          <Box><HamburgerIcon /></Box>
          <Box display={"flex"} height={"40px"} alignItems={"center"} width={"400px"} border={"0.3px solid grey"} borderRadius={"18px"}>
           <SearchIcon marginRight={"100px"}  marginLeft={"20px"}/>
          <Box>Search for Products</Box>
          </Box>
          </Box>
        <Box display={"flex"} alignItems={"center"} gap={"10px"}>
            <BellIcon />
             <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
            <ChevronDownIcon/>
        </Box>
    </Box>
  )
}

export default Navbar