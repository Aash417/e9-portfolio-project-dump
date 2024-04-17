// import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';

export default function ProjectList() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Products</CardTitle>
				<CardDescription>
					Manage your products and view their sales performance.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className='hidden sm:table-cell'>
								<span className='sr-only'>Image</span>
							</TableHead>
							<TableHead>Name</TableHead>
							<TableHead>Stack</TableHead>
							<TableHead>Links</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							<TableCell className='hidden sm:table-cell'>
								<div className='grid gap-4'>
									<div>
										<img
											className='h-21 max-w-40 rounded-lg'
											src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg'
											alt=''
										/>
									</div>
								</div>
							</TableCell>
							<TableCell className='font-medium'>Laser Lemonade Machine</TableCell>
							<TableCell>
								<Badge variant='outline'>Draft</Badge>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</CardContent>
			<CardFooter>
				<div className='text-xs text-muted-foreground'>
					Showing <strong>1-10</strong> of <strong>32</strong> products
				</div>
			</CardFooter>
		</Card>
	);
}
