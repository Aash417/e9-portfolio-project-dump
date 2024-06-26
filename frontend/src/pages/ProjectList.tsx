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
		<div className='flex flex-col items-center bg-slate-700'>
			<Card className='w-3/5'>
				<CardHeader>
					<CardTitle>Projects</CardTitle>
					<CardDescription>personal projects training grounds.</CardDescription>
				</CardHeader>
				<CardContent>
					<ProjectListTable />
				</CardContent>
				<CardFooter>
					<div className='text-xs text-muted-foreground'></div>
				</CardFooter>
			</Card>
		</div>
	);
}
