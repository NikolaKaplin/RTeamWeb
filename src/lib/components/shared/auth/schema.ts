import { z } from 'zod';

export const loginSchema = z.object({
	email: z.string().email({ message: 'Неверная почта' }),
	password: z.string().min(6, {
		message: 'Недостаточно символов'
	})
});
export type TFormLoginValues = z.infer<typeof loginSchema>;
