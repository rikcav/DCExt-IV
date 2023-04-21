import { prisma } from "../services/prisma.js";

export const createAdhd = async (data) => {
  const adhd = await prisma.aDHD.create({
    data
  });
  return adhd;
};

export const getById = async (id) => {
  const adhd = await prisma.aDHD.findUnique({
    where: {
      id,
    }
  });
  return adhd;
};

export const getAll = async () => {
  const allAdhd = await prisma.aDHD.findMany({});
  return allAdhd;
};

export const getByCategory = async(category) =>{
  const categoria = await prisma.aDHD.findMany({
    where:{
      category:{
        contains: category
      }
    }
  })
  return categoria;
}
