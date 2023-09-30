import React, { useEffect } from "react";
import {Box, Image,Button, Grid,GridItem,Heading,Text} from "@chakra-ui/react"
import img from "../images/dom-hill-nimElTcTNyY-unsplash__1_-imageonline.co-merged-removebg-preview (1).png"
import img2 from "../images/pexels-anastasiya-gepp-2036650.jpg"
export const Homepage = () => {
 
   let bg="#ff7112"
  return (
    <>
    {/* <h1>home</h1>? */}
     <Box>
     <Grid maxW="95%" borderRadius="20px" margin=" 10px auto" height="100%" templateColumns='repeat(2, 1fr)' gap={6} backgroundColor={bg}>
  <GridItem w='100%' h='80vh' 
  display="flex"  justifyContent="center" alignItems="center">
       <Box paddingLeft="30px" justifyContent="space-evenly"  alignItems="center">
       <Text  color="white" fontSize="20px"   fontStyle="600" textAlign="start" >TRANDY FASHION ZONE</Text>
    <Heading color="white"  fontFamily="sans-serif" w="90%" lineHeight="70px"  textAlign="start" 
    fontSize="62px"  marginTop="20px">WE * ALWAYS BUILD STUNNING FASHION EXPERIENCES</Heading>
  <Box  textAlign="start" marginTop="-20px"> 

      <Button border ="none" borderRadius="50Px" bg="black" 
      color="white" p="10px 15px">Shop Now</Button>
      <Button border ="none" borderRadius="50Px" color="black" 
      bg="white" marginLeft="30px" p="10px 20px" >Watch Tranding</Button>
  </Box>
     </Box>
  </GridItem>
  <GridItem w='100%' h='80vh' >

    <Image w="80%" src={img}  display="flex"  margin=" auto"  justifyContent="center" alignItems="center"></Image>
  </GridItem>
</Grid>
<Grid maxW="95%"  margin=" 10px auto" height="100%"
 templateColumns='repeat(1, 1fr)'  >

<GridItem w='100%' h='20vh' >
<Heading color="black"  fontFamily="sans-serif"
  textAlign="justify" p="0 10px "
    fontSize="35px"  marginTop="20px" >
      Browser through our carefully carted collection of high-quality clothing & accessories featuring the latest trends and style
    ____________*</Heading>
{/* <Image w="100%" h="80vh" src={img2}  display="flex"  margin=" auto"  justifyContent="center" alignItems="center"></Image> */}
</GridItem>

</Grid>
{/*  */}


  <Box w='100%' h='80vh'  backgroundImage={img2} bgPosition="center" bgSize="cover"  bgRepeat="no-repeat">
  </Box>


    {/* <Image w="100%" h="80vh" src={img2}  display="flex"  margin=" auto"  justifyContent="center" alignItems="center"></Image> */}
     </Box>
    </>
  
    
  );
};
