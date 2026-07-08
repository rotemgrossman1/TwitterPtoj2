import {
  Alert,
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import classes from "./LoginPage.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import { useForm } from "@mantine/form";
//import { IconAlertCircle } from "@tabler/icons-react";

export function LoginPage() {
  const form = useForm({
    initialValues: {
      email: "nirch@example.com",
      password: "",
    },
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length < 6 ? "Password should include at least 6 characters" : null,
    },
  });
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const { onLogin } = useAuth();

  async function handleLogin() {
    const validation = form.validate();
    if (validation.hasErrors) {
      console.log(validation);
    } else {
      setLoading(true);
      setLoginError(null);
      const error = await onLogin(form.values.email, form.values.password);
      if (error) {
        setLoading(false);
        setLoginError(error);
      }
    }
  }

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome back!
      </Title>

      <Text className={classes.subtitle}>
        Do not have an account yet? <Anchor>Create account</Anchor>
      </Text>

      <Paper withBorder shadow="sm" p={22} mt={30} radius="md">
        {loginError && (
          <Alert
            icon={<IconAlertCircle size="1rem" />}
            title="Login Failed"
            color="red"
            variant="light"
          >
            {loginError.message}
          </Alert>
        )}
        <TextInput
          label="Email"
          required
          radius="md"
          value={form.values.email}
          onChange={(e) => form.setFieldValue("email", e.target.value)}
          error={form.errors.email}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
          radius="md"
          value={form.values.password}
          onChange={(e) => form.setFieldValue("password", e.target.value)}
          error={form.errors.password}
        />
        <Button
          fullWidth
          mt="xl"
          radius="md"
          onClick={handleLogin}
          loading={loading}
        >
          Sign in
        </Button>
      </Paper>
    </Container>
  );
}