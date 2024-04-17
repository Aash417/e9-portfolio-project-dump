import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import Addproject from './pages/Addproject';
import ProjectList from './pages/ProjectList';

const router = createBrowserRouter([
	{
		path: '/',
		element: <ProjectList />,
	},
	{
		path: '/add',
		element: <Addproject />,
	},
]);

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 10 * 1000,
		},
	},
});

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</React.StrictMode>
);
