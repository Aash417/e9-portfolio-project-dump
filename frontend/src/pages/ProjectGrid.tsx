import Card from '@/components/Card';
import { getProjectList, projectType } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { HashLoader } from 'react-spinners';

function ProjectGrid() {
	const { data, isLoading } = useQuery({
		queryKey: ['project'],
		queryFn: getProjectList,
	});

	if (isLoading)
		return (
			<div className='flex flex-col items-center justify-center h-screen align-middle bg-slate-500'>
				<HashLoader />
			</div>
		);

	const projects: projectType[] = data?.data?.allProjects;
	const sortedData = projects.sort((a: { id: number }, b: { id: number }) => b.id - a.id);
	return (
		<div className='p-6  bg-[#121212] '>
			<div className='grid gap-6 m-5 lg:grid-cols-4 md:grid-cols-2 '>
				{sortedData.map((project, i) => (
					<Card project={project} key={i} />
				))}
			</div>
		</div>
	);
}

export default ProjectGrid;
