import { SignIn } from "@clerk/nextjs";
import { Box } from "@mui/material";

export default function SignInPage(){
    return(
        <Box component={'div'} sx={{display:"flex", alignItems:"center",justifyContent:"center",height:"100vh"}}>

        <SignIn></SignIn>
        </Box>
    )
}