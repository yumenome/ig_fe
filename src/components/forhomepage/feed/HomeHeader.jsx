import { Avatar, Box, Button, Flex, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { CreatePostLogo } from '../../../assets/constants'

const HomeHeader = ({name, onOpen={onOpen}}) => {
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'} >
        <Flex  alignItems={'center'} gap={2} >
            <Avatar name={name} size={'md'} src='https;//bit.ly/' />
            <Text fontSize={12} fontWeight={'bold'} >
                {name}
            </Text>
        </Flex>

        <Button py={5} color={'white'} onClick={onOpen} size={'xs'} display={'flex'} alignItems={'center'} >
            <Text mr={1} fontSize={'md'} >create</Text> <CreatePostLogo  />
        </Button>

    </Flex>
  )
}

export default HomeHeader