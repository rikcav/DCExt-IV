import req from "express/lib/request"
import { createAutism, getAll, getById} from "../repositories/autism"
import {autismValidation} from "../validations/autism"

export const create = async(req,res) =>{
    try {

        //conferir se todos os campos foram preenchidos
       // await autismValidation.validate(req.body)

        const autism = await createAutism(req.body)
        res.status(200).send(autism)
    } catch (e) {
        res.status(400).send(e)
    }
}

