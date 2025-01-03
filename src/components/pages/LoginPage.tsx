import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { TextFieldElement } from "react-hook-form-mui";
import { useAuth } from "../../hooks/useAuth";
import { AuthService } from "../../services/AuthService";
import { AuthenticationRequest } from "../../services/dto/Authentication";

interface FormValues {
  identifier: string;
  password: string;
}

export default function LoginPage() {
  const { handleSubmit, control } = useForm<FormValues>();
  const [loginError, setLoginError] = useState<string | null>(null);

  const { login } = useAuth();

  function onSubmit(data: FormValues) {
    // TODO handle authentication issue
    const loginRequestBody: AuthenticationRequest = {
      identifier: data.identifier,
      password: data.password,
    };
    AuthService.doAuthentication(loginRequestBody)
      .then((response) => {
        login(response.data);
      })
      .catch((error) => {
        console.error(error);
        setLoginError(error);
      });
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Paper sx={{ padding: 2, minWidth: "300px" }}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack gap={2}>
            <TextFieldElement
              name="identifier"
              label="Username"
              control={control}
            />
            <TextFieldElement
              name="password"
              label="Password"
              type="password"
              control={control}
            />
            {loginError && (
              <Typography variant="body1" color="error">
                {loginError}
              </Typography>
            )}
            <Button type="submit">Login</Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
}
