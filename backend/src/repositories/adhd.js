import { prisma } from "../services/prisma.js";

exports.createAdhd = async (data) => {
  const adhd = await prisma.adhd.create(data);
  return adhd;
};

exports.getById = async (id) => {
  const adhd = await prisma.adhd.findUnique({
    where: id,
  });
  return adhd;
};

exports.getAll = async () => {
  const allAdhd = await prisma.adhd.findMany();
  return allAdhd;
};
