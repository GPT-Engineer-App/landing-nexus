import { Box, Button, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FaArrowRight, FaCloud, FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Box minH="100vh" bg="gray.50">
      <Flex align="center" justify="center" h="100vh" p={10}>
        <VStack spacing={8} align="start" maxW="lg">
          <Heading as="h1" size="2xl" fontWeight="bold">
            Elevate Your Business with CloudTech
          </Heading>
          <Text fontSize="xl">Discover the power of our cloud solutions to scale your operations efficiently and securely.</Text>
          <Button rightIcon={<FaArrowRight />} colorScheme="blue" size="lg">
            Get Started
          </Button>
        </VStack>
        <Image src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzE0MTQxNDY4fDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="500px" objectFit="cover" borderRadius="lg" alt="Cloud Technology" />
      </Flex>
      <Flex bg="white" p={10} align="center" justify="space-around">
        <Feature icon={<FaCloud />} title="Secure Cloud Storage" description="Keep your data safe and accessible with our top-tier, secure cloud storage solutions." />
        <Feature icon={<FaRocket />} title="Fast Performance" description="Boost your productivity with high-speed computing and optimized performance." />
      </Flex>
    </Box>
  );
};

const Feature = ({ icon, title, description }) => {
  return (
    <VStack spacing={3} align="center">
      <Box p={5} bg="blue.500" borderRadius="full" color="white">
        {icon}
      </Box>
      <Text fontWeight="bold" fontSize="lg">
        {title}
      </Text>
      <Text textAlign="center">{description}</Text>
    </VStack>
  );
};

export default Index;
