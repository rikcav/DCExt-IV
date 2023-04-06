import { prisma } from "../services/prisma.js";

export const createAdhd = async (data) => {
  const adhd = await prisma.aDHD.create({
    data
  });
  return adhd;
};

exports.getById = async (id) => {
  const adhd = await prisma.aDHD.findUnique({
    where: id,
  });
  return adhd;
};

exports.getAll = async () => {
  const allAdhd = await prisma.aDHD.findMany();
  return allAdhd;
};
