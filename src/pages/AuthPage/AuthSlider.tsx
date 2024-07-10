import { Button, Flex, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import "../../assets/authSlider.css";

export default function AuthSlider() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [wrapPosLeft, setWrapPosLeft] = useState<boolean>(true);

  const handleClick = () => {
    setWrapPosLeft((prev) => !prev);
    if (!wrapPosLeft) {
      sliderRef.current?.classList.add("auth-slider-toLeft");
      sliderRef.current?.classList.remove("auth-slider-toRight");
    } else {
      sliderRef.current?.classList.remove("auth-slider-toLeft");
      sliderRef.current?.classList.add("auth-slider-toRight");
    }
  };

  return (
    <Flex
      ref={sliderRef}
      width={"50%"}
      height={"100%"}
      position={"absolute"}
      transition={"transform 300ms ease-in-out"}
      color={"white"}
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={4}
      className="auth-slider-toLeft gradient-background"
    >
      <Text fontSize={"20px"}>
        {!wrapPosLeft
          ? "Do you have an account? If not, click to sign up!"
          : "Do you already have an account?"}
      </Text>
      <Button onClick={handleClick}>
        {!wrapPosLeft ? "Sign Up" : "Log in"}
      </Button>
    </Flex>
  );
}
