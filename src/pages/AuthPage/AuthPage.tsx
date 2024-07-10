import { Box, Flex, Heading } from "@chakra-ui/react";
import Login from "./Login";
import Register from "./Register";
import AuthSlider from "./AuthSlider";
import "../../assets/authBackground.css";

export default function AuthPage() {
  return (
    <Flex
      width={"100%"}
      height={"100vh"}
      align={"center"}
      justify={"center"}
      direction={"column"}
      className="gradient-background"
      overflowY={"auto"}
    >
      <Flex>
        <Heading fontSize={"80px"} color={"white"} mb={5}>
          Trollo
        </Heading>
      </Flex>
      <Flex
        width={"60%"}
        height={"50%"}
        minH={"400px"}
        border={"1px solid white"}
        position={"relative"}
        borderRadius={"10px"}
      >
        <Box width={"50%"}>
          <Login />
        </Box>

        <Box width={"50%"} height={"100%"}>
          <Register />
        </Box>

        <AuthSlider />
      </Flex>
    </Flex>
  );
}
