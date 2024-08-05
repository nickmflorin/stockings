/* eslint-disable */
import { z } from 'zod';

export const ProductStatusSchema = z.enum(["OUT_OF_STOCK", "IN_STOCK", "AVAILABLE_FOR_BACKORDER", "NOT_LISTED"])
