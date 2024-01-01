import { Box, Grid, Skeleton, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import FeedPost from '../forhomepage/feed/FeedPost';

const ProfilePosts = ({posts}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() =>{
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  },[]);

  return (
    <Grid  gap={1} columnGap={1} >
      {isLoading && [0,1,2,3,4,5] .map((item,idx) =>(
        <VStack key={idx} alignItems={'flex-start'} gap={4} >
          <Skeleton w={'full'} >
            <Box h={'300px'} >wrapped</Box>
          </Skeleton>
        </VStack>
      ))}

      {!isLoading && (
        <>
        {(posts.length === 0) && <Text color={'#fff'} textAlign={'center'}>no posts yet!</Text>}
        {posts.map(post => (
          <FeedPost  key={post.id} post={post} img={post.image} display={'block'} />
        ))}
        </>
       )} 
    </Grid>
  )
}

export default ProfilePosts