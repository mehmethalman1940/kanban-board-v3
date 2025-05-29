// app/lib/controllers/userController.js
import { error, log } from "console";
import { roadmapService } from "../services/roadmapService";
import { cartSchema } from "../validations/cartSchema.js";
export const cartController = {
  getCart: async () => {
    try {
      console.log("cartController");
      const roadmap = await roadmapService.getRoadMap();

      return { roadmap, success: true };
    } catch (error) {
      console.error("Error fetching users:", error);
      return { error: "Kullanıcılar alınamadı", success: false };
    }
  },

  saveCart: async (title, description, status) => {
    const parsed = cartSchema.safeParse({ title, description, status });

    if (!parsed.success) {
      const formattedErrors = parsed.error.errors.map((err) => ({
        field: err.path[0],
        message: err.message,
      }));
      return { error: formattedErrors, success: false };
    }

    const roadmap = await roadmapService.saveCart(title, description, status);
    return { roadmap, success: true };
  },

  updateCart: async (id, newStatus) => {
    try {
      console.log("update cart");
      console.log(newStatus);
      const roadmap = await roadmapService.updateCart(id, newStatus);

      return { roadmap, success: true };
    } catch (error) {
      console.error("Error fetching users:", error);
      return { error: "Kullanıcılar alınamadı", success: false };
    }
  },
};
