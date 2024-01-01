import { Avatar, AvatarGroup, Button, Flex, Text, VStack, useDisclosure } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useStateContext } from '../../ContextProvider';
import api_client from '../../api_/axios_client';
import ProfileForm from './ProfileForm';

const ProfileHeader = ({user, posts}) => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex gap={{base: 4, sm: 10}} py={10} direction={{base: 'column', sm: 'row'}} >
      <AvatarGroup size={{base: 'xl', md:'2xl'}} justifySelf={'center'} alignSelf={'flex-start'} mx={'auto'} >
        <Avatar name={user.name} src='https;//bit.ly/dde' alt='pp' />
      </AvatarGroup>
      <VStack alignItems={'start'} gap={2} mx={'auto'} flex={1} >
        <Flex gap={4} direction={{base: 'column', sm: 'row'}} justifyContent={{base: 'center', md: 'flex-start'}} alignItems={'center'} w={'full'} >
          <Text fontSize={{base: 'sm', md: 'lg'}} >{user.name}</Text>
        </Flex>

        <Flex alignItems={'center'} gap={{base: 2,md: 4}} >
          <Text fontSize={{base: 'xs', md: 'sm'}} >
            <Text as='span' fontWeight={'bold'} mr={1} >{user.posts}</Text>
            posts
          </Text>
          <Text fontSize={{base: 'xs', md: 'sm'}} >
            <Text as='span' fontWeight={'bold'} mr={1} >{user.followers}</Text>
            followers
          </Text>
          <Text fontSize={{base: 'xs', md: 'sm'}} >
            <Text as='span' fontWeight={'bold'} mr={1} >{user.followings}</Text>
            following
          </Text>
        </Flex>
        <Flex alignItems={'center'} gap={4} >
          <Text fontSize={'sm'} fontWeight={'bold'} >
            {user.title}
          </Text>
        </Flex>
        <Text fontSize={{base: 'xs', md: 'sm'}} > {user.bio} </Text>
      </VStack>
      <Button bg={'white'} color={'black'} _hover={{background: '#333', color: '#fff'}} onClick={onOpen} >edit infos</Button>
      <ProfileForm onClose={onClose} isOpen={isOpen} user={user} />
    </Flex>
  )
}

export default ProfileHeader