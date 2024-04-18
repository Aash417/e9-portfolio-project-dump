import { ProjectListTable } from '@/components/ProjectListTable';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

export default function ProjectList() {
	return (
		<div className='flex flex-col items-center h-screen'>
			<Card className='w-4/5'>
				<CardHeader>
					<CardTitle>Projects</CardTitle>
					<CardDescription>personal projects training grounds.</CardDescription>
				</CardHeader>
				<CardContent>
					<ProjectListTable />
				</CardContent>
				<CardFooter>
					<div className='text-xs text-muted-foreground'>
						Showing <strong>1-10</strong> of <strong>32</strong> products
					</div>
				</CardFooter>
			</Card>
		</div>
	);
}
