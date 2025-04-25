import { z } from 'zod'

export const LoginSchema = z.object({
	email: z.string().email('Invalid email address').min(5, 'Email must be at least 5 characters long'),
	password: z
		.string()
		.min(8, 'Password must be at least 8 characters long')
		.max(64, 'Password cannot exceed 64 characters long')
		.regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
		.regex(/[a-z]/, 'Password must contain at least one lowercase letter')
		.regex(/[0-9]/, 'Password must contain at least one number')
		.regex(/[\W_]/, 'Password must contain at least one special character'),
})

export const RegisterSchema = z.object({
	username: z
		.string()
		.min(8, 'Username must be at least 8 characters long')
		.max(32, 'Username cannot exceed 64 characters long')
		.regex(/[A-Z]/, 'Username must contain at least one uppercase letter')
		.regex(/[a-z]/, 'Username must contain at least one lowercase letter')
		.regex(/[0-9]/, 'Username must contain at least one number'),
	email: z.string().email('Invalid email address').min(5, 'Email must be at least 5 characters long'),
	password: z
		.string()
		.min(8, 'Password must be at least 8 characters long')
		.max(64, 'Password cannot exceed 64 characters long')
		.regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
		.regex(/[a-z]/, 'Password must contain at least one lowercase letter')
		.regex(/[0-9]/, 'Password must contain at least one number'),
})
