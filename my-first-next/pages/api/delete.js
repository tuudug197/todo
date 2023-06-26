import { request } from "../utils/request"

export default async function handler(req, res) {
    const { filter } = req.body
    const result = await request("deleteOne",  { filter })
    res.status(200).send(result)
  }
  
