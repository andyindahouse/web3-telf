import { Text, Link } from "@chakra-ui/react";
import NextLink, { LinkProps } from "next/link";
import { FC } from "react";

export const NavItem: FC<LinkProps> = ({ children, href }) => (
  <NextLink href={href} passHref>
    <Link style={{ color: "#BB86FC", cursor: "pointer" }}>
      <Text
        fontSize={[16, 16, 16, 18]}
        fontWeight={600}
        display="block"
        width="auto"
      >
        {children}
      </Text>
    </Link>
  </NextLink>
);

export const NavDrawerItem: FC<LinkProps & { onClick: () => void }> = ({
  children,
  href,
  onClick,
}) => (
  <NextLink href={href} passHref>
    <Link
      onClick={onClick}
      style={{
        textDecoration: "none",
        outline: "none",
        boxShadow: "none",
      }}
    >
      <Text
        fontSize={16}
        py={2}
        px={2}
        _hover={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
        }}
        style={{ borderRadius: 25 }}
        fontWeight={600}
        display="block"
        width="auto"
      >
        {children}
      </Text>
    </Link>
  </NextLink>
);
