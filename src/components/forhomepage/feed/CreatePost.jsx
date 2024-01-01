import { Avatar, Box, Button, Container, Flex, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Textarea, VStack, background, useDisclosure } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import api_client from '../../../api_/axios_client';
import axios from 'axios';

const CreatePost = ({isOpen, onClose}) => {

    const captionRef = useRef();
    const [image, setImage] = useState('');

    const uploadImg = (e) =>{
      // console.log(e.target.files[0]);
      setImage(e.target.files[0]);

    }

    const toSubmit = (e) => {
      e.preventDefault();

      const data = new FormData();
      const cap = captionRef.current.value;
      data.append('caption', cap);
      data.append('image', image);
      // for (var key of data.entries()) {
        // console.log(key[0] + ', ' + key[1]);
    // }


      api_client.post('posts', data)
        .then(({data}) => {
          // console.log(data.image);
          window.location.reload(false);
        })
        .catch(err => {
          // console.error(err);
        });
      
    }

  return (
      <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
        <ModalOverlay />
        <ModalContent  border={'2px solid'} p={3} borderRadius={3} my={3} borderColor={'whiteAlpha.300'} bg={'black'}>
          <ModalHeader>let's create new post</ModalHeader>
          <ModalCloseButton />
          <ModalBody display={'flex'} flexDirection={'column'}  >
          <form  onSubmit={toSubmit} encType="multipart/form-data" >
                    <Textarea ref={captionRef}  placeholder='caption' type='text' bg={'whiteAlpha.200'}/> 
                    <Input type='file' onChange={uploadImg} className='upload' display={'none'} />
                    <Flex justifyContent={'space-between'}>
                      <Button size={'sm'} mt={3} onClick={() => document.querySelector('.upload').click()} bg={'whiteAlpha.300'} > with photo ? </Button>
                      <Button bg={'white'} _hover={{color: 'white',background: 'black'}} color={'black'} mt={3} type='submit' size={'sm'} mr={3} onClick={onClose}>post</Button>
                    </Flex>
                    
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
  )
}

export default CreatePost