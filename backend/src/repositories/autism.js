import { prisma } from "../services/prisma.js";

export const createAutism = async (data) => {
  const autism = await prisma.autism.create({
    data
  });
  return autism;
};

export const getById = async (id) => {
  const autism = await prisma.autism.findUnique({
    where: {
      id,
    }
  });
  return autism;
};

export const getAll = async () => {
  const allAutism = await prisma.autism.findMany({});
  return allAutism;
};
