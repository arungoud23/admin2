import React from 'react';
import { Box } from '@chakra-ui/react';
import {Icon} from "@chakra-ui/react";
import {BsFilter} from "react-icons/bs"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink
  } from '@chakra-ui/react';

const BreadCrumb = () => {
  return (
  <Box display={"flex"} justifyContent={"space-between"} marginTop={"25px"} >
    <Box>
   <Breadcrumb  fontSize='lg'>
   <BreadcrumbItem marginLeft={"20px"}>
    <BreadcrumbLink  href='#'>Home</BreadcrumbLink>
   </BreadcrumbItem>
   <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink fontWeight='medium' href='#'>Dashboard</BreadcrumbLink>
   </BreadcrumbItem>
   </Breadcrumb>
    </Box>
    <Box marginRight={"20px"}>
    <Breadcrumb fontWeight='small' fontSize='sm'>
   <BreadcrumbItem marginLeft={"20px"}>
    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
   </BreadcrumbItem>
   <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>Dashboard</BreadcrumbLink>
   </BreadcrumbItem>
   </Breadcrumb>

    </Box>
    </Box>
  )
}

export default BreadCrumb