/*
  Warnings:

  - You are about to drop the `CategoriesOnGames` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Game` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CategoryToGame` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CategoriesOnGames" DROP CONSTRAINT "CategoriesOnGames_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "CategoriesOnGames" DROP CONSTRAINT "CategoriesOnGames_gameId_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryToGame" DROP CONSTRAINT "_CategoryToGame_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryToGame" DROP CONSTRAINT "_CategoryToGame_B_fkey";

-- DropTable
DROP TABLE "CategoriesOnGames";

-- DropTable
DROP TABLE "Category";

-- DropTable
DROP TABLE "Game";

-- DropTable
DROP TABLE "_CategoryToGame";

-- CreateTable
CREATE TABLE "Autism" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "Autism_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Elder" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "Elder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Disabled" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "Disabled_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ADHD" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "ADHD_pkey" PRIMARY KEY ("id")
);
