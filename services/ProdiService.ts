import { FastifyReply } from "fastify";
import ResponseHandler from "../utils/ResponseHandler";
import BatasPendaftaranService from "./BatasPendaftaran";
import { PrismaClient } from "@prisma/client";

// export default class ProdiService {
//   protected batasPendaftaran: Array<BatasPendaftaranService> = [];
//   async getBatasPendaftaran(res: FastifyReply, idProdi: number, tahunAkademik: TahunAkademik): Promise<BatasPendaftaranService[]> {
//     try {
//       const prisma = new PrismaClient();
//       const batasPendaftaran = await prisma.batas_pendaftaran.findMany({
//         where: {
//           id_prodi: idProdi,
//           id_tahun_akademik: tahunAkademik.id
//         }
//       });
//     } catch (error: any) {
//       ResponseHandler.error(res, error.message, error.code)
//     }
//     return this.batasPendaftaran;
//   }
// }