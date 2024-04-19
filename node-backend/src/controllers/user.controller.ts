import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { uploadOnCloudinary } from '../utils/cloudinary';

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma: ReturnType<typeof prismaClientSingleton> =
  globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;

export async function test(req: Request, res: Response) {
  res.status(200).json({
    message: 'ok',
  });
}

export async function uploadProject(req: Request, res: Response) {
  // console.log('req.file :', req.file);
  // console.log('req.files :', req.files);
  // console.log('req.body :', req.body);

  const localFilePath = req.file.path;
  const uploadedAvatar = await uploadOnCloudinary(localFilePath);

  const prisma = new PrismaClient();
  const { name, stack, githubLink, liveLink } = req.body;

  const project = await prisma.projects.create({
    data: {
      name,
      stack,
      imageLink: uploadedAvatar.url,
      githubLink,
      liveLink,
    },
  });

  res.status(200).json({
    project,
  });
}
