// app/lib/controllers/userController.js
import { roadmapService } from "../services/roadmapService";
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
    try {
      console.log("save CartController");
      const roadmap = await roadmapService.saveCart(title, description, status);

      return { roadmap, success: true };
    } catch (error) {
      console.error("Error fetching users:", error);
      return { error: "Kullanıcılar alınamadı", success: false };
    }
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
