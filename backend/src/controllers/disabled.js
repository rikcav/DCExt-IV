import req from "express/lib/request"
import { createDisabled, getAll, getById, getByCategory} from "../repositories/disabled"
import {disabledValidation} from "../validations/disabled"

export const create = async(req,res) =>{
    try {

        //conferir se todos os campos foram preenchidos
       // await disabledValidation.validate(req.body)

        const disabled = await createDisabled(req.body)
        res.status(200).send(disabled)
    } catch (e) {
        res.status(400).send(e)
    }
}

export const get = async(req,res) => {
    try {
        const disabled = await getAll()
        res.status(200).send(disabled)
    } catch (e) {
        res.status(400).send(e)
    }
}

export const getId = async(req,res) =>{
    try {
        const disabled = await getById(Number(req.params.id))
        res.status(200).send(disabled)
    } catch (e) {
        res.status(400).send(e)
    }
}

export const getCategory = async(req,res) =>{
    try {
        const category = await getByCategory(req.params.category)
        res.status(200).send(category)
    } catch (e) {
        res.status(400).send(e)
        console.log(e)
    }
}
