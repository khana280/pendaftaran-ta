import { PrismaClient } from "@prisma/client";

class ExistData {
  protected prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
  static async getData(model: any, where: any) {
    try {
      console.log(...where);
      const response = await model.findFirst({ where: {
        ...where
      } });
      return response;
    } catch (err: any) {
      throw new Error(err);
    }
  }
}

export default ExistData;