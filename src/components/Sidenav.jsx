import { Box, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { RiDashboardHorizontalFill } from "react-icons/ri";

const Sidenav = () => {

  const navLinks = [{
    icon: RiDashboardHorizontalFill,
    text: "Dashboard",
    link: "/",
  },
  {
    icon: RiDashboardHorizontalFill,
    text: "Transactions",
    link: "/transactions",
  },
]
  return  <Stack>
    {navLinks.map((nav)=>(
      <HStack key={nav.text}>
        <Icon as={nav.icon} />
        <Text>{nav.text}</Text>
      </HStack>
    ))}
  </Stack>
  
}

export default Sidenav
