import { ReactNode } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>Nuestros clientes hablan de nosotros</Heading>
          <Text>Contamos con los mejores clientes del mundo</Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                Un loyalty token para dominarlos a todos
              </TestimonialHeading>
              <TestimonialText>
                TREX es la leche. Si lo sé no compro Twitter y meto toda mi
                pasta en ese token
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://pbs.twimg.com/profile_images/1503591435324563456/foUrqiEw_400x400.jpg"
              }
              name={"Elon Musk"}
              title="CEO de Tesla, Space X, Boring Company, Solar City, X.com, Twitter, etc."
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                Lo mejor desde la CocaCola
              </TestimonialHeading>
              <TestimonialText>
                Nuestros usuarios nunca han estado tan contentos. Las
                recompensas con TREX son extremadamente eficientes.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://www.telefonica.com/es/wp-content/uploads/sites/4/2021/04/Jose-Maria-Alvarez-Pallete-cv.jpg?w=482"
              }
              name={"José Maria Álvarez-Pallete"}
              title={"CEO de Telefónica"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Mindblowing Service</TestimonialHeading>
              <TestimonialText>
                El token de los verdaderos Hackers de recompensas.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://openexpoeurope.com/wp-content/uploads/2017/04/chema-alonso-oficial-copia.jpg"
              }
              name={"Chema Alonso"}
              title={"Chief Digital Consumer Officer de Telefónica"}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
