import req from "express/lib/request"
import { createAdhd, getAll, getById} from "../repositories/adhd"

export const create = async(req,res) =>{
    try {
        const adhd = await createAdhd(req.body)
        res.status(200).send(adhd)
    } catch (e) {
        res.status(400).send(e)
    }
}