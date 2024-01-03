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
        <Flex style={{border:'1px solid #252525',borderRadius:'20px'}} direction='column' h='40vh' w='20vw' bg='#0a0a0a' justify='center' align='center'>
          <Flex  justify={'space-around'} align='center' h='100%' w='100%' direction='column' gap='10%' >
            <Title style={{color:"white"}}>Sign In</Title>
            <Link href='/sign-in' style={{color:'white',textDecoration:'none',display:'flex',justifyItems:"center",alignItems:"center",height:'15%',width:'70%'}} >
              <Flex h='100%' color="red" w='100%' bg='#4465c8' justify='center' align='center' style={{borderRadius:'10px'}}>
                <Text size="xl" >Sign In</Text>
              </Flex>
            </Link>
            
          </Flex>
        </Flex>
      </Center>
      }
      
    </>
  );
}
