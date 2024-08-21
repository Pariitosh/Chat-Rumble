'use client'
import Link from "next/link";
import { Center, Flex, Loader, Text,Title } from "@mantine/core";
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/clerk-react';
import { useEffect } from "react";

export default function Home() {
  const user=useUser()
  const router=useRouter()
  useEffect(()=>{
    if (user.isSignedIn) {
      router.push('/mainpage');
    }
  })
  
  return (
    <>
      {user===null && <Flex h='100%' w='100%' bg='black' justify='center' align='center'><Loader type="bars" size='xl' color="white"></Loader></Flex>}
      { !user.isSignedIn &&
        <Center h='100vh' w='100vw' bg='black'>
        <Flex pl={'20px'} style={{border:'1px solid #252525',borderRadius:'20px'}} direction='column' h='160px' w='20vw' bg='#0a0a0a' justify='center' align='center'>
          <Flex pt={'20px'}  h='100%' w='100%' direction='column' gap='10px' >
            <Title style={{color:"white"}}>Sign In</Title>
            <Link href='/sign-in'  style={{color:'white',textDecoration:'none',display:'flex',height:'40px',width:'70%',marginTop:"20px"}} >
              <Flex h='100%' color="red" w='100%' bg='white' justify='center' align='center' style={{borderRadius:'10px'}}>
                <Text size="xl" color={'black'} >Sign In</Text>
              </Flex>
            </Link>
            
          </Flex>
        </Flex>
      </Center>
      }
      
    </>
  );
}
