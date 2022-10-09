import { MantineProvider } from '@mantine/core';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import MainScreen from './screens/MainScreen/MainScreen';
import MainLayout from './layout/MainLayout/MainLayout';
import { theme } from './theme/theme';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <HomeScreen />,
      },
      {
        path: 'game',
        element: <MainScreen />,
      },
    ],
  },
]);
