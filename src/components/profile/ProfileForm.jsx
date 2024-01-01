import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea } from '@chakra-ui/react'
import React, { useRef } from 'react'
import api_client from '../../api_/axios_client';

const ProfileForm = ({isOpen, onClose, user}) => {
       
    const nameRef = useRef();
    const titleRef = useRef();
    const bioRef = useRef();


      
    const toEdit = (e) =>{
        e.preventDefault();
        const inputs = 
            {
                name: nameRef.current.value,
                title: titleRef.current.value,
                bio: bioRef.current.value,
            }
        

        console.log(inputs);

        api_client.patch(`/users/${user.id}`, inputs)
            .then(({data}) => {
                console.log(data);
                window.location.reload(false);
            })
    }

        return (
            <Modal isOpen={isOpen} onClose={onClose} size={{ base: "xl", md: "2xl" }} >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader textAlign={'center'}> {user.name} </ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <form onSubmit={toEdit}>
                        <FormControl>
                            <FormLabel >NAME</FormLabel>
                            <Input ref={nameRef} defaultValue={user.name} />
                            <FormLabel mt={2} > AS?</FormLabel>
                            <Input ref={titleRef} defaultValue={user.title}/>
                            <FormLabel  mt={2} >BIO</FormLabel>
                            <Textarea ref={bioRef} h={'200px'} defaultValue={user.bio} />
                        <Button colorScheme='blue' mr={3} mt={2} type='submit' > Save </Button>
                        </FormControl>
                    </form>

                </ModalBody>
      
              </ModalContent>
            </Modal>
        )
      
}

export default ProfileForm