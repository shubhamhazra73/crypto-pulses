import { Button, HStack, background } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Header = () => {
  return (
  <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"} id='imp'>
<Button variant={"unstyled"} color={"white"} className='styleNavButtons' >
    <Link to={"/"}>Home</Link>
</Button>

<Button variant={"unstyled"} color={"white"} className='styleNavButtons' >
    <Link to={"/exchanges"}>Exchanges</Link>
</Button>

<Button variant={"unstyled"} color={"white"} className='styleNavButtons' >
    <Link to={{pathname :"/coins" ,state : { background : 'pink'}}}  >Coins</Link>
</Button>
<Button variant={"unstyled"} color={"white"} className='styleNavButtons' >
    <HashLink to={"/#about"}>About Us</HashLink>
</Button>
<Button variant={"unstyled"} color={"white"} className='styleNavButtons' >
    <HashLink to={"/#reach"}>Reach Us</HashLink>
</Button>

  </HStack>
  
  )
}

export default Header
