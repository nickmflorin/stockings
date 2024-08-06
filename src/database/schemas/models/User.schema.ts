/* eslint-disable */
import { z } from 'zod';
const baseSchema = z.object({
    id: z.string().uuid(),
    clerkId: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    profileImageUrl: z.string().nullish(),
    emailAddress: z.string(),
    createdAt: z.coerce.date().default(() => new Date()),
    updatedAt: z.coerce.date(),
}
);
const relationSchema = z.object({
    createdProducts: z.array(z.unknown()).optional(),
    updatedProducts: z.array(z.unknown()).optional(),
    createdProductRecords: z.array(z.unknown()).optional(),
    updatedProductRecords: z.array(z.unknown()).optional(),
    createdNotificationEvents: z.array(z.unknown()).optional(),
    updatedNotificationEvents: z.array(z.unknown()).optional(),
    notificationEvents: z.array(z.unknown()).optional(),
}
);

/**
 * `User` schema excluding foreign keys and relations.
 */
export const UserScalarSchema = baseSchema;


/**
 * `User` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export const UserSchema = UserScalarSchema.merge(relationSchema.partial());


/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export const UserPrismaCreateSchema = baseSchema.partial().passthrough();


/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export const UserPrismaUpdateSchema = z.object({
    id: z.string().uuid(),
    clerkId: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    profileImageUrl: z.string().nullish(),
    emailAddress: z.string(),
    createdAt: z.coerce.date().default(() => new Date()),
    updatedAt: z.coerce.date()
}).partial();


/**
 * `User` schema for create operations excluding foreign keys and relations.
 */
export const UserCreateScalarSchema = baseSchema.partial({
    id: true, createdAt: true, updatedAt: true
});


/**
 * `User` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export const UserCreateSchema = baseSchema.partial({
    id: true, createdAt: true, updatedAt: true
});


/**
 * `User` schema for update operations excluding foreign keys and relations.
 */
export const UserUpdateScalarSchema = baseSchema.partial();


/**
 * `User` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export const UserUpdateSchema = UserUpdateScalarSchema;

