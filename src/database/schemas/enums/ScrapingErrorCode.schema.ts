/* eslint-disable */
import { z } from 'zod';

export const ScrapingErrorCodeSchema = z.enum(["MISSING_ATTRIBUTE", "INVALID_ATTRIBUTE", "MISSING_TEXT", "INVALID_TEXT", "NONUNIQUE_TEXT", "MISSING_ELEMENT", "NONUNIQUE_ELEMENT", "HTTP_NETWORK", "HTTP_CLIENT", "HTTP_SERIALIZATION"])
