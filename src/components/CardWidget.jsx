import React from "react";
//Aca deberiamos ingresar el link para las libreriamos
import { Button, ButtonGroup } from "@chakra-ui/react";

const CardWidget = () => {
  return (
    <>
      <div>
      <Button colorScheme='red' size='md'>
      <span>2</span>
        <span className="material-symbols-outlined">shopping_cart</span>
      </Button>
      </div>
    </>
  );
};

export default CardWidget;
