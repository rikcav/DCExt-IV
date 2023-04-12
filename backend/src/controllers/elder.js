import req from "express/lib/request"
import { createElder, getAll, getById} from "../repositories/elder"
import {elderValidation} from "../validations/elder"

export const create = async(req,res) =>{
    try {

        //conferir se todos os campos foram preenchidos
        //await elderValidation.validate(req.body)

        const elder = await createElder(req.body)
        res.status(200).send(elder)
    } catch (e) {
        res.status(400).send(e)
    }
}
