import React from "react";
import CartWidget from "./CartWidget";
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
  Flex,
  Spacer,
  Box,
  Container
} from "@chakra-ui/react";
import { ChevronDownIcon } from '@chakra-ui/icons'

const NavBar = () => {
  return (
    <>
      <div   className="navBar" maxW="100%" >
        <Flex alignItems="center">
          <Box p="10" w="300px" h="100">
            <h1>Star Commerce</h1>
          </Box>
          <Spacer />
          <Box p="10" w="300px" h="100">
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Objetos
              </MenuButton>
              <MenuList>
                <MenuItem>Mundos</MenuItem>
                <MenuItem>Personajes</MenuItem>
                <MenuItem>Naves</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Spacer />
          <Box p="10" w="300px" h="100">
            <CartWidget />
          </Box>
        </Flex>
      </div>
    </>
  );
};

export default NavBar;
