import { Box, Button, Container, Flex, Heading, HStack, Icon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { FaUserTie } from "react-icons/fa6";


const TopNav = () => {
  return (
    <Box boxShadow="xl">
       <HStack
      maxW="88rem"
      h="64px" 
      justify="space-between" 
      px="32"
      mx="auto">
    
    <Heading fontWeight="medium" fontSize="28px">DashBoard</Heading>

<Menu>
<MenuButton as={Button}>
 <Icon as={FaUserTie} fontSize="24px"/>
</MenuButton>
<MenuList>
<MenuItem>Logout</MenuItem>
<MenuItem>Support</MenuItem>
</MenuList>
</Menu>

</HStack>
    </Box>
     
    
  )
  
}

export default TopNav
