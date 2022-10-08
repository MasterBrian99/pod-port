import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
    Box,
  } from '@mantine/core';
import { useNavigate } from 'react-router-dom';


  export default function LoginScreen() {
    const navigate=useNavigate()

  function connectToDashboard() {
    navigate('dashboard')
    
}

    return (
     <Box  sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        height:'100vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
        
      })}>
         <Container size={420} >
        <Paper withBorder shadow="md" px={60} py={20}  radius="md">
          <Button fullWidth mt="xl" onClick={()=>connectToDashboard()}>
            Sign in
          </Button>
        </Paper>
      </Container>
     </Box>
    );
  }