import { SignUp } from "@clerk/nextjs";
import { Box, Container } from "@mui/material";

export default function SignupPage(){
    return(
        <div>
        <Box component={'div'} sx={{display:"flex", alignItems:"center",justifyContent:"center",height:"100vh"}}>
        <SignUp></SignUp>
        </Box>
        </div>
    )
}