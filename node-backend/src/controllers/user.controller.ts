import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { uploadOnCloudinary } from '../utils/cloudinary';

export async function test(req: Request, res: Response) {
  res.status(200).json({
    message: 'ok',
  });
}
interface UploadedFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
}

export async function uploadProject(req: Request, res: Response) {
  console.log('req.file :', req.file);
  console.log('req.files :', req.files);
  console.log('req.body :', req.body);

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
