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

export const getByCategory = async(category) =>{
  const categoria = await prisma.autism.findMany({
    where:{
      category:{
        contains: category
      }
    }
  })
  return categoria;
}
