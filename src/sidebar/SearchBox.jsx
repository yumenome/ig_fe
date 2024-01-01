import { Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/react'
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { useStateContext } from '../ContextProvider';


const SearchBox = ({isOpen, onClose}) => {

    const { posts, setPosts } = useStateContext();

    const[input, setInput] = useState('');

    const toGetValue = (e) =>{
        // if(e.target.value.length === 0) {
        //   window.location.reload(false)
        // }else{
          setInput(e.target.value)
        console.log(e.target.value);
    
        // }
      }
    
      const toSubmit = (e) => {
        if(e.key === 'Enter'){
            console.log('ere')
          const searched = posts.filter(post => (post.caption.toLowerCase().includes(input.toLowerCase())))
          setPosts(searched)
        }
      }



  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered >
        <ModalOverlay />
        <ModalContent  border={'2px solid'} p={3} borderRadius={3} my={3} borderColor={'whiteAlpha.300'}>
          <ModalBody display={'flex'} flexDirection={'column'}  >
            <InputGroup>
                <InputLeftElement cursor={'pointer'}>
                <CiSearch color='gray.100' style={{fontSize : '20px'}}/>
                </InputLeftElement>
                <Input type='text' id='searched_input' onChange={toGetValue} onKeyDown={toSubmit} placeholder='to search...' w={[90, 250, 350]}/>
            </InputGroup>
          </ModalBody>
        </ModalContent>
      </Modal>
  )
}

export default SearchBox