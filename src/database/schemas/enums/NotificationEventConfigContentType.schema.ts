/* eslint-disable */
import { z } from 'zod';

export const NotificationEventConfigContentTypeSchema = z.enum(["PriceChange", "StatusChange"])
