import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { Hono } from 'hono';
import { cors } from 'hono/cors';

const app = new Hono<{
	Bindings: {
		DATABASE_URL: string;
	};
}>();

app.use(
	cors({
		credentials: true,
		origin: 'http://localhost:5173',
	})
);

app.get('/', (c) => {
	return c.text('Hello Hono!');
});

app.get('/all', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

	const allProjects = await prisma.projects.findMany({});

	return c.json({
		allProjects,
	});
});

app.post('/add', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

	const { name, stack, imageLink, githubLink, liveLink } = await c.req.json();
	const createdEntry = await prisma.projects.create({
		data: {
			name,
			stack,
			imageLink,
			githubLink,
			liveLink,
		},
	});

	return c.json({
		createdEntry,
	});
});

export default app;
