import Prisma, { prisma } from "../services/prisma.js";

exports.createAutism = async (data) => {
  const autism = await prisma.autism.create({
    data
  });
  return autism;
};

exports.getById = async (id) => {
  const autism = await prisma.autism.findUnique({
    where: id,
  });
  return autism;
};

exports.getAll = async () => {
  const allAutism = await prisma.autism.findMany();
  return allAutism;
};
