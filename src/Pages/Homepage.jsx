import React, { useEffect } from "react";
import {Box, Card,CardBody,Stack,Divider,CardFooter,ButtonGroup,
   Image,Button, Grid,GridItem,Heading,Text} from "@chakra-ui/react"
import img from "../Images/dom-hill-nimElTcTNyY-unsplash__1_-imageonline.co-merged-removebg-preview (1).png"
import img2 from "../Images/young-teen-woman-sunglasses-hat-holding-shopping-bags-her-hands-feeling-so-happiness-isolated-green-wall.jpg"
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
  <Box  textAlign="start" marginTop="20px"> 

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
    fontSize="30px" fontWeight={600}  marginTop="20px" >
      Browser through our carefully carted collection of high-quality clothing & accessories featuring the latest trends and style
    ____________*</Heading>
{/* <Image w="100%" h="80vh" src={img2}  display="flex"  margin=" auto"  justifyContent="center" alignItems="center"></Image> */}
</GridItem>

</Grid>
{/*  */}
  {/* map  */}

  <Grid maxW="95%"   margin=" 20px auto" height="65vh"
 templateColumns='repeat(4, 1fr)'  columnGap="20"
>


<GridItem w='100%' h='40vh'   >

  <Card maxW='sm' boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px">
  <CardBody>
  <Box boxSize='sm'>
    
    <Image 
   src="https://images.unsplash.com/photo-1621788455628-957e51d2f4e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"  alt='Green double couch with wooden legs'
      borderRadius='lg'
      w="100%"  h="40vh" 
    />
  </Box>
  <Stack mt='6' spacing='3' p="0px 10px">
      <Heading fontSize='20px'>BOMBER JACKET WITH CONTRAST PATCHES</Heading>
      <Text>
      Collared varsity jacket made of fabric
      </Text>
      <Text color='blue.600' fontSize='2xl'  fontWeight={500}a>
        Price : 7000
      </Text>
    </Stack>
  </CardBody>

</Card>
</GridItem>
<GridItem w='100%' h='40vh' bg="red"  >

<Card maxW='sm' boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px">
  <CardBody>
  <Box boxSize='sm'>
    
    <Image 
   src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0JTIwbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0JTIwbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"  alt='Green double couch with wooden legs'
      borderRadius='lg'
      w="100%"  h="40vh"
    />
  </Box>
  <Stack mt='6' spacing='3' p="0px 10px">
      <Heading fontSize='20px'>PUFFER COAT  RUBBERISED DETAIL</Heading>
      <Text>
      Jacket featuring a lapel collar
      </Text>
      <Text color='blue.600' fontSize='2xl'  fontWeight={500}>
        Price : 3000
      </Text>
    </Stack>
  </CardBody>

</Card>
</GridItem>
<GridItem w='100%' h='40vh' bg="red"  >

<Card maxW='sm' boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px">
  <CardBody>
  <Box boxSize='sm'>
    
    <Image 
   src="https://images.unsplash.com/photo-1594938384824-022767a58e11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"  alt='Green double couch with wooden legs'
      borderRadius='lg'
      w="100%"  h="40vh"
    />
  </Box>
  <Stack mt='6' spacing='3' p="0px 10px">
      <Heading fontSize='20px'>FAUX LEATHER STYLISH BIKER JACKET</Heading>
      <Text>
      Jacket featuring a lapel collar
      </Text>
      <Text color='blue.600' fontSize='2xl' fontWeight={500}>
        Price : 6990
      </Text>
    </Stack>
  </CardBody>

</Card>
</GridItem>
<GridItem w='100%' h='40vh'   >

  <Card maxW='sm' boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px">
  <CardBody>
  <Box boxSize='sm'>
    
    <Image 
   src="https://images.unsplash.com/photo-1621788455628-957e51d2f4e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"  alt='Green double couch with wooden legs'
      borderRadius='lg'
      w="100%"  h="40vh" 
    />
  </Box>
    <Stack mt='6' spacing='3' p="0px 10px">
      <Heading fontSize='20px'>BOMBER JACKET WITH PATCHES</Heading>
      <Text >
      Collared varsity jacket made of fabric 
      </Text>
      <Text color='blue.600' fontSize='2xl' fontWeight={500}>
        Price : 7000
      </Text>
    </Stack>
  </CardBody>

</Card>
</GridItem>


</Grid>

  <Box w='100%' h='80vh'  mb="20px" backgroundImage={img2} bgPosition="center" bgSize="cover"  bgRepeat="no-repeat">
 </Box>


    {/* <Image w="100%" h="80vh" src={img2}  display="flex"  margin=" auto"  justifyContent="center" alignItems="center"></Image> */}
     </Box>
     <Divider/>
    </>
  
    
  );
};
