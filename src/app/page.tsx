import {
  Avatar,
  Box,
  Container,
  Group,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

import { GitHubIcon, LinkedInIcon } from "../components/SocialIcons";

export default function Page() {
  return (
    <Container maxW="5xl">
      <Stack py="16">
        <Box>
          <Avatar.Root size="2xl">
            <Avatar.Fallback name="Irving Dinh" />
            <Avatar.Image src="/assets/avatar.jpg" />
          </Avatar.Root>
        </Box>

        <Stack mt={{ base: "6", lg: "12" }} maxW="2xl">
          <Box>
            <Heading size={{ base: "4xl", lg: "5xl" }} fontWeight="bold">
              Software engineer, designer, and amateur photographer.
            </Heading>
          </Box>

          <Box mt="6">
            <Text color="fg.muted" lineHeight="tall">
              I’m Irving, a software engineer and designer based in Ho Chi Minh
              City, Viet Nam. I’m part of Axon’s mission to reimagine public
              safety through life-preserving technologies that eliminate the
              need for bullets.
            </Text>
          </Box>

          <Group mt="6" gap="6">
            <Link href="https://linkedin.com/in/irvingdinh" target="_blank">
              <Icon size="2xl" color="fg.muted">
                <LinkedInIcon />
              </Icon>
            </Link>

            <Link href="https://github.com/irvingdinh" target="_blank">
              <Icon size="2xl" color="fg.muted">
                <GitHubIcon />
              </Icon>
            </Link>
          </Group>
        </Stack>
      </Stack>
    </Container>
  );
}
