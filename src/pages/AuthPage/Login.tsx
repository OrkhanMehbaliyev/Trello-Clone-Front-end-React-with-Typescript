import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  VStack,
} from "@chakra-ui/react";
import { LOGIN_RULES, loginDefaults } from "../../utils/schemas/login-schema";
import { ILoginProps } from "../../types/types";
import RHFInput from "../../components/FormComponents/RHFInput";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const methods = useForm<ILoginProps>({
    defaultValues: loginDefaults,
    mode: "all",
  });
  const navigate = useNavigate();
  const { login } = useAuth();

  const errors = methods.formState.errors;

  const onSubmit: SubmitHandler<ILoginProps> = async (data: any) => {
    // const res = await fetch("http://localhost:3003/auth/verifyUser", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });

    // if (res.ok) {
    //   const responseData = await res.json();

    //   const decoded = jwtDecode(responseData.data.token);
    //   console.log(decoded);
    // }

    await login(data);
    navigate("/dashboard");

    // localStorage.setItem("token", token);
  };

  return (
    <Flex padding={4} width={"100%"} height={"100%"} alignItems={"center"}>
      <FormProvider {...methods}>
        <VStack
          width={"70%"}
          as={"form"}
          onSubmit={methods.handleSubmit(onSubmit)}
          spacing={5}
          alignItems={"start"}
          m={10}
        >
          <FormControl isInvalid={!!errors.username}>
            <RHFInput<ILoginProps>
              name="username"
              placeholder="Username"
              rules={LOGIN_RULES.username}
            />
            <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.password}>
            <RHFInput<ILoginProps>
              name="password"
              type="password"
              placeholder="Password"
              rules={LOGIN_RULES.password}
            />

            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>

          <Button m={"auto"} type="submit">
            Log in
          </Button>
        </VStack>
      </FormProvider>
    </Flex>
  );
}
