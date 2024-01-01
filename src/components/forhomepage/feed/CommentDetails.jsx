import { Box, Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import api_client from '../../../api_/axios_client';
import moment from 'moment';
import { DeleteIcon } from '@chakra-ui/icons';

const CommentDetails = ({isOpen, onClose, post, comments}) => {


  const toDelete = (id) => {

    api_client.delete(`/comments/${id}`)
      .then(({data}) => {
        console.log(data);
        window.location.reload(false);
      })
  }
      
        return (
            <Modal isCentered  blockScrollOnMount={false}  isOpen={isOpen} onClose={onClose} size={{ base: "xl", md: "2xl" }}>
              <ModalOverlay />
              <ModalContent>
              <ModalHeader  borderBottom={'1px solid'} borderColor={'whiteAlpha.800'} > {post.caption} </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                {comments.map(comment => (
                    <Flex key={comment.id} flexDirection={'column'}  justifyContent={'start'} borderBottom={'1px solid'} borderColor={'whiteAlpha.400'}>
                        <Text fontSize={'md'} color={'whiteAlpha.900'} mb='1rem'> {comment.user_name}</Text>
                        <Flex color={'whiteAlpha.700'} justifyContent={'space-between'}>
                            <Text mb={2}>{comment.comment}</Text>
                            <Flex alignItems={'center'}>
                                <Text fontSize={'xs'} >
                                    {moment(comment.created_at).fromNow()}
                                </Text> 
                                <DeleteIcon _hover={{cursor: 'pointer'}} ml={1} onClick={() => {toDelete(comment.id)}}/>  
                            </Flex>
                        </Flex>
                    </Flex>
                ))}
                </ModalBody>
      
              </ModalContent>
            </Modal>
  )
}

export default CommentDetails