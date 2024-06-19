import React from 'react';
import { ChakraProvider, Box, Button, Container, Flex, Heading, Link, Stack, Text, HStack, VStack, CSSReset, InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import './JobDisplayPage.css';

function JobDisplayPage() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Box as="header" className="header">
        <Container maxW="100%" px="8">
          <Flex justify="space-between" align="center">
            <Flex align="center">
              <Heading as="h1" size="lg" mr="4">
                JobSphere
              </Heading>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <FaSearch color="gray.300" />
                </InputLeftElement>
                <Input
                  type="text"
                  placeholder="search by title, keyword, company or location"
                  bg="gray.100"
                  width="300px"
                />
              </InputGroup>
            </Flex>
            <HStack spacing="8" display={{ base: 'none', md: 'flex' }}>
              <Link>Home</Link>
              <Link>Find a Job</Link>
              <Link>About</Link>
              <Link>Contact</Link>
            </HStack>
            <HStack spacing="4" display={{ base: 'none', md: 'flex' }}>
              <Button className="sign-up-button">Sign Up</Button>
              <Button className="login-button">Login</Button>
            </HStack>
          </Flex>
        </Container>
      </Box>

      <Container maxW="container.xl" mt="8" display="flex">
        <Box className="sidebar" mr="8">
          <VStack align="start" spacing="4">
            <Button className="sidebar-button">MY JOBS</Button>
            <Button className="sidebar-button">PREFERENCES</Button>
            <Button className="sidebar-button">MY NETWORK</Button>
            <Button className="sidebar-button">INTERVIEW PREP TIPS</Button>
          </VStack>
        </Box>

        <Box flex="1">
          <Heading size="lg" mb="4">Top Picks for You Based on Your Profile</Heading>
          <VStack spacing="4" align="start">
            <Box className="job-card">
              <Heading size="md" mb="2">Software Engineer</Heading>
              <Text fontWeight="bold">Tech Innovators Inc.</Text>
              <Text mb="4">
                Seeking a skilled software engineer with 3+ years of experience in JavaScript, Python, and cloud computing. Responsibilities include developing scalable web applications and collaborating with cross-functional teams.
              </Text>
              <Button className="apply-button">Apply</Button>
            </Box>
            <Box className="job-card">
              <Heading size="md" mb="2">Software Engineer</Heading>
              <Text fontWeight="bold">Tech Innovators Inc.</Text>
              <Text mb="4">
                Seeking a skilled software engineer with 3+ years of experience in JavaScript, Python, and cloud computing. Responsibilities include developing scalable web applications and collaborating with cross-functional teams.
              </Text>
              <Button className="apply-button">Apply</Button>
            </Box>
          </VStack>

          <Heading size="lg" mt="8" mb="4">Hiring in Your Network</Heading>
          <VStack spacing="4" align="start">
            <Box className="job-card">
              <Heading size="md" mb="2">Software Engineer</Heading>
              <Text fontWeight="bold">Tech Innovators Inc.</Text>
              <Text mb="4">
                Seeking a skilled software engineer with 3+ years of experience in JavaScript, Python, and cloud computing. Responsibilities include developing scalable web applications and collaborating with cross-functional teams.
              </Text>
              <Button className="apply-button">Apply</Button>
            </Box>
            <Box className="job-card">
              <Heading size="md" mb="2">Software Engineer</Heading>
              <Text fontWeight="bold">Tech Innovators Inc.</Text>
              <Text mb="4">
                Seeking a skilled software engineer with 3+ years of experience in JavaScript, Python, and cloud computing. Responsibilities include developing scalable web applications and collaborating with cross-functional teams.
              </Text>
              <Button className="apply-button">Apply</Button>
            </Box>
          </VStack>
        </Box>
      </Container>

      <Box as="footer" className="footer">
        <Container maxW="100%" px="8">
          <Flex flexDirection={{ base: 'column', md: 'row' }} justify="space-between">
            <Box className="footer-section" mb={{ base: '8', md: '0' }}>
              <Heading className="footer-section1" as="h5" size="md" mb="4">
                About Us
              </Heading>
              <Text className="footer-section1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Text>
            </Box>
            <Box className="footer-section" mb={{ base: '8', md: '0' }}>
              <Heading as="h5" size="md" mb="4">
                Contact
              </Heading>
              <Text>Address: 123 Main St. Waterloo, On, Canada 85486</Text>
              <Text>Email: info@jobsphere.com</Text>
              <Text>Contact: +1 (254) 265-5555</Text>
            </Box>
            <Box className="footer-section">
              <Heading as="h5" size="md" mb="4">
                Important Links
              </Heading>
              <Stack spacing="2">
                <Link>Home</Link>
                <Link>Find a Job</Link>
                <Link>Contact Us</Link>
                <Link>About Us</Link>
              </Stack>
            </Box>
          </Flex>
          <Text textAlign="center" mt="8">
            &copy; 2024 All rights reserved by JobSphere
          </Text>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default JobDisplayPage;
