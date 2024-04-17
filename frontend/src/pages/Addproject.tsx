function Addproject() {
	return (
		<>
			<form className='max-w-sm mx-auto flex flex-col justify-center h-screen'>
				<div className='mb-5'>
					<label
						htmlFor='pname'
						className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
					>
						Project name
					</label>
					<input
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
						type='file'
						id='coverimage'
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
						type='text'
						id='livelink'
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						required
					/>
				</div>
				<button
					type='submit'
					className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mt-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
				>
					Submit
				</button>
			</form>
		</>
	);
}

export default Addproject;
