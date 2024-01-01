import { Avatar, Box, Flex, Link, Tooltip, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { AiFillHome } from "react-icons/ai";
import {  InstagramLogo, InstagramMobileLogo, SearchLogo } from '../assets/constants'
import Logout from './Logout';
import api_client from '../api_/axios_client';
import SearchBox from './SearchBox';

const Sidebar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()


    const [user, setUser ] = useState({});
    const profileLink = `/${user.id}`;

    useEffect(() => {
        api_client.get('/user')
        .then(({data}) => {
            setUser(data)
          })
    
      },[])


  return (
    <Box
     height={'100vh'}
     borderRight={'1px solid'}
     borderColor={'whiteAlpha.300'}
     py={5}
     position={'sticky'}
     top={0}
     left={0}
     px={{base: 2, md: 4}}
    >
        <Flex direction={'column'} gap={10} w='full' height={'full'} 
        alignItems={{base: 'center', md: 'flex-start'}}>
            <Link to={'/'} as={RouterLink} pl={2} display={{base: 'none', md: 'block'}} cursor='pointer' >
                <InstagramLogo />
            </Link>
            <Link to={'/'} as={RouterLink} display={{base: 'block', md: 'none'}} cursor='pointer' borderRadius={6} _hover={{bg: 'whiteAlpha.200'}} w={10}  marginLeft={{base: '10px'}}>
                <InstagramMobileLogo />
            </Link>

            <Flex direction={'column'} gap={5} cursor={'pointer'}>
                    <Tooltip  hasArrow label='home' placement='right' ml={1} openDelay={100} display={{base: 'block', md: 'none'}} >
                        <Link display={'flex'} to='' as={RouterLink} alignItems={'center'} gap={4} _hover={{bg: 'whiteAlpha.400'}} borderRadius={6} p={2}  w={'full'} >
                            <AiFillHome size={25}/>
                            <Box display={{base: 'none', md: 'block'}}>
                                home
                            </Box>
                        </Link>
                    </Tooltip>
                    <Tooltip  hasArrow label='profile' placement='right' ml={1} openDelay={100} display={{base: 'block', md: 'none'}} >
                        <Link display={'flex'} to={profileLink} as={RouterLink} alignItems={'center'} gap={4} _hover={{bg: 'whiteAlpha.400'}} borderRadius={6} p={2}  w={'full'} >
                        <Avatar style={{width: '24px', height: '24px'}} name={user.name} src='https;//bit.ly/dde' />
                            <Box display={{base: 'none', md: 'block'}}>
                                profile
                            </Box>
                        </Link>
                    </Tooltip>
                    <Tooltip
                        hasArrow
                        label={'logout'}
                        placement='right'
                        ml={1}
                        openDelay={300}
                        display={{base: 'block', md: 'none'}}
                    >
                        <Link display={'flex'} to={'/auth'} as={RouterLink} alignItems={'center'} gap={4} _hover={{bg: 'whiteAlpha.400'}} borderRadius={6} p={2} w={{base: 10, md: 'full'}} mt={'auto'}  >
                            <Logout />
                        </Link>
                    </Tooltip>
                    
            </Flex>
        </Flex>
    </Box>
  )
}

export default Sidebar