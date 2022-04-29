import {
  Button,
  Link,
  Box,
  Image,
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useContract, useTransaction } from "wagmi";
import { BigNumber } from "@ethersproject/bignumber";
import ProductSimple from "../components/product-simple";
import ProductBusiness from "../components/product-business";
import WithSpeechBubbles from "../components/feedback";
import { TOKEN_ABI } from "../utils/abis";
import { utils, providers } from "ethers";
import * as React from "react";

const Home: NextPage = () => {
  const [signer, setSigner] = React.useState<any>(null);
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      // @ts-expect-error
      const provider = new providers.Web3Provider(window.ethereum);
      setSigner(provider.getSigner());
    }
  }, []);

  if (!signer) {
    return null;
  }

  console.log(signer);

  return (
    <div className={styles.container}>
      <Head>
        <title>TREX - Token Reward Experience</title>
        <meta
          name="TREX"
          content="Consigue TREX para comprar en tus marcas favoritas"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack spacing="24px">
        <Heading fontSize={32}>Recompensas populares</Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <ProductBusiness
            isNew
            imageURL="https://comunidad.movistar.es/t5/image/serverpage/image-id/181572i926002A4CF9D6C4E/image-size/large?v=1.0&px=999"
            name="Danos feedback sobre movistar alarmas"
            description="Usa el código que te han proporcionado al finalizar el formulario de feedback"
            price={4.8}
            showInput
            ctaText="Reclama tus TREX"
            signer={signer}
          />
          <ProductBusiness
            imageURL="https://phantom-expansion.unidadeditorial.es/d2529fb175e3ef8693517f3d0cb2f45c/crop/0x203/1729x1353/resize/828/f/jpg/assets/multimedia/imagenes/2020/10/06/16019798406556.jpg"
            name="Pide tu cabify al aereopuerto"
            description="Usa el código que te han proporcionado el conductor al finalizar tu viaje"
            price={4.8}
            showInput
            ctaText="Reclama tus TREX"
            signer={signer}
          />
          <ProductBusiness
            isNew
            imageURL="https://i2.wp.com/lopezdoriga.com/wp-content/uploads/2018/03/repsol.png?fit=1920%2C1080&ssl=1"
            name="Repsol - Reposta 5 litros de carburante"
            description="Usa el código que aparece en el ticket del repostaje"
            price={4.8}
            showInput
            ctaText="Reclama tus TREX"
            signer={signer}
          />
        </Grid>
        <Heading fontSize={32}>Canjea tus TREX</Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <ProductSimple
            isNew
            imageURL="https://www.movistar.es/estaticos/imagenes/terminales-moviles/ficha-445/fotos-detalle/movistar-home-03.jpg"
            name="Compra tu Movistar Home"
            description="Usa tus TREX para adquirir lo último en asistentes digitales"
            price={5}
            ctaText="Compra"
            signer={signer}
          />
          <ProductSimple
            imageURL="https://onemobile.ec/wp-content/uploads/2021/09/iPhone-13-Pro-Max-Mobile-Store-Ecuador.jpg"
            name="Consigue tu iPhone"
            description="¡Llevate a tu casa el último modelo de iPhone 19!"
            price={200}
            ctaText="Compra"
            signer={signer}
          />
          <ProductSimple
            isNew
            imageURL="https://www.nookmag.com/wp-content/uploads/2018/09/Screen-Shot-2018-09-03-at-6.34.32-PM.png"
            name="McDonalds - Compra tu BigMac con TREX"
            description="Adquiere BigMacs con tus TREX"
            price={5}
            ctaText="Compra"
            signer={signer}
          />
        </Grid>
        <WithSpeechBubbles />
      </Stack>
    </div>
  );
};

export default Home;
