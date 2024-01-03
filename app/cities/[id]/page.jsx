'use client'
import { useState,useRef, useEffect } from 'react';
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation';
import { Flex,Image as Mantineimg,Text,Paper, Title, Center, ScrollArea } from '@mantine/core';
import {Client} from 'tmi.js'
import {gsap } from 'gsap'
import _ from 'lodash';
import {cityData} from 'app/Cities.js';
import Link from 'next/link';

export default function Game(){
    const router = useRouter();
    const username=useParams()
    const [winner,setWinner]=useState()
    const [chance,setChance]=useState(1)
    const [players,setPlayers]=useState([])
    const [city,setCity]=useState(null)
    const client=new Client({
        channels:[username.id]
    })
    const [name,setName]=useState()
    useEffect(()=>{
        const randomval=_.random(1,50).toString()
        setCity((prev)=>cityData[randomval])
        setName(cityData[randomval].name)
        client.connect()
        return ()=>{
            client.disconnect()
        }
    },[])
    
    const cityRef = useRef(city); // Create a ref for the city state
    const chanceRef=useRef(chance)
    useEffect(() => {
        cityRef.current = city;
        chanceRef.current=chance
      }, [city]);
            client.on('message',(channel,tags,message,self)=>{
                console.log('message is', message)
                console.log('city is',cityRef.current.name)
                if (message.toUpperCase().indexOf(cityRef.current.name.toUpperCase())!==-1){
                    
                    handleUserInput(tags.username)
                    setWinner(tags.username)
                    if (chanceRef.current===5) {
                        gsap.to('.mainimage',{y:'200vh',duration:1})
                        gsap.to('.winnerline',{y:'65vh',duration:1})
                        gsap.to('.gamescreen',{y:'120vh',duration:1,delay:2})
                        gsap.to('.leaderboard',{y:'110vh',duration:1,delay:2})

                    }
                    else{
                    gsap.to('.mainimage',{y:'200vh',duration:1})
                    gsap.to('.winnerline',{y:'65vh',duration:1})
                    const nr=_.random(1,50).toString()
                    _.delay(()=>setCity((prev)=>cityData[nr]),1000)
                    _.delay(()=>{setName(cityData[nr].name)},3500)
                    gsap.to('.mainimage',{y:'94vh',duration:1,delay:3})
                    gsap.to('.winnerline',{y:'0vh',duration:1,delay:2.5})
                    setChance((prev)=>prev+1)
                    }
                    }
            })
            function handleUserInput(inputName) {
                // Check if the user already exists
                setPlayers(prevPlayers => {
                    let existingPlayer = prevPlayers.find(player => player.name === inputName);
            
                    if (existingPlayer) {
                        return prevPlayers.map(player =>player.name === inputName ? {...player, points: player.points + 1} : player
                        );
                    } else {
                        return [...prevPlayers, {name: inputName, points: 1}];
                    }
                });
                }
        
        
           
    const hover = () => {
        gsap.to('.btn',{scale:1.5 , border:'10px solid grey',duration:0.1})
    }
    const hovernt = () => {
        gsap.to('.btn',{border:'0px',scale:1,duration:0.1})
    }   
    
    const start = () => {
        gsap.to('.btn',{y:700,rotate:360,duration:1})
        gsap.to('.scoreboard',{y:'90vh',duration:1})
        gsap.to('.mainimage',{y:'94vh',duration:1})
       
    }

   
    
        return(
            <>
        { <Flex h='100vh' w='100vw' bg='black' mah='100vh' align='center' justify='center' direction='column'  >
            <Flex className='leaderboard' gap='2%' h='80%' w='30%' bg='black' style={{position:"absolute",bottom:'120vh'}} direction={'column'}>
                <Title order={1} style={{color:"#ededed"}}>Leaderboard</Title>
                {[...players].sort((a, b) => b.points - a.points).map((player) => (
                <Flex key={player.name} h='10%' w='100%' bg='#0a0a0a' justify='space-between' align='center' style={{border:'1px solid #252525',borderRadius:'10px'}} >
                 <Title ml='5%' style={{color:"#ededed"}}  order={3}>{player.name}</Title>
                    <Title mr='5%' style={{color:"#ededed"}} order={3}>{player.points}</Title>
                </Flex>
                ))}
                <Flex h='10%' w='100%' bg='black' justify='space-between'>
                
                        <Center onClick={()=>location.reload()}  h='100%' w='48%' bg='#ededed' style={{borderRadius:'15px',cursor:'pointer'}}>
                            <Title order={2}>Restart</Title>
                        </Center>
                    
                    <Link href='/mainpage' style={{height:'100%', width:"48%",textDecoration:'none',backgroundColor:'#ededed',color:'#0a0a0a',borderRadius:'15px'}}>
                    <Center  h='100%' w='100%' bg='#0a0a0a' style={{border:"1px solid #242424",borderRadius:'15px'}} >
                            <Title style={{color:"#ededed"}} order={2}>Main Menu</Title>
                    </Center>
                    </Link>
                </Flex>
                
            </Flex>
            { true && <Paper className='gamescreen' radius='20px' style={{border:'1px solid #252525'}} bg='#0a0a0a' h='90%' w='90%' >
           
            <Flex   h='100%' w='100%' justify='center' align='center' >
                <Center onClick={start} className='btn' onMouseOver={hover} onMouseOut={hovernt}  style={{borderRadius:'10px',cursor:'pointer'}} h='10%' bg='#ededed' w='20%'>
                    <Text size='xl'>Start game</Text>
                </Center>
            </Flex>
                {city!== null &&<Flex className='game' h='100%' w='100%'    align='center' justify='space-evenly' >
                    <Flex direction={'column'} className='scoreboard' align={'center'} style={{border:'1px solid #252525',position:'relative',bottom:'180vh',borderRadius:"20px"}} bg='black' h='85%' w='30%'>
                        <Flex h={'10%'} w={'80%'}  justify={'center'} align={'center'} style={{borderBottom:"1px solid white"}} >
                            <Title style={{color:"white"}}>Leaderboard</Title>
                        </Flex>
                        <ScrollArea  mt='lg' mb='lg'  h='90%' w='80%' style={{textAlign:"start",justifyContent:"space-around"}}  direction='column' align='self-start'    justify='space-evenly' >
                            <Flex h='100%' w='100%'   direction='column'align={'center'}  >
                                {players.sort((a, b) => b.points - a.points).map((player) => (
                                    <Flex key={player.name} mt={'2%'} direction={'row'} justify={'space-between'} h={'100%'} w={'80%'} >
                                        <Title  style={{color:"#ededed"}} order={1}>
                                            {player.name}
                                        </Title>
                                        <Title style={{color:"#ededed"}} > {player.points}</Title>
                                    </Flex>
                                    
                                    ))}                            
                            </Flex>
                        </ScrollArea>
                    </Flex>
                <Flex  h='80%' w='50%' justify='center' align='center' direction='column'  >
                    <Paper  className='mainimage' style={{position:'relative',bottom:'180vh'}} >
                        <Mantineimg  alt='' radius='lg' src={city.image} ></Mantineimg>
                    </Paper>
                    <Title className='winnerline' style={{color:'#ededed',position:'relative',bottom:'190vh'}}   order={1}>{winner} Guessed it right! </Title>
                    <Title className='winnerline' style={{color:'#ededed',position:'relative',bottom:'190vh'}}order={2}>It is {name} </Title>
                </Flex>
            
                </Flex>}
                    
            </Paper>}
        </Flex>}
        </>
    )
}