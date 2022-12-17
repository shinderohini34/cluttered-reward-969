import React from 'react';

import styled from 'styled-components';
import styles from "./Section5.module.css"
import { Box, Button, Input, InputLeftAddon, Text } from '@chakra-ui/react';


const countries = [
    {
        value: 'USD',
        label: 'USA +1',
    },
    {
        value: 'IN',
        label: 'INDIA +91',
    },
    {
        value: 'BTN',
        label: 'Bhutan',
    },
    {
        value: 'SR',
        label: 'SriLanka',
    },
];

export default function Section5() {
    const mobilelogo="https://a.travel-assets.com/mad-service/footer/marquee/ORB_App_Footer_v1.jpg"
 
    return (

      <Box maxW="7xl" mx={'auto'} pt={3} px={{ base: 2, sm: 12, md: 17 }} mt={10}>
      
            <Box className={styles.Card}>
                <Box>       <img className={styles.Image} src={mobilelogo} alt="RewardImage" />
                </Box>
                <Box className={styles.Box2}>

                    <Text className={styles.Text} component="h2">
                        Rewards are waiting for you in the Orbitz app
                    </Text>

                    <ui>
                        <li className={styles.Text1}>Earn 4% back when you book your hotel in app, vs. 3% on site</li>
                        <li className={styles.Text1}>Get flight status and gate number notifications</li>
                        <li className={styles.Text1}>Have questions about your stay? Message your hotel right in the app</li>
                    </ui>

                    <Text className={styles.Text2} >
                        Text yourself a download link
                    </Text>

                    <Box className={styles.Boxadjust}>
                        {/* <Text className={styles.TextFeild}
                            id="outlined-select-currency-native"
                            select
                            label="country code"
                            SelectProps={{
                                native: true,
                            }}
                            variant="outlined">
                            
                            {countries.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </Text>
                        <Text className={styles.TextFeild} id="outlined-basic" label="Phone Number" variant="outlined" />
                        */}
                        <div style={{display:"flex"}}>
                        <Input type='tel' placeholder='+231' width="100px" />
                        <Input type='tel' placeholder='phone number' width="300px"/>
                        <Button className={styles.Button} variant="contained" borderRadius="1px" color="secondary">
                            Get the App
                        </Button>
                        </div>
                         
                        

                    </Box>
                    <p className={styles.text3}>By providing your number, you agree to receive a one-time automated text message with a link to get the app. Standard text message rates may apply.</p> 
                  
                </Box>
                <Box className={styles.Box3}>
                    <img src="https://a.travel-assets.com/mad-service/qr-code/portfolio_app_landing/qr_app_landing_footer_orbitz.png" alt="travelQR" />
                    <Text className={styles.TexQR}>Scan the QR code</Text>
                </Box>
            </Box>
        

      </Box>
        
    );
}

const CardCont = styled.div` 
        padding: 1.5rem;
        margin-top:50px;
    `

/*import "./Section5.css";
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  Button,
  Stack,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  InputGroup,
  InputLeftElement,
  Input,
  Select,
} from "@chakra-ui/react";

export default function Section5() {
  return (
    <>
      <Box maxW="7xl" mx={"auto"} pt={10} px={{ base: 2, sm: 12, md: 17 }}>
        <Stack direction={"row"} spacing={5}>
          <Box>
            <img
              src="https://a.travel-assets.com/mad-service/footer/marquee/ORB_App_Footer_v1.jpg"
              alt=""
              className="im"
            />
          </Box>
          <Box>
              <Heading fontSize={"xl"}>
                Rewards are waiting for you in the Orbitz app
              </Heading>
              <ul>
                <li>Earn 4% back when you book your hotel in app, vs. 3% on site</li>
                <li>Get flight status and gate number notifications</li>
                <li>Have questions about your stay? Message your hotel right in the app</li>
              </ul>
              
              <Text fontWeight={"bold"}>Text yourself a download link</Text>
              <Stack direction={"row"}>
                <Select variant="filled" placeholder="Outline">
                  <option value="">Helo</option>
                  <option value="">Helo</option>
                </Select>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" />
                  <Input type="tel" placeholder="Phone number" />
                </InputGroup>
                <Button>Get the app</Button>
              </Stack>
            </Box>
          
          
        </Stack>
      </Box>
    </>
  );
}*/
