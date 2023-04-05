import Prisma, { prisma } from "../services/prisma.js";

exports.createElder = async (data) => {
  const elder = await prisma.elder.create(data);
  return elder;
};

exports.getById = async (id) => {
  const elder = await prisma.elder.findUnique({
    where: id,
  });
  return elder;
};

exports.getAll = async () => {
  const allElder = await prisma.elder.findMany();
  return allElder;
};

