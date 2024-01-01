import React, { useEffect } from 'react';
import { Container, Flex, VStack, Box, Image } from '@chakra-ui/react';
import AuthForm from '../components/auth/AuthForm';
import { useStateContext } from '../ContextProvider';
import { Navigate } from 'react-router-dom';

const AuthPage = () => {

    const { token } = useStateContext
     if(token){
        return <Navigate to='/' />
    }
    
  return (
    <Flex minH={'100vh'} justifyContent={'center'} alignItems={'center'} px={3} >
        <Container maxW={'container.md'} padding={0}>
            <Flex justifyContent={'center'} alignItems={'center'} gap={10}>
                <Box display={{ base: 'none', md: 'block'}}>
                <Image src='/logo1.png' h={650} w={'800px'} alt='Phone img' />
                </Box>
                <VStack spacing={4} align={'stretch'}>
                    <AuthForm />
                    <Box textAlign={'center'} >get the app.</Box>
                    <Flex gap={5} justifyContent={"center"} >
                        <Image src='/playstore.png' h={'10'} alt='playstore' />
                        <Image src='/microsoft.png' h={'10'} alt='microsoft' />
                    </Flex>
                </VStack>
            </Flex>
        </Container>
    </Flex>
  )
}

export default AuthPage