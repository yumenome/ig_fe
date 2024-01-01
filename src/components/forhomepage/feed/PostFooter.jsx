import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../../assets/constants';
import CommentForm from './CommnetForm'
import { useStateContext } from '../../../ContextProvider';
import api_client from '../../../api_/axios_client';

const PostFooter = ({user, details, post, onOpen, comments }) => {

    const[likes, setLikes] = useState(post.likes);
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        console.log(post.they_liked);
        setLiked(post.they_liked);
    },[])
    // console.log(liked)

    
    const handleLike = (e) =>{
        e.preventDefault();
        if(liked !== 1){

            setLikes( likes + 1);
            setLiked (1);
            api_client.post(`/posts/${post.id}/like`)
            .then(({data}) =>{
                console.log(data);
                })
                
            }else{
                setLikes( likes -1);
            setLiked (0);
            api_client.post(`/posts/${post.id}/unlike`)
                .then(({data}) =>{
                    console.log(data);
                })

        }

    };
    

  return (
    <div>
        <Flex alignItems={'center'} gap={4} w={'full'} mb={2} mt={4} >
            <Box onClick={handleLike} cursor={'pointer'} fontSize={18} >
                <Flex alignItems={'center'}>
            <Text key={post.id} fontWeight={600} fontSize={'md'} mr={2} >
                 {likes}
            </Text>
               {liked === 1  ? <UnlikeLogo /> :  <NotificationsLogo />}
                </Flex>
            </Box>

        </Flex>

        <Flex justifyContent={'space-between'} alignItems={'center'} mb={3}>
            <Text fontSize='sm' color={'gray'}  >
                {comments} comments
            </Text>
            <Button onClick={onOpen} size={'xs'} > view comments </Button>

        </Flex>
        <CommentForm  post={post}/>
    </div>
  )
}

export default PostFooter