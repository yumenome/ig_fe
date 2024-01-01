import { Flex, VStack, Box, Image, Text, Input, Button } from "@chakra-ui/react";
import { useRef, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import api_client from "../../api_/axios_client";
import { useStateContext } from "../../ContextProvider";

const AuthForm = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();


    const [isLogin, setIsLogin] = useState(true);
    const [errors, setErrors] = useState(null);
    const {setUser, setToken, token, user }  = useStateContext();


    if(token){
        return <Navigate to='/' />
    }

    const toSingup = () => {
      const inputs = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
        password_confirmation: passwordConfirmRef.current.value
      }
      console.log(inputs);
      if(!inputs.email || !inputs.password){
        alert('please fill all of the required fields');
        return;
      }
      api_client.post('/signup', inputs)
        .then(({data}) => {
          setUser(data.user);
          console.log(data);
          setToken(data.token);
        })
        .catch(err => {
          const response = err.response;
          if(response && response.status === 422){
              console.log(response.data.errors);
              setErrors(response.data.errors);
          }
        })

    } 

    const toLogin = () => {
      const inputs = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }
      console.log(inputs);
      if(!inputs.email || !inputs.password){
        alert('please fill all of the required fields');
        return;
      }
      api_client.post('/login', inputs)
        .then(({data}) => {
          // debugger;
          setUser(data.user);
          console.log(user);
          setToken(data.token);
        })
        .catch(err => {
          const response = err.response;
          if(response && response.status === 422){
              if(response.data.errors){
                  console.log(response.data.errors);
                  setErrors(response.data.errors);
              }else{
                  console.log({password: [response.data.message]});
                  setErrors({password: [response.data.message]});
              }
          }
      })
    }

  return (
    <div style={{width: '300px'}}>
        <Box border={'1px solid gray'} borderRadius={5} padding={5} >
            <VStack spacing={4}>
                <Image src='/logo.png' h={24} cursor={'pointer'} alt='ig' />
                <form  >
                  {!isLogin ? <Input ref={nameRef}  placeholder='name' type='text'/> : null}
                  <Input ref={emailRef}  placeholder='email' mt={3} type='email' />
                  <Input ref={passwordRef}  placeholder='password' mt={3} fontSize={14} type='password' />

                  {!isLogin ? <Input ref={passwordConfirmRef}  placeholder="confirm password" mt={3} fontSize={14} type="password" /> : null}

                  {!isLogin ? 
                  <Button w={'full'} colorScheme="blue" size={'sm'} fontSize={14} mt={3} onClick={toSingup} > SIGNUP </Button> : 
                  <Button w={'full'} colorScheme="blue" size={'sm'} fontSize={14} mt={3} onClick={toLogin} > LOGIN </Button> 
                  }

                </form>
                
                <Flex alignItems={'center'} justifyContent={'center'} my={4} gap={1} w={'full'} >
                  <Box flex={2} h={0.5} bg={'gray.400'} />
                  <Text mx={1} color={'white'}>or</Text>
                  <Box flex={2} h={0.5} bg={'gray.400'} />
                </Flex>

                <Flex alignItems={'center'} justifyContent={'center'} cursor={'pointer'} >
                  <Image src='/google.png' w={5} alt="google" />
                  <Text mx='2' color={'blue.500'} >login with google</Text>
                </Flex>
            </VStack>
        </Box>

        <Box border={'1px solid gray'} borderRadius={4} padding={5} mt={3} >
          <Flex alignItems={'center'} justifyContent={'center'} >
            <Box mx={2} fontSize={14}>
              {isLogin ? "don't have an account?" : "already have an account?"}
            </Box>
            <Box onClick={() => setIsLogin(!isLogin)} color={'blue.500'} cursor={'pointer'}>
              {isLogin ? "signup" : "login"}
            </Box>
          </Flex>
        </Box>

    </div>
  );
};

export default AuthForm
