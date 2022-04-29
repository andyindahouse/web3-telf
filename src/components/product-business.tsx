import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Button,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import * as React from "react";
import { useContract, useTransaction } from "wagmi";
import { REWARDS_ABI } from "../utils/abis";
import { utils } from "ethers";

function ProductAddToCart({
  isNew,
  imageURL,
  name,
  description,
  price,
  showInput,
  ctaText,
  signer,
}: any) {
  const [code, setCode] = React.useState("");
  const toast = useToast();
  const contract = useContract({
    addressOrName: "0x2320F129Eef368b9f77f37d24BC6E285A6b964e7",
    contractInterface: REWARDS_ABI,
    signerOrProvider: signer,
  });

  const handleClick = async () => {
    const response = await contract.useCode(code);

    toast({
      title: "Has reclamado tus TREX con éxito",
      description:
        "Es posible que tarde un poco en confirmarse la operación, mira tu wallet para ver el estado.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });

    console.log(response);
  };

  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        {isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )}

        <Image src={imageURL} alt={`Picture of ${name}`} roundedTop="lg" />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            {isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {name}
            </Box>
          </Flex>
          <Box fontSize="xl" as="p" lineHeight="tight">
            {description}
          </Box>

          <Stack spacing={"16px"}>
            <Flex justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                color={useColorModeValue("gray.800", "white")}
              >
                {price && price.toFixed(2)}{" "}
                <Box as="span" color={"gray.600"} fontSize="lg">
                  TREX
                </Box>
              </Box>
            </Flex>
            {showInput && (
              <Input
                value={code}
                onChange={(e) => {
                  console.log(e, e.target.value);
                  setCode(e.target.value);
                }}
                placeholder="Introduce tu código"
                size="lg"
              />
            )}
            <Button colorScheme="blue" onClick={handleClick}>
              {ctaText}
            </Button>
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
}

export default ProductAddToCart;
