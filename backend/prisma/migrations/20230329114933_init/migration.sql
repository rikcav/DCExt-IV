-- CreateTable
CREATE TABLE "Jogos" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "link" TEXT,

    CONSTRAINT "Jogos_pkey" PRIMARY KEY ("id")
);
