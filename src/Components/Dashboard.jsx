import React from 'react';
import {Box, Grid, GridItem, Icon} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { LuBellRing } from "react-icons/lu";
import { FaUser } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { VscListUnordered } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa";
import { GoTag } from "react-icons/go";
import { HiOutlineDesktopComputer } from "react-icons/hi";



const Dashboard = () => {
   
  return (
       <Box marginTop={"30px"}>
        <Grid templateColumns='repeat(5, 0.5fr)' gap={6} marginLeft={"20px"}>
    <Box  color={"white"} w='197px' h='115px' bg='#2c2525'>
    <Icon marginRight={"138px"} marginTop={"20px"} as={ HiOutlineDesktopComputer} />
     <Box marginRight={"80px"}>Dashboard</Box>
     <ArrowForwardIcon marginLeft={"155px"} marginTop={"30px"}/>
  </Box>
  <Box  color={"white"} w='394px' h='115px' bg='#0e8fc4'>
  <Icon marginRight={"320px"} marginTop={"20px"} as={ HiOutlineDesktopComputer} />
  <Box marginRight={"260px"}>All Products</Box>
  <ArrowForwardIcon marginLeft={"350px"} marginTop={"30px"}/>
  </Box>
  <Box  color={"white"} w='197px' h='115px' bg='#0ec4ac'>
  <Icon marginRight={"138px"} marginTop={"20px"} as={ HiOutlineDesktopComputer} />
  <Box marginRight={"80px"}>All Orders</Box>
  <ArrowForwardIcon marginLeft={"155px"} marginTop={"30px"}/>
  </Box>
  <Box color={"white"} w='197px' h='115px' bg='#c49a0e'>
  <Icon marginRight={"160px"} marginTop={"20px"} as={ HiOutlineDesktopComputer} />
  <Box marginRight={"80px"}>All Customers</Box>
  <ArrowForwardIcon marginLeft={"155px"} marginTop={"30px"}/>
  </Box>
  <Box color={"white"} w='197px' h='115px' bg='#0e58c4'>
  <Icon marginRight={"160px"} marginTop={"20px"} as={ HiOutlineDesktopComputer} />
  <Box marginRight={"80px"}>All Customers</Box>
  <ArrowForwardIcon marginLeft={"155px"} marginTop={"30px"}/>
  </Box>
       </Grid> 
 <Grid templateColumns='repeat(5, 0.5fr)' gap={6} marginLeft={"20px"} marginTop={"30px"}>
  <Box color={"white"} w='197px' h='115px' bg='#0ec0c4'>
  <Icon marginRight={"138px"} marginTop={"20px"} as={LuBellRing} />
  <Box marginRight={"80px"}>Notifications</Box>
  <ArrowForwardIcon marginLeft={"155px"} marginTop={"30px"}/>
  </Box>
  <Box color={"white"} w='197px' h='115px' bg='#0eaec4'>
  <Icon marginRight={"138px"} marginTop={"20px"} as={LuBellRing} />
  <Box marginRight={"80px"}>Calendar</Box>
  <ArrowForwardIcon marginLeft={"155px"} marginTop={"30px"}/>
  </Box>
  <Box color={"white"} w='197px' h='115px' bg='#075839'>
  <Icon marginRight={"138px"} marginTop={"20px"} as={LuBellRing} />
  <Box marginRight={"80px"}>Daily Sales</Box>
  <ArrowForwardIcon marginLeft={"155px"} marginTop={"30px"}/>
  </Box>
  <Box color={"white"} w='197px' h='115px' bg='#bf71bd'>
  <Icon marginRight={"138px"} marginTop={"20px"} as={LuBellRing} />
  <Box marginRight={"80px"}>Daily Sales</Box>
  <ArrowForwardIcon marginLeft={"155px"} marginTop={"30px"}/>
  </Box>
  <Box color={"white"} w='394px' h='115px' bg='#f72f2f'>
  <Icon marginRight={"320px"} marginTop={"20px"} as={LuBellRing} />
  <Box marginRight={"260px"}>Daily Sales</Box>
  <ArrowForwardIcon marginLeft={"350px"} marginTop={"30px"}/>
  </Box>
       </Grid>
       <Box display={"flex"} marginTop={"20px"} marginLeft={"20px"}>
        <Box w={"760px"} h={"400px"} border={"1px solid blue"}></Box>
        <Box w={"520px"}>
        <Grid marginLeft={"60px"} templateColumns='repeat(2, 0.5fr)' gap={6}>
        <Box color={"white"} w='218px' h='115px' bg='#2c2525'>
        <Icon marginTop={"20px"} as={FaUser} /> 
         <Box>Total Users</Box>
         <Box>656</Box>
        </Box>
        <Box color={"white"} w='218px' h='115px' bg='#2c2525'>
        <Icon marginTop={"20px"} as={FaCartPlus} />
        <Box>Total Shop</Box>
         <Box>100</Box>
        </Box>   
            
        </Grid>  
        <Grid marginLeft={"60px"} templateColumns='repeat(2, 0.5fr)' marginTop={"30px"} gap={6}>
        <Box color={"white"} w='218px' h='115px' bg='#2c2525'>
        <Icon marginTop={"20px"} as={VscListUnordered} />
        <Box>Pending Orders</Box>
         <Box>+120</Box>
        </Box>
        <Box color={"white"} w='218px' h='115px' bg='#2c2525'>
        <Icon marginTop={"20px"} as={FaPlus} />
        <Box>New Users</Box>
         <Box>9540</Box>
        </Box>   
            
        </Grid>  
        <Grid marginLeft={"60px"} templateColumns='repeat(2, 0.5fr)' marginTop={"30px"} gap={6} >
        <Box color={"white"} w='218px' h='115px' bg='#2c2525'>
        <Icon marginTop={"20px"} as={GoTag} />
        <Box>Total Orders</Box>
         <Box>8540</Box>
        </Box>
        <Box color={"white"} w='218px' h='115px' bg='#2c2525'>
        <Icon marginTop={"20px"} as={VscListUnordered} />
        <Box>Online Orders</Box>
         <Box>444</Box>
        </Box>   
        </Grid>  
        </Box>
        </Box> 
       </Box>
  )
}

export default Dashboard