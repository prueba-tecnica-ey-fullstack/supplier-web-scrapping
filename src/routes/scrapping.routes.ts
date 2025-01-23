
import { Router } from "express";
import { scrappingWeb } from "../controllers/scrapping.controller";
import { verifySupplierQuery } from "../middlewares/query.middleware";

const router = Router()

router.get('/supplier-search', verifySupplierQuery, scrappingWeb)

export default router