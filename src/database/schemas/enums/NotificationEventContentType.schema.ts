/* eslint-disable */
import { z } from 'zod';

export const NotificationEventContentTypeSchema = z.enum(["PriceChange", "StatusChange"])
