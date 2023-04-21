import req from "express/lib/request";
import { createElder, getAll, getById, getByCategory } from "../repositories/elder";
import { elderValidation } from "../validations/elder";

export const create = async (req, res) => {
  try {
    //conferir se todos os campos foram preenchidos
    //await elderValidation.validate(req.body)

    const elder = await createElder(req.body);
    res.status(200).send(elder);
  } catch (e) {
    res.status(400).send(e);
  }
};

export const get = async (req, res) => {
  try {
    const elder = await getAll();
    res.status(200).send(elder);
  } catch (e) {
    res.status(400).send(e);
  }
};

export const getId = async (req, res) => {
  try {
    const elder = await getById(Number(req.params.id));
    res.status(200).send(elder);
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