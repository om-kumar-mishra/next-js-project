// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from "fs"

type Data = {
  name: string
}

export default  async function  handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) 
{
    //  fs.readFile("https://dummyjson.com/products","utf-8",(err,data)=>{
    //      console.log(data)
    //  })


     const resp = await fetch("https://dummyjson.com/products")
  const data = await resp.json()
  console.log(data)
  res.status(200).json({ name:data.products })
}