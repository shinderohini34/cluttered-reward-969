import React from "react";
import { Button, Checkbox, flexbox, Input, Stack } from "@chakra-ui/react";
import "./stay.css";
import { Flex, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";

export const Car = () => {
	return (
		<>
			<br />
			<div>
				<label style={{ display: "flex", gap: "20px" }}>
					<Input
						borderRadius="1px"
						outline="1px solid rgb(82, 81, 81)"
						placeholder="Going to"
						size="md"
						width="500px"
                        height="45px"
					/>

					<Input
						className="checkin"
						type="date"
						placeholder="check in"
						size="md"
						width="200px"
						outline="1px solid rgb(82, 81, 81)"
                        borderRadius="1px"
                        height="45px"
					/>
					<Input
						outline="1px solid rgb(82, 81, 81)"
						type="date"
						placeholder="check out"
						size="md"
						width="200px"
                        borderRadius="1px"
                        height="45px"
					/>
					<Flex
						alignItems="center"
						h="10"
						paddingLeft="16px"
						width="350px"
						border="1px solid #6b646b"
                        borderRadius="1px"
                        height="45px"
					>
						<span style={{ fontSize: "15px" }} className="material-icons">
                        <BsFillPersonFill fontSize={20}/>
						</span>
						<Box paddingLeft="10px">
							<p style={{ fontSize: "12px" }}>Travelers</p>
							<p>1 Room, 2 Travelers</p>
						</Box>
					</Flex>
				</label>
				<br />
				<Stack spacing={[1, 5]} direction={["column", "row"]}>
					<Checkbox size="md" colorScheme="teal" defaultChecked>
						Add a flight
					</Checkbox>
					<Checkbox size="md" colorScheme="teal" defaultChecked>
						Add a car
					</Checkbox>
				</Stack>
				<br />
				<div style={{ display: "flex", justifyContent: "center" }}>
				<Link to="/Hotels">
						<Button bg={"#c83259"} color="white" borderRadius={"0"} p={"6"} w={"40"} variant="solid">
							Search
						</Button>
				</Link>
				</div>
			</div>
		</>
	);
};