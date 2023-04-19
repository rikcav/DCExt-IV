import req from "express/lib/request"
import { createAdhd, getAll, getById, getByCategory} from "../repositories/adhd"
import {adhdValidation} from "../validations/adhd"

export const create = async(req,res) =>{
    try {

        //conferir se todos os campos foram preenchidos
        //await adhdValidation.validate(req.body)

        const adhd = await createAdhd(req.body)
        res.status(200).send(adhd)
    } catch (e) {
        res.status(400).send(e)
    }
}

export const get = async(req,res) => {
    try {
        const adhd = await getAll()
        res.status(200).send(adhd)
    } catch (e) {
        res.status(400).send(e)
    }
}

export const getId = async(req,res) =>{
    try {
        const adhd = await getById(Number(req.params.id))
        res.status(200).send(adhd)
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
    }
}