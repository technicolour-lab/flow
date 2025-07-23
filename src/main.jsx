import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom'
import './index.css'

// Pages
import Editor from './pages/Editor.jsx';
import Workspace from './pages/Workspace.jsx';
import Landing from './pages/Landing.jsx';
import View from './pages/View.jsx';
import AllFlows from './pages/AllFlows.jsx';
import GroupFlows from './pages/GroupFlows.jsx';

// Error page
import ErrorPage from './pages/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    index: true,
    loader: () => redirect('/workspace/all'),
    errorElement: <ErrorPage />
  },
  {
    path: "/landing",
    element: <Landing />,
    errorElement: <ErrorPage />
  },
  {
    path: "/workspace",
    element: <Workspace />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "all",
        element: <AllFlows />,
        errorElement: <ErrorPage />,
      },
      {
        path: "group/:groupId",
        element: <GroupFlows />,
        errorElement: <ErrorPage />,
      },
    ]
  },
  {
    path: "/editor/:flowId",
    element: <Editor />,
    errorElement: <ErrorPage />
  },
  {
    path: "/v/:flowId",
    element: <View />,
    errorElement: <ErrorPage />
  }
], {
  // If you upload to subfolder in your server uncomment this line and edit basename (your subfolder)
  // basename: "/subfolder"
  })

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
