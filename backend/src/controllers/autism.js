import req from "express/lib/request";
import { createAutism, getAll, getById, getByCategory } from "../repositories/autism";
import { autismValidation } from "../validations/autism";

export const create = async (req, res) => {
  try {
    //conferir se todos os campos foram preenchidos
    // await autismValidation.validate(req.body)

    const autism = await createAutism(req.body);
    res.status(200).send(autism);
  } catch (e) {
    res.status(400).send(e);
  }
};

export const get = async (req, res) => {
  try {
    const autism = await getAll();
    res.status(200).send(autism);
  } catch (e) {
    res.status(400).send(e);
  }
};

export const getId = async (req, res) => {
  try {
    const autism = await getById(Number(req.params.id));
    res.status(200).send(autism);
  } catch (e) {
    res.status(400).send(e);
  }
};

export const getCategory = async(req,res) =>{
  try {
      const category = await getByCategory(req.params.category)
      res.status(200).send(category)
  } catch (e) {
      res.status(400).send(e)
  }
}
