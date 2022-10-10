import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashboardScreen from './screens/DashboardScreen/DashboardScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';

function App() {
  return <RouterProvider router={router} />;
}

export default App;

const router = createBrowserRouter([
  {
    path: '',
    element: <HomeScreen />,
  },
  {
    path: 'game',
    element: <DashboardScreen />,
  },
]);
