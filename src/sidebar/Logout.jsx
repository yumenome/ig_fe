import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { SlLogout } from 'react-icons/sl'
import api_client from '../api_/axios_client'
import { useStateContext } from '../ContextProvider'

const Logout = () => {

    const {setUser, setToken} = useStateContext();

    const logout = (e) =>{
        e.preventDefault();
        api_client.post('/logout')
            .then(() => {
                setUser({});
                setToken(null);
            })
    }
  return (
    <Flex onClick={logout}>
        <SlLogout size={23} />
        <Box ml={4} display={{base: 'none', md: 'block'}}>logout</Box>
    </Flex>
  )
}

export default Logout