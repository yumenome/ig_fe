import { Avatar, Box, Container, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useStateContext } from '../../../ContextProvider'
import { DeleteIcon } from '@chakra-ui/icons'
import api_client from '../../../api_/axios_client'

const PostHeader = ({ post, ago, display }) => {

  const toDelete = (id) =>{
    api_client.delete(`/posts/${id}`)
      .then(({data}) => {console.log(data)});
      window.location.reload(false);
}

  return (
    <Container>
    <Flex justifyContent={'space-between'} alignItems={"center"} w={"full"} px={0}>
        <Flex alignItems={'center'} gap={2} justifyContent={'space-between'} >
            <Avatar src='https;//bit.ly/' name={post.user_name} alt='user pp' size={'sm'} />
            <Flex fontSize={{base: 12, md: 15}}  gap={2}  alignItems={'center'}>
                {post.user_name}
            </Flex>
        </Flex>
          <Box color={'gay.500'} fontSize={{base: '10px', md: '12px'}}> 
          {ago} 
          {display ? <DeleteIcon ml={1}  _hover={{cursor: 'pointer'}} onClick={() => {toDelete(post.id)}} /> : null}
          </Box>

    </Flex >
      <Box borderBottom={'1px solid'} borderColor={'whiteAlpha.300'} w={'full'} mt={'1'} />
    </Container>
  )
}

export default PostHeader