import { Box, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

const Sidenav = () => {

  const navLinks = [{
    icon: RiDashboardHorizontalFill,
    text: "Dashboard",
    link: "/",
  },
  {
    icon: BsArrowDownUp,
    text: "Transactions",
    link: "/transactions",
  },
]
  return  <Stack justifyContent="space-between" boxShadow="lg"  w="16rem" h="100vh" bg="#000000">
    <Box>

   
     
    <Heading textAlign="center" fontSize="20px" as="h1" pt="56px" color="white">
      CRYPTOCONNECT
      </Heading>
      <Box mt="6" mx="3" mb="6">  
    {navLinks.map((nav)=>(
      <HStack
      borderRadius="10px"
      key={nav.text}
      py="12px" // top to bottom
      px="16px" //side se
      _hover={{
        bg:"",
        color:"#D8125B"
      }}
      color="#323232"
      >
        <Icon as={nav.icon} />
        <Text fontSize="14px" fontWeight="medium" color="white">
          {nav.text}
          </Text>
      </HStack>
    ))}
    </Box>
    </Box>

   <Box mt="6" mx="3">
   <HStack
      borderRadius="10px"
      py="12px" // top to bottom
      px="16px" //side se
      _hover={{
        bg:"",
        color:"#D8125B"
      }}
      color="#323232"
      >
        <Icon as={BiSupport} />
        <Text fontSize="14px" fontWeight="medium" color="white">
          Support
          </Text>
      </HStack>
      
   </Box>
    
   
   
   
  </Stack>
  
}

export default Sidenav
