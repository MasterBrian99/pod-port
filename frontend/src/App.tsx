import { useEffect, useState } from 'react'
import { Greet, NewTestAA, NiceOne } from '../wailsjs/go/main/App'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import DashboardScreen from './screens/DashboardScreen/DashboardScreen'

function App() {
  const [resultText, setResultText] = useState(
    'Please enter your name below 👇'
  )
  const [name, setName] = useState('')
  const updateName = (e: any) => setName(e.target.value)
  const updateResultText = (result: string) => setResultText(result)

  function greet() {
    console.log('Calling')
    NiceOne().then((res) => {
      NewTestAA('').then((res) => {
        console.log(res)
      })
    })

    Greet(name).then(updateResultText)
  }
  greet()

  return <RouterProvider router={router} />
}

export default App

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardScreen />,
  },
])
