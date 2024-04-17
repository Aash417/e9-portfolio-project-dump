import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { FaGithub } from 'react-icons/fa';
import { PiLinkSimpleBold } from 'react-icons/pi';

const invoices = [
	{
		invoice: 'INV001',
		paymentStatus: 'Paid',
		totalAmount: '$250.00',
		paymentMethod:
			'CCredit CardCredit CardCredit CardCredit CardCredit CardCredit CardCredit CardCredit CardCredit CardCredit CardCredit CardCredit CardCredit CardCredit CardCredit Cardredit Card',
	},
	{
		invoice: 'INV002',
		paymentStatus: 'Pending',
		totalAmount: '$150.00',
		paymentMethod: 'PayPal',
	},
	{
		invoice: 'INV003',
		paymentStatus: 'Unpaid',
		totalAmount: '$350.00',
		paymentMethod: 'Bank Transfer',
	},
	{
		invoice: 'INV004',
		paymentStatus: 'Paid',
		totalAmount: '$450.00',
		paymentMethod: 'Credit Card',
	},
	{
		invoice: 'INV005',
		paymentStatus: 'Paid',
		totalAmount: '$550.00',
		paymentMethod: 'PayPal',
	},
	{
		invoice: 'INV006',
		paymentStatus: 'Pending',
		totalAmount: '$200.00',
		paymentMethod: 'Bank Transfer',
	},
	{
		invoice: 'INV007',
		paymentStatus: 'Unpaid',
		totalAmount: '$300.00',
		paymentMethod: 'Credit Card',
	},
];

export function TableDemo() {
	return (
		<Table>
			<TableCaption>A list of your recent invoices.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className='hidden sm:table-cell'>
						<span className='sr-only'>Image</span>
					</TableHead>
					<TableHead>Name</TableHead>
					<TableHead>Stack</TableHead>
					<TableHead className='text-center'>Links</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{invoices.map((invoice) => (
					<TableRow key={invoice.invoice}>
						<TableCell className=''>
							<div className='grid '>
								<div>
									<img
										className='h-22 w-20 rounded-lg'
										src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg'
										alt=''
									/>
								</div>
							</div>
						</TableCell>
						<TableCell>{invoice.paymentStatus}</TableCell>
						<TableCell className='max-w-44'>{invoice.paymentMethod}</TableCell>
						<TableCell className='text-right'>
							<div className='flex gap-4 justify-center'>
								<a href=''>
									<FaGithub size={25} />
								</a>
								<a href=''>
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
