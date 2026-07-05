import { useState } from "react";
import { Burger, Container, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";


export function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Group gap={5} visibleFrom="xs">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.link + " " + classes.active : classes.link
            }
          >
            Home
          </NavLink>


          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? classes.link + " " + classes.active : classes.link
            }
          >
            Profile
          </NavLink>
        </Group>


        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}