import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { Hono } from 'hono';

const app = new Hono<{
	Bindings: {
		DATABASE_URL: string;
	};
}>();

app.get('/', (c) => {
	return c.text('Hello Hono!');
});

app.get('/all', (c) => {
	return c.text('Hello Hono!');
});

app.post('/add', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

	const entry = await prisma.projects.create({
		data: {
			name: 'one',
			stack: 'html css js',
			githubLink: 'o',
			liveLink: 'o',
			imageLink: 'o',
		},
	});

	return c.json({
		msg: 'success',
		data: entry,
	});
});

export default app;
