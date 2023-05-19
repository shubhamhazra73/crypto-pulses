import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const CoinCard = ({ id, name, img, symbol, price, currencySymbol = "₹" }) => (
  <Link to={`/coin/${id}`}>
    <div>
    <VStack
      w={"52"}
      border={"2px solid black"}
      shadow={"sm"}
      p={"8"}
      borderRadius={"lg"}
      transition={"all 0.3s"}
      m={"4"}
      id="styleCoin"
      css={{
        "&:hover": {
          transform: "scale(1.1)",
          color:"chartreuse",
        },
      }}
    >
      <Image
        src={img}
        w={"10"}
        h={"10"}
        objectFit={"contain"}
        alt={"Exchange"}
      />
      <Heading size={"md"} noOfLines={1}>
        {symbol}
      </Heading>

      <Text noOfLines={1} color={"black"}  ><b>{name}</b>  </Text>
      <Text noOfLines={1} color={"black"} ><b> {price ? `${currencySymbol}${price}` : "NA"} </b></Text>
    </VStack>
    </div>
  </Link>
);

export default CoinCard;