import { NextFunction, Request, Response } from "express";

export const verifySupplierQuery = (req: Request, res: Response, next: NextFunction) => {

  const { supplier } = req.query

  if(!supplier ) {
    res.status(400).json({
      message: 'Supplier name is required'
    })
    return
  }

  next()
}