import { NextFunction, Request, Response } from "express";
import { envs } from "../config/envs";

export const verifyApiKey = (req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.headers['x-api-key']

  if(!apiKey) {
    res.status(401).json({
      message: 'Unauthorized: API KEY was not provided'
    })
    return
  }

  if(apiKey !== envs.apiKey){
    res.status(401).json({
      message: 'Unauthorized: Invalid API KEY'
    })
    return
  }

  next()
}