/* eslint-disable */
import { z } from 'zod';

export const PriceChangeEventTypeSchema = z.enum(["PriceIncrease", "PriceDecrease"])
