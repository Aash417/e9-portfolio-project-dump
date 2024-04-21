import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';

const ProjectGrid = React.lazy(() => import('./pages/ProjectGrid'));
const ProjectList = React.lazy(() => import('./pages/ProjectList'));
const Addproject = React.lazy(() => import('./pages/Addproject'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <ProjectGrid />,
	},
	{
		path: 'list',
		element: <ProjectList />,
	},
	{
		path: 'add',
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
			<Toaster />
			<Suspense>
				<RouterProvider router={router} />
			</Suspense>
		</QueryClientProvider>
	</React.StrictMode>
);
