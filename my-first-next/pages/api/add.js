import { request } from "../utils/request"

export default async function handler(req, res) {
    const { document } = req.body
    console.log(document);
    const result = await request("insertOne",  { document })
    res.status(200).send(result)
  }
  