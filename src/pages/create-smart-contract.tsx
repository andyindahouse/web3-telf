import type { NextPage } from "next";

import { Heading, Flex, Text } from "@chakra-ui/layout";
import { Button, Image, Input, useToast } from "@chakra-ui/react";
import { utils, providers } from "ethers";
import { useContract, useTransaction } from "wagmi";
import { REWARDS_ABI } from "../utils/abis";
import * as React from "react";

const Form = ({ signer }: any) => {
  const [code, setCode] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const contract = useContract({
    addressOrName: "0x2320F129Eef368b9f77f37d24BC6E285A6b964e7",
    contractInterface: REWARDS_ABI,
    signerOrProvider: signer,
  });
  const toast = useToast();

  const handleClick = async () => {
    console.log(code, amount);
    if (code && amount) {
      await contract.addCode(code, utils.parseEther(amount));
      toast({
        title: "Contrato creado con éxito",
        description:
          "Ahora los usuarios que tengan este código podrán reclamar su recompensa",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex
      width="66%"
      height="100%"
      direction="column"
      justifyContent="space-between"
      gap="3rem"
    >
      <Heading>Crea tu smart contract</Heading>

      <Text>
        Define todos los códigos de tus ofertas para que el contrato pueda
        validar los proporcionados por los usuarios e introduce la cantidad de
        TREX que quieres entregar para esos códigos.
      </Text>
      <Text>
        Por ejemplo, si tienes 10 códigos y transfieres 10 TREX al contrato,
        cada recompensa repartira 1 TREX por código válido.
      </Text>

      <Input
        value={code}
        onChange={(e) => {
          console.log(e, e.target.value);
          setCode(e.target.value);
        }}
        placeholder="Introduce los códigos separados por comas"
        size="lg"
      />
      <Input
        value={amount}
        onChange={(e) => {
          console.log(e);
          setAmount(e.target.value);
        }}
        placeholder="Introduce la cantidad a repartir para el total de los códigos"
        size="lg"
      />
      <Button
        backgroundColor="#BB86FC"
        borderRadius="25px"
        margin={2.5}
        _hover={{
          bg: "#121212",
        }}
        _active={{
          bg: "#121212",
        }}
        onClick={handleClick}
      >
        Crea tu smart contract
      </Button>
    </Flex>
  );
};

const About: NextPage = () => {
  const [signer, setSigner] = React.useState<any>(null);

  React.useEffect(() => {
    // @ts-expect-error
    const provider = new providers.Web3Provider(window.ethereum);
    setSigner(provider.getSigner());
  }, []);

  return (
    <Flex
      direction="row"
      width="100%"
      height="90%"
      alignItems="center"
      justifyContent="space-between"
      padding="2rem"
    >
      <Form signer={signer} />
    </Flex>
  );
};

export default About;
