import { useEffect, useState } from 'react'
import './App.css'
import { Greet,NewTestAA, NiceOne } from '../wailsjs/go/main/App'
import { MantineProvider, Text } from '@mantine/core'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen/HomeScreen'
import MainScreen from './screens/MainScreen/MainScreen'
import MainLayout from './layout/MainLayout/MainLayout'

function App() {
  const [resultText, setResultText] = useState(
    'Please enter your name below 👇'
  )
  const [name, setName] = useState('')
  const updateName = (e: any) => setName(e.target.value)
  const updateResultText = (result: string) => setResultText(result)

  function greet() {
    console.log('Calling');
      NiceOne().then(res=>{
        NewTestAA("").then(res=>{
          console.log(res);
          
        })
      })
    
   
    Greet(name).then(updateResultText)
  }
  greet()

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <RouterProvider router={router} />
    </MantineProvider>
  )
}

export default App

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children:[
      {
        path: '',
        element: <HomeScreen />,
      },
      {
        path: 'game',
        element: <MainScreen />,
      },
    ]
  },
])
