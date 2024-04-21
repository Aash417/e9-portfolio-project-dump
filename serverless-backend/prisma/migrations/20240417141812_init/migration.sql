-- CreateTable
CREATE TABLE "Projects" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "stack" TEXT,
    "imageLink" TEXT,
    "githubLink" TEXT NOT NULL,
    "liveLink" TEXT,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);
