import React, { useEffect, useState } from 'react'
import FeedPost from './FeedPost'
import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react'
import api_client from '../../../api_/axios_client';
import { useStateContext } from '../../../ContextProvider';

const FeedPosts = ({user}) => {
  const [loading, setLoading] = useState(true);
  const[posts, setPosts] = useState([]);


  useEffect(() => {
    api_client.get('/posts')
    .then(({data}) => {
      // debugger;
      setPosts(data.data)
      console.log(data.data);
      
    })

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  },[]) //posts add this
    



  return (
    <Container maxW={'container.sm'} py={10} px={3} >

    {loading && 
      [0, 1, 2, 3].map((idx) => (
        <VStack key={idx} gap={4} alignItems={'flex-start'} mb={10} >
            <Flex gap={2} >
              <SkeletonCircle size={10} />
              <VStack gap={2} alignItems={'flex-start'}>
                <Skeleton height={'10px'} w={'200px'} />
                <Skeleton height={'10px'} w={'150px'} />
              </VStack>
            </Flex>
            <Skeleton w={{base: '250px', md: 'full'}}>
              <Box h={{base: '240px', md: '500px'}}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        )
        )
      }

    {!loading && (
      <>
        {posts.map((post) =>(
              <FeedPost user={user}  key={post.id}  post={post} img={post.image} />              
          )
        )}
      </>
    )}
    </Container>
  )
}

export default FeedPosts