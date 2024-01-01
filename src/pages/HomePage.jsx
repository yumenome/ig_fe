import React, { useEffect } from 'react'
import SuggestedUsers from '../components/forhomepage/suggested/SuggestedUsers'
import { Navigate } from 'react-router-dom'
import { useStateContext } from '../ContextProvider'
import api_client from '../api_/axios_client'
import CreatePost from '../components/forhomepage/feed/CreatePost'
import { Box, Container, Flex, useDisclosure } from '@chakra-ui/react'
import HomeHeader from '../components/forhomepage/feed/HomeHeader'
import FeedPosts from '../components/forhomepage/feed/FeedPosts'

const HomePage = () => {

  const {user, setUser, token } = useStateContext();
  if(!token){
      return <Navigate to='/auth' />
  }

  useEffect(() => {
    api_client.get('/user')
    .then(({data}) => {
        setUser(data)
        // console.log(data)
      })

  },[])

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Container maxW={'container.lg'}>
      <Flex gap={20} >
        <Box flex={2} py={7} >
        <HomeHeader onOpen={onOpen} name={user.name}/>
          <FeedPosts user={user} />
        </Box>
        <Box flex={3} mr={20} display={{base: 'none', md: 'block'}} maxW={'300px'}>
          <SuggestedUsers onOpen={onOpen} />
        </Box>
        <CreatePost isOpen={isOpen} onClose={onClose} />
      </Flex>
    </Container>
  )
}

export default HomePage