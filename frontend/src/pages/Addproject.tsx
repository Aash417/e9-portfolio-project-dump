import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { useNavigate } from 'react-router-dom';

function Addproject() {
	const { register, handleSubmit, reset } = useForm();
	const navigate = useNavigate();
	const queryclient = useQueryClient();

	const { mutate } = useMutation({
		mutationFn: async (data: any) => {
			const formData = new FormData();
			formData.append('name', data.name);
			formData.append('stack', data.stack);
			formData.append('githubLink', data.githubLink);
			formData.append('liveLink', data.liveLink);
			formData.append('image', data.image[0]);

			try {
				await axios.post('http://localhost:4000/add', formData, {
					withCredentials: true,
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				});
				queryclient.invalidateQueries({ queryKey: ['project'] });
			} catch (error) {
				console.error('Error submitting form:', error);
			}
		},
		onSuccess: () => {
			queryclient.invalidateQueries({ queryKey: ['project'] });
			reset();
			toast.success('entry created.');
		},
	});

	const onSubmit = async (data) => {
		mutate(data);
	};

	return (
		<div className='flex h-screen bg-slate-400'>
			<div className=''>
				<button onClick={() => navigate('/')}>home</button>
			</div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col justify-center max-w-sm mx-auto align-middle'
			>
				<div className='mb-5'>
					<label
						htmlFor='pname'
						className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
					>
						Project name
					</label>
					<input
						{...register('name')}
						type='text'
						id='pname'
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						required
					/>
				</div>
				<div className='mb-5'>
					<label
						htmlFor='techstack'
						className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
					>
						Tech Stack
					</label>
					<input
						{...register('stack')}
						type='text'
						id='techstack'
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
					/>
				</div>
				<div className='mb-5'>
					<label
						htmlFor='coverimage'
						className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
					>
						Cover image
					</label>
					<input
						{...register('image')}
						type='file'
						id='image'
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
					/>
				</div>
				<div className='mb-5'>
					<label
						htmlFor='gitlink'
						className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
					>
						Github Link
					</label>
					<input
						{...register('githubLink')}
						type='text'
						id='gitlink'
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						required
					/>
				</div>
				<div className='mb-5'>
					<label
						htmlFor='livelink'
						className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
					>
						Live link
					</label>
					<input
						{...register('liveLink')}
						type='text'
						id='livelink'
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
					/>
				</div>
				<button
					type='submit'
					className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mt-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
				>
					Submit
				</button>
			</form>
		</div>
	);
}

export default Addproject;
