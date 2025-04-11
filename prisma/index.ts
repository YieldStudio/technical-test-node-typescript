import { PrismaClient } from "./generated";

if (process.env.NODE_ENV === "test") {
  throw new Error("Prisma client should not be accessed during tests");
}

export const prisma = new PrismaClient();
