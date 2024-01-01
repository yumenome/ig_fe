import React, { useEffect, useState } from 'react'
import { Box, Flex, Link, Text, VStack } from '@chakra-ui/react'
import SuggestedUser from './SuggestedUser'
import api_client from '../../../api_/axios_client';
import { useStateContext } from '../../../ContextProvider'

const SuggestedUsers = ({onOpen}) => {
  const[users, setUsers] = useState([]);
  const { user }  = useStateContext();

  useEffect(() => {
    api_client.get('/users')
    .then(({data}) => {
      // debugger;
        setUsers(data.data)
        console.log(data.data);
      })
  },[]);



  return (
    <VStack py={8} px={6} gap={4} >
      <Flex alignItems={'center'} justifyContent={'space-between'} w={'full'} >
        <Text fontSize={12} fontWeight={'bold'} color={'gray.500'} >
          more suggested friends for u
        </Text>
      </Flex>

      {users.map(u => (
        (u.id !== user.id) ? (
          <SuggestedUser key={u.id} u={u}  avatar='https;//bit.ly/' />) : null
      ))}

      <Box fontSize={12} color={'gray.500'} mt={5} alignSelf={'start'} >
        2023 x {' '}
        <Link href='https://github.com/yumenome/' target='_blank' color='blue.500' fontSize={16} style={{textDecoration: 'none'}} >
        夢の_目
        </Link>
      </Box>
    </VStack>
  )
}

export default SuggestedUsers