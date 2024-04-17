import { TableDemo } from '@/components/ProjectListTable';
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
		<Card className='w-full'>
			<CardHeader>
				<CardTitle>Projects</CardTitle>
				<CardDescription>personal projects training grounds.</CardDescription>
			</CardHeader>
			<CardContent>
				<TableDemo />
			</CardContent>
			<CardFooter>
				<div className='text-xs text-muted-foreground'>
					Showing <strong>1-10</strong> of <strong>32</strong> products
				</div>
			</CardFooter>
		</Card>
	);
}
