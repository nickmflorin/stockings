/* eslint-disable */
import { z } from 'zod';

export const ProductRecordDataFieldSchema = z.enum(["PRICE", "RAW_PRICE", "STATUS"])
