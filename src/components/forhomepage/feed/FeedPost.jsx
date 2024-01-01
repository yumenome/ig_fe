import React, { useEffect, useState } from 'react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import { Box, Container, Flex, Image, Text, useDisclosure } from '@chakra-ui/react'
import moment from 'moment'
import CommentDetails from './CommentDetails'
import api_client from '../../../api_/axios_client'
import { DeleteIcon } from '@chakra-ui/icons'

const FeedPost = ({img, user, post, display}) => {

  const ago = moment(post.created_at).fromNow();

  const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <Container border={'2px solid'} p={3} borderRadius={3} my={3} borderColor={'whiteAlpha.200'} bg={'whiteAlpha.200'}  >
      <PostHeader ago={ago} post={post} display={display} />
         <Flex justifyContent={'space-between'} >
          <Text as='span' mt={2} fontSize={{base: 12, md: 15}} fontWeight={600} >
                _{post.caption}
            </Text>
         </Flex>
        {img && 
          <Box my={2} borderRadius={5} overflow={'hidden'} >
            <Image src={ "http://localhost:8000/storage/images/" +img }  />
          </Box>
        }
        
      <PostFooter user={user}  post={post} onOpen={onOpen} comments={post.comments.length} />
      <CommentDetails onClose={onClose} isOpen={isOpen} post={post} comments={post.comments} />
    </Container>
  )
}

export default FeedPost