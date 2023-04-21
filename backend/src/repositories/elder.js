import { prisma } from "../services/prisma.js";

export const createElder = async (data) => {
  const elder = await prisma.elder.create({
    data
  });
  return elder;
};

export const getById = async (id) => {
  const elder = await prisma.elder.findUnique({
    where: {
      id,
    }
  });
  return elder;
};

export const getAll = async () => {
  const allElder = await prisma.elder.findMany({});
  return allElder;
};

export const getByCategory = async(category) =>{
  const categoria = await prisma.elder.findMany({
    where:{
      category:{
        contains: category
      }
    }
  })
  return categoria;
}
