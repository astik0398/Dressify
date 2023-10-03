import React, { useEffect } from "react";
import {Box, Card,CardBody,Stack,Divider,CardFooter,ButtonGroup, Image,Button, Grid,GridItem,Heading,Text} from "@chakra-ui/react"
import img from "../Images/dom-hill-nimElTcTNyY-unsplash__1_-imageonline.co-merged-removebg-preview (1).png"
import img2 from "../Images/young-teen-woman-sunglasses-hat-holding-shopping-bags-her-hands-feeling-so-happiness-isolated-green-wall.jpg"
import banner from '../Images/vecteezy_online-shopping-on-phone-buy-sell-business-digital-web_4299835.jpg'
import { useSelector } from "react-redux";

export const Homepage = () => {

  const isAuth = useSelector(store=> store.authReducer.isAuth)
  const username = useSelector(store=> store.authReducer.username)
  console.log(isAuth);
  console.log(username);
 
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
    fontSize="62px"  marginTop="20px" className="home-head-ing">WE * ALWAYS BUILD STUNNING FASHION EXPERIENCES</Heading>
  <Box  textAlign="start" marginTop="20px"> 

      <Button border ="none" borderRadius="50Px" bg="black" 
      color="white" p="10px 15px">Shop Now</Button>
      <Button border ="none" borderRadius="50Px" color="black" 
      bg="white" marginLeft="30px" p="10px 20px" >Watch Tranding</Button>
  </Box>
     </Box>
  </GridItem>
  <GridItem w='100%' h='80vh' >

    <Image w="80%" src={img}  display="flex"  margin=" auto"  justifyContent="center" alignItems="center" className="head-img"></Image>
  </GridItem>
</Grid>
<Grid maxW="95%"  margin=" 10px auto" height="100%"
 templateColumns='repeat(1, 1fr)'  >

<GridItem w='100%' h='20vh' >
<Heading color="black"  fontFamily="sans-serif"
  textAlign="justify" p="0 10px "
    fontSize="30px" fontWeight={600}  marginTop="25px" >
      Our Top Picks</Heading>
{/* <Image w="100%" h="80vh" src={img2}  display="flex"  margin=" auto"  justifyContent="center" alignItems="center"></Image> */}
</GridItem>

</Grid>
{/*  */}
  {/* map  */}

  <Grid maxW="95%" margin={'auto'} marginTop={'-70px'} marginBottom={'50px'} height="70vh"
 templateColumns='repeat(4, 1fr)'  columnGap="20" className="cont-home-box"
>


<GridItem w='100%' h='40vh' >

  <Card borderRadius={'15px'} padding={'10px'} height={'70vh'} maxW='sm' bg={'white'} boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px">
  <CardBody>
  <Box boxSize='sm'>
    
    <Image 
   src="https://static.zara.net/photos///2022/I/0/1/p/8779/400/712/2/w/750/8779400712_2_1_1.jpg?ts=1657273842773"  alt='Green double couch with wooden legs'
      w="100%"  h="50vh" objectFit={"cover"}
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
<GridItem w='100%' h='40vh'  >

<Card padding={'10px'} borderRadius={'15px'} height={'70vh'} bg={'white'} maxW='sm' boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px">
  <CardBody>
  <Box boxSize='sm'>
    
    <Image 
   src="https://static.zara.net/photos///2022/I/0/2/p/1732/401/515/2/w/750/1732401515_2_1_1.jpg?ts=1668766713593"  alt='Green double couch with wooden legs'
      borderRadius='lg'
      w="100%"  h="50vh" objectFit={"cover"}
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
<GridItem w='100%' h='40vh' >

<Card padding={'10px'} borderRadius={'15px'} height={'70vh'} bg={'white'} maxW='sm' boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px">
  <CardBody>
  <Box boxSize='sm'>
    
    <Image 
   src="https://static.zara.net/photos///2023/V/0/3/p/3643/762/427/302/w/750/3643762427_1_1_1.jpg?ts=1670924429768"  alt='Green double couch with wooden legs'
      borderRadius='lg'
      w="100%"  h="50vh" objectFit={"cover"}
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

  <Card padding={'10px'} borderRadius={'15px'} height={'70vh'} bg={'white'} maxW='sm' boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px">
  <CardBody>
  <Box boxSize='sm'>
    
    <Image 
   src="https://images.unsplash.com/photo-1621788455628-957e51d2f4e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"  alt='Green double couch with wooden legs'
      borderRadius='lg'
      w="100%"  h="50vh"  objectFit={"cover"}
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

  <Box w='100%' margin={'auto'} marginTop={'-10px'} marginBottom={'-21px'} borderRadius={'20px'} h='70vh' backgroundImage={banner} bgPosition="center" bgSize={'contain'} bgRepeat="no-repeat">
 </Box>


    {/* <Image w="100%" h="80vh" src={img2}  display="flex"  margin=" auto"  justifyContent="center" alignItems="center"></Image> */}
     </Box>
     <Divider/>
    </>
  
    
  );
};
