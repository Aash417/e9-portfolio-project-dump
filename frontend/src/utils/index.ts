import axios from 'axios';

export type projectType = {
	id: number;
	stack: string;
	imageLink: string;
	githubLink: string;
	liveLink: string;
	name: string;
};

type datatype = {
	allProjects: projectType[];
};

export async function getProjectList(): Promise<datatype> {
	return await axios.get(`${import.meta.env.VITE_BackendUrl}/fetchAll`, {
		withCredentials: true,
	});
}
