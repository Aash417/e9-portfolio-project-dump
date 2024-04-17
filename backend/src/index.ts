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

app.get('/all', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

	const allProjects = await prisma.projects.findMany({});

	return c.json({
		msg: 'success',
		data: allProjects,
	});
});

app.post('/add', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

	const { name, stack, imageLink, githubLink, liveLink } = await c.req.json();
	const entry = await prisma.projects.create({
		data: {
			name,
			stack,
			imageLink,
			githubLink,
			liveLink,
		},
	});

	return c.json({
		msg: 'success',
		data: entry,
	});
});

export default app;
