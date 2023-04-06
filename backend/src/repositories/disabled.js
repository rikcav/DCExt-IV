import Prisma, { prisma } from "../services/prisma.js";

exports.createDisabled = async (data) => {
  const disabled = await prisma.disabled.create({
    data
  });
  return disabled;
};

exports.getById = async (id) => {
  const disabled = await prisma.disabled.findUnique({
    where: id,
  });
  return disabled;
};

exports.getAll = async () => {
  const allDisabled = await prisma.disabled.findMany();
  return allDisabled;
};
