import prisma from "../prisma";

export const roadmapService = {
  getRoadMap: async () => {
    try {
      const users = await prisma.roadmap.findMany();
      return { users, success: true };
    } catch (error) {
      console.error("User service error (getUsers):", error);
      return {
        error: "Kullanıcı verisi alınırken hata oluştu",
        success: false,
      };
    }
  },

  saveCart: async (title, description, status) => {
    try {
      const users = await prisma.roadmap.create({
        data: {
          title: title,
          description: description,
          status: status,
        },
      });
      return { success: true };
    } catch (error) {
      console.error("User service error (getUsers):", error);
      return {
        error: "Kullanıcı verisi alınırken hata oluştu",
        success: false,
      };
    }
  },

  updateCart: async (id, status) => {
    try {
      console.log("prisma: " + status);
      const carts = await prisma.roadmap.update({
        where: { id: parseInt(id) },
        data: { status },
      });
      return { success: true };
    } catch (error) {
      console.error("Cart update service error (updateCart):", error);
      return {
        error: "Cart verisi alinirken hata olustu",
        success: false,
      };
    }
  },
};
