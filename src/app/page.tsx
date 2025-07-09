import {
  Avatar,
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Image as ChakraImage,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

import image1 from "../../public/assets/photos/image-1.jpg";
import image2 from "../../public/assets/photos/image-2.jpg";
import image3 from "../../public/assets/photos/image-3.jpg";
import image4 from "../../public/assets/photos/image-4.jpg";
import image5 from "../../public/assets/photos/image-5.jpg";
import { GitHubIcon, LinkedInIcon } from "../components/SocialIcons";

export default function Page() {
  return (
    <>
      <Box
        pos="fixed"
        inset="0"
        bg={{ base: "gray.50", _dark: "black" }}
        zIndex={-1}
        isolation="isolate"
        _before={{
          content: '""',
          display: "block",
          mx: "auto",
          w: "6xl",
          h: "full",
          borderX: "1px solid",
          borderColor: "border.muted",
          bg: { base: "white", _dark: "gray.900" },
        }}
        aria-hidden
      />

      <HeroSection />

      <PhotosSection />
    </>
  );
}

const HeroSection = () => {
  return (
    <Container maxW="5xl" py="16">
      <VStack align="start">
        <Link href="/">
          <Avatar.Root size="2xl">
            <Avatar.Fallback name="Irving Dinh" />
            <Avatar.Image src="/assets/avatar.jpg" />
          </Avatar.Root>
        </Link>

        <Stack mt={{ base: "6", lg: "12" }} maxW="2xl">
          <Box>
            <Heading
              size={{ base: "4xl", lg: "5xl" }}
              fontWeight="bold"
              lineHeight="1.125"
            >
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

          <HStack mt="6" gap="6">
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
          </HStack>
        </Stack>
      </VStack>
    </Container>
  );
};

const PhotosSection = () => {
  const rotations = [
    "rotate(2deg)",
    "rotate(-2deg)",
    "rotate(2deg)",
    "rotate(2deg)",
    "rotate(-2deg)",
  ];

  return (
    <Flex
      justifyContent="center"
      gap={{ base: "6", lg: "8" }}
      py="4"
      mx="-4"
      maxW="100vw"
      overflow="hidden"
    >
      {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
        <Box
          key={image.src}
          borderRadius={{ base: "xl", sm: "2xl" }}
          flexShrink="0"
          position="relative"
          w={{ base: "44", sm: "72" }}
          aspectRatio="9/10"
          overflow="hidden"
          transform={rotations[imageIndex % rotations.length]}
        >
          <ChakraImage
            asChild
            position="absolute"
            inset="0"
            w="full"
            h="full"
            fit="cover"
          >
            <Image src={image} alt="" sizes="(min-width: 640px) 18rem, 11rem" />
          </ChakraImage>
        </Box>
      ))}
    </Flex>
  );
};
