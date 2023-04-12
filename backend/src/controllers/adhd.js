import req from "express/lib/request"
import { createAdhd, getAll, getById} from "../repositories/adhd"
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