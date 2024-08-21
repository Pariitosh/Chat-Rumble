'use client'
import Link from "next/link";
import { Avatar, Button } from "@mui/material";
import { BackgroundImage, Flex,Loader,Paper, Title } from "@mantine/core";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { PicCenterOutlined, PictureOutlined } from "@ant-design/icons";
import { useHover } from '@mantine/hooks';
import styles from './mainpage.module.css'
import Image from "next/image";
import img1 from '../../public/pic1.jpg'
export default function MainPage(){
  const user=useUser()
  
  
    return (
      <>
      {user.isSignedIn===false && <Flex h='100%' w='100%' bg='black' justify='center' align='center'><Loader type="bars" size='xl' color="white"></Loader></Flex>}
      {user.isSignedIn===true && 
      <Flex  h='100vh' w='100vw' maw={'100vw'} bg='black' justify='center' align='center' >

          <Link  className={styles.test}   href={`/cities/${user.user.username}`} style={{height:'100%',backgroundImage:`url(pic1.jpg)`,backgroundSize:"cover", width:'24%',textDecoration:'none',transition:'0.2s'}}>
            <Flex direction={'column'}   h='100%' w='100%' justify='center' align='center' style={{borderRadius:'20px'}}>
              <Flex  h={'50%'} w={'90%'}  align={'flex-end'} gap={'5%'} justify={'center'}>
                <Title style={{color:"white",display:"absolute"}}>Cities</Title>
              </Flex>
              <Flex  h={'50%'} w={'90%'}  >
              </Flex>
            </Flex>
          </Link>

          <Link  className={styles.test}   href={`/Landmarks/${user.user.username}`} style={{backgroundImage:'url(pic2.jpg)',backgroundSize:"cover",backgroundPosition:"center",height:'100%', width:'24%',textDecoration:'none',transition:'0.2s'}}>
            <Flex direction={'column'}   h='100%' w='100%' justify='center' align='center' style={{borderRadius:'20px'}}>
              <Flex h={'50%'} w={'90%'}   align={'flex-end'} gap={'5%'} justify={'center'}>
                
                <Title style={{color:"white",fontSize:'40px'}}>Famous Landmarks</Title>
              </Flex>
              <Flex  h={'50%'} w={'90%'}  >
              </Flex>
            </Flex>
          </Link>

          <Link  className={styles.test}   href={`/People/${user.user.username}`} style={{backgroundImage:'url(https://i.pinimg.com/236x/39/9d/89/399d8983311443d06450bb12af692459.jpg)',backgroundSize:"cover",backgroundPosition:"center",height:'100%', width:'24%',textDecoration:'none',transition:'0.2s'}}>
            <Flex direction={'column'}   h='100%' w='100%' justify='center' align='center' style={{borderRadius:'20px'}}>
              <Flex h={'50%'} w={'90%'}   align={'flex-end'} gap={'5%'} justify={'center'}>
                
                <Title style={{color:"white"}}>Famous People</Title>
              </Flex>
              <Flex  h={'50%'} w={'90%'}  >
              </Flex>
            </Flex>
          </Link>

          <Link  className={styles.test}   href={`/Logos/${user.user.username}`} style={{backgroundImage:'url(pic4.jpg)',backgroundSize:"cover",backgroundPosition:"center",height:'100%', width:'24%',textDecoration:'none',transition:'0.2s'}}>
            <Flex direction={'column'}   h='100%' w='100%' justify='center' align='center' style={{borderRadius:'20px'}}>
              <Flex h={'50%'} w={'90%'}   align={'flex-end'} gap={'5%'} justify={'center'}>
                
                <Title style={{color:"white"}}>Logos</Title>
              </Flex>
              <Flex  h={'50%'} w={'90%'}  >
              </Flex>
            </Flex>
          </Link>
          
          
      </Flex>}
      </>
      
    );
  }
  