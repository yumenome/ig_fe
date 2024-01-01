import { Avatar, Box, Button, Flex, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import api_client from '../../../api_/axios_client';
import { Link, Navigate, useNavigate } from 'react-router-dom';


const SuggestedUser = ({ avatar, u}) => {

  const [ followers, setFollowers] = useState(0)
  const [followed, setFollowed] = useState(false)


  useEffect(() => {
    setFollowers(u.followers)
    setFollowed(u.is_followed)
  },[])

  const navigate = useNavigate();


  // debugger;
  const tofollow = () => {
    if(!followed) {
      setFollowed(true);
      api_client.post(`users/${u.id}/follow`)
      .then(({data}) => { 
        console.log(data); 
        setFollowers( data);
      })
      .catch(err => { console.log(err)});
    }else{
      setFollowed(false);
      setFollowers( followers - 1);
      api_client.post(`users/${u.id}/unfollow`)
        .then(({data}) => {
          console.log(data);
        })
        .catch(err => { console.log(err)});
    }
  
  }
  
  const toPage = (id) =>{
    console.log(id);
    navigate(`/${id}`);
  }


  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'} >
      <Flex alignItems={'center'} gap={2} onClick={ () => {toPage(u.id)}} >
        <Avatar src={avatar} name={u.name} size={'md'} />
        <VStack spacing={2} alignItems={'flex-start'} >
          <Box fontSize={12} fontWeight={'bold'} >
            {u.name}
          </Box>
          <Box fontSize={12} color={'gray.500'} >
            {followers} followers
          </Box>
        </VStack>
      </Flex>
      <Button fontSize={14} bg={'transparent'} p={0} h={'max-content'} fontWeight={'medium'} color={'blue.400'} cursor={'pointer'} _hover={{ color: 'white'}} onClick={tofollow} >
        {followed ? 'unfollow' : 'follow'}
      </Button>

    </Flex>
  )
}

export default SuggestedUser







// is_followed ?  sub
// followings  ? sub

// get_followed ? obj
// followers ? obj 


// i_liked ? sub /auth
// they_liked ? obj
// likes ? obj