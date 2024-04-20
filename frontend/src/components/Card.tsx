import { projectType } from '@/utils';
import { FaGithub } from 'react-icons/fa';
import { PiLinkSimpleBold } from 'react-icons/pi';

interface CardProps {
	project: projectType; // Assuming projectType is already defined
}

const Card: React.FC<CardProps> = ({ project }) => {
	return (
		<div className='max-w-sm border border-white border-solid rounded-lg '>
			<a href={project.liveLink} target='_blank'>
				<img className='rounded-t-lg' loading='lazy' src={project.imageLink} alt='' />
			</a>
			<div className='p-5  bg-[#38393bb7] text-slate-300'>
				<h6 className='mb-2 text-xl font-bold tracking-tight '>{project.name}</h6>
				<p className='mb-3 font-normal text-slate-400'>{project.stack}</p>
				<div className='flex justify-end gap-7'>
					<a href={project.githubLink} target='_blank'>
						<FaGithub size={25} />
					</a>
					<a href={project.liveLink} target='_blank'>
						<PiLinkSimpleBold size={25} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
