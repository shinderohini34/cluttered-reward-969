import "./Section4.css"
import { Box, SimpleGrid, Heading, Text, Button} from "@chakra-ui/react"
export default function Section4()
{
    return(
        <>
        <Box maxW="7xl" mx={'auto'} pt={3} px={{ base: 2, sm: 12, md: 17 }}>
            <SimpleGrid columns={2} spacing={5} className="section4images">
                <Box className="img1">
                    <Heading pt={20}>National Parks</Heading>
                    <Text>There's plenty to keep you busy.</Text>
                    <Button color={"blue"} bg={"white"} size='sm' mt={3}>Button</Button>

                </Box>
                <Box className="img2">
                    <Heading pt={20}>The perfect road trip</Heading>
                    <Text>Find an adventure for every season</Text>
                    <Button color={"blue"} bg={"white"} size='sm' mt={3}>Button</Button>
                </Box>
            </SimpleGrid>
        </Box>
        </>
    )

}