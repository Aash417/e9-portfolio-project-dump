/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

export type projectType = {
	id: number;
	stack: string;
	imageLink: string;
	githubLink: string;
	liveLink: string;
	name: string;
};

interface ApiResponse {
	config: any;
	data: {
		allProjects: projectType[];
	};
	headers: any;
	request: any;
	status: number;
	statusText: string;
}

export async function getProjectList(): Promise<ApiResponse> {
	return await axios.get(`${import.meta.env.VITE_BackendUrl}/all`, {
		withCredentials: true,
	});
}
