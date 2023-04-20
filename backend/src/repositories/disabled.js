import{ prisma } from "../services/prisma.js";

export const createDisabled = async (data) => {
  const disabled = await prisma.disabled.create({
    data
  });
  return disabled;
};

export const getById = async (id) => {
  const disabled = await prisma.disabled.findUnique({
    where: {
      id,
    }
  });
  return disabled;
};

export const getAll = async () => {
  const allDisabled = await prisma.disabled.findMany({});
  return allDisabled;
};

export const getByCategory = async(category) =>{
  const categoria = await prisma.disabled.findMany({
    where:{
      category,
    }
  })
  return categoria;
}
