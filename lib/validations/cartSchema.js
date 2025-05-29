import { z } from "zod";

export const cartSchema = z.object({
  title: z.string().min(1, "Başlık boş olamaz"),
  description: z.string().min(1, "Açıklama boş olamaz"),
  status: z.enum(["BACKLOG", "TO_DO", "IN_PROGRESS", "DONE"], {
    errorMap: () => ({ message: "Geçersiz status değeri" }),
  }),
});
