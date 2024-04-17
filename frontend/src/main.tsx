import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import ProjectList from './pages/ProjectList';

const router = createBrowserRouter([
	{
		path: '/',
		element: <ProjectList />,
	},
	{
		path: '/add',
		element: <div>add</div>,
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
