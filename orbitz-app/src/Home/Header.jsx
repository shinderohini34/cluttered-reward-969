import "./FeaturedOffers.css";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  LinkBox,
  LinkOverlay,
  Box,
  Heading,
} from "@chakra-ui/react";

export default function MiddleSection() {
  return (
    <>
      <div className="middle">
        <div className="section2">
          <div>
            <img
              src="https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_TravelAsYouAre_imgB_840x473_20220207.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_Rewards_imgB_840x473_20220207.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_InsiderPrices_imgB_840x473_20220207.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh"
              alt=""
            />
          </div>
        </div>
      </div>

      
  <div className="middle2">
      
      <LinkBox
        as="article"
        maxW="sm"
        p="5"
        borderWidth="1px"
        className="div1"
      >
        
        <Heading size="md" my="2" mt="20">
          <LinkOverlay href="#">
            Last-minute deals
          </LinkOverlay>
        </Heading>
        <Text mb="3">
          Getway today
        </Text>
        
      </LinkBox>
      <LinkBox
        as="article"
        maxW="sm"
        p="5"
        borderWidth="1px"
        
        className="div2"
      >
        
        <Heading size="md" my="2" mt="20">
          <LinkOverlay href="#">
            All-inclusive resorts
          </LinkOverlay>
        </Heading>
        <Text mb="3">
          Enjoy sun and fun
        </Text>
        
      </LinkBox>
      <LinkBox
        as="article"
        maxW="sm"
        p="5"
        borderWidth="1px"
        
        className="div3"
      >
        
        <Heading size="md" my="2" mt="20">
          <LinkOverlay href="#">
            Insider Prices
          </LinkOverlay>
        </Heading>
        <Text mb="3">
          Members get rewarded
        </Text>
        
      </LinkBox>
      <LinkBox
        as="article"
        maxW="sm"
        p="5"
        borderWidth="1px"
        
        className="div4"
      >
        
        <Heading size="md" my="2" mt="20">
          <LinkOverlay href="#">
            Jet and reset
          </LinkOverlay>
        </Heading>
        <Text mb="3">
          Fly somewhere beachy and warm
        </Text>
        
      </LinkBox>
    </div>
    </>
  );
}
