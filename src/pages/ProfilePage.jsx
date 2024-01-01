import { Container, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ProfileHeader from '../components/profile/ProfileHeader'
import ProfilePosts from '../components/profile/ProfilePosts'
import { useStateContext } from '../ContextProvider'
import api_client from '../api_/axios_client'
import { useParams } from 'react-router-dom'

const ProfilePage = () => {

  const { setUser, user } = useStateContext();

  const [ posts, setPosts ] = useState([]);
  const { id } = useParams()
  
  useEffect(() => {
    api_client.get(`/users/${id}`)
      .then(({data}) => {
        console.log(data.data);  
        setPosts(data.data.Posts);
        setUser(data.data);
      })
  },[id])

  return (
    <Container maxW={'container.lg'} py={5} >
        <Flex py={10} px={4} pl={{base: 4, md: 10}} w={'full'} mx={'auto'} flexDirection={'column'} >
            <ProfileHeader user={user} posts={posts} />
        </Flex>
        <Flex px={{base: 2, sm: 4}} maxW={'full'} mx={'auto'} borderTop={'1px solid'} borderColor={'whiteAlpha.300'} direction={'column'} >
            <ProfilePosts posts={posts}/>
        </Flex>
    </Container>
  )
}

export default ProfilePage