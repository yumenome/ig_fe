import { Box, Button, Flex, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { CommentLogo } from '../../../assets/constants'
import api_client from '../../../api_/axios_client';

const Commnet = ({post}) => {
    const cmtRef = useRef();

    const toCommment = () =>{
        const inputs = {
            comment: cmtRef.current.value,
        }
        
        api_client.post(`/${post.id}/comments`, inputs)
            .then(({data}) => {
                console.log(data)
                window.location.reload(false);
            })
            .catch(err => {console.log(err)});

    }


  return (
    <InputGroup>
                <Flex alignItems={'center'} gap={2} justifyContent={'space-between'} w={'full'} my={1} >
                    <Input variant={'filled'} ref={cmtRef} placeholder="comment..." fontSize={14} pr={9} />
                    <InputRightElement>
                        <Button onClick={toCommment} cursor={'pointer'} textAlign={'center'}   bg={'transparent'} mt={2} >
                            +C
                        </Button>
                    </InputRightElement>
                </Flex>
            </InputGroup>
  )
}

export default Commnet