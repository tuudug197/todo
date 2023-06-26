import { request } from "../utils/request"

export default async function handler(req, res) {
  const result = await request("find", {})
  res.status(200).send(result)
}
