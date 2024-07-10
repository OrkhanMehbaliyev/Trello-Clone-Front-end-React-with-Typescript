import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  VStack,
} from "@chakra-ui/react";
import RHFInput from "../../components/FormComponents/RHFInput";
import { IRegisterProps } from "../../types/types";
import { LOGIN_RULES } from "../../utils/schemas/login-schema";
import {
  REGISTER_RULES,
  registerDefaults,
} from "../../utils/schemas/register-schema";

export default function Register() {
  const methods = useForm<IRegisterProps>({
    defaultValues: registerDefaults,
    mode: "all",
  });

  const errors = methods.formState.errors;

  const onSubmit: SubmitHandler<IRegisterProps> = (data) => {
    console.log(data);
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
            <RHFInput<IRegisterProps>
              name="username"
              placeholder="Username"
              rules={LOGIN_RULES.username}
            />
            <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.fullname}>
            <RHFInput<IRegisterProps>
              name="fullname"
              placeholder="Fullname"
              rules={REGISTER_RULES.fullname}
            />
            <FormErrorMessage>{errors.fullname?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.email}>
            <RHFInput<IRegisterProps>
              name="email"
              placeholder="example@trollo.com"
              rules={REGISTER_RULES.email}
            />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.password}>
            <RHFInput<IRegisterProps>
              name="password"
              placeholder="Password"
              type="password"
              rules={REGISTER_RULES.password}
            />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>

          <Button m={"auto"} type="submit">
            Sign Up
          </Button>
        </VStack>
      </FormProvider>
    </Flex>
  );
}
