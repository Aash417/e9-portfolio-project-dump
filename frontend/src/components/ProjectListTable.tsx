import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { getProjectList, projectType } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { FaGithub } from 'react-icons/fa';
import { PiLinkSimpleBold } from 'react-icons/pi';
import { HashLoader } from 'react-spinners';

export function ProjectListTable() {
	const { data, isLoading } = useQuery({
		queryKey: ['project'],
		queryFn: getProjectList,
	});

	if (isLoading)
		return (
			<div className='flex flex-col items-center'>
				<HashLoader />
			</div>
		);

	const projects = data?.data?.allProjects;
	const sortedData = projects.sort((a: { id: number }, b: { id: number }) => b.id - a.id);

	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className='hidden sm:table-cell'>
						<span className='sr-only'>Sr no</span>
					</TableHead>
					<TableHead className='hidden sm:table-cell'>
						<span className='sr-only'>Image</span>
					</TableHead>
					<TableHead>Name</TableHead>
					<TableHead>Stack</TableHead>
					<TableHead className='text-center'>Links</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{sortedData.map((project: projectType, i) => (
					<TableRow key={project.id}>
						<TableCell>{i + 1}</TableCell>
						<TableCell className=''>
							<div className='grid '>
								<div>
									<img
										className='h-20 rounded-lg w-28'
										src={project.imageLink}
										alt=''
									/>
								</div>
							</div>
						</TableCell>
						<TableCell className='font-bold'>{project.name}</TableCell>
						<TableCell className='max-w-44'>{project.stack}</TableCell>
						<TableCell className='text-right'>
							<div className='flex justify-center gap-4'>
								<a href={project.githubLink} target='_blank'>
									<FaGithub size={25} />
								</a>
								<a href={project.liveLink} target='_blank'>
									<PiLinkSimpleBold size={25} />
								</a>
							</div>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
