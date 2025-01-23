import { Request, Response } from 'express'
import db from '../db'


export const scrappingWeb = async (req: Request, res: Response) => {
  const { supplier } = req.query

  const pattern = `%${supplier}%`;
  const items = db.prepare("SELECT * FROM suppliers WHERE firmName LIKE ?").all(pattern);

  res.status(200).json({
    hits: items.length,
    results: items
  })
}