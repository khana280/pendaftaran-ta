import { FastifyReply, FastifyRequest } from "fastify";
import { Prisma, PrismaClient } from "@prisma/client";
import ResponseHandler from "../utils/ResponseHandler";
import ExistData from "../helpers/ExistData";
import ErrorHandler from "../utils/ErrorHandler";

class BatasPendaftaran {
  async createThesisRegistration(req: FastifyRequest, reply: FastifyReply) {
    try {
      const body = req.body as Prisma.batas_pendaftaranCreateInput;
      const prisma = new PrismaClient();
      await BatasPendaftaran.validateThesisRegistration(body);
      const exist = await ExistData.getData(prisma.batas_pendaftaran, { 
        waktu_mulai: new Date(body.waktu_mulai), 
        waktu_selesai: new Date(body.waktu_selesai),
        id_prodi: body.id_prodi,
        id_tahun_akademik: body.id_tahun_akademik
       });
       if(exist){
          return ErrorHandler.badRequest('Batas pendaftaran sudah ada');
       }
      const result = await prisma.batas_pendaftaran.create({ data: body });
      ResponseHandler.success(reply, "Batas pendaftaran berhasil ditambahkan", result);
    } catch (error: any) {
      ResponseHandler.error(reply, error.message, error);
    }
  }

  static async validateThesisRegistration(body: any) {
    const waktu_mulai = new Date(body.waktu_mulai);
    const waktu_selesai = new Date(body.waktu_selesai);
    if(waktu_mulai > waktu_selesai) {
      return ErrorHandler.badRequest('Waktu mulai tidak boleh lebih besar dari waktu selesai');
    }
  }

  async updateThesisRegistration(req: FastifyRequest, reply: FastifyReply) {
    try {
      const params = req.params as any;
      const body = req.body as Prisma.batas_pendaftaranUpdateInput;
      const prisma = new PrismaClient();
      await BatasPendaftaran.validateThesisRegistration(body);
      if(body.waktu_mulai && body.waktu_selesai) {
        const exist = await ExistData.getData(prisma.batas_pendaftaran, { 
          keterangan: body.keterangan,
          waktu_mulai: body.waktu_mulai,
          waktu_selesai: body.waktu_selesai,
          id_prodi: body.id_prodi,
          id_tahun_akademik: body.id_tahun_akademik
        });
        if(exist){
            return ErrorHandler.badRequest('Batas pendaftaran sudah ada');
        }
      }
      const existData = await ExistData.getData(prisma.batas_pendaftaran, { id: parseInt(params.id) });
      if(!existData) {
        return ErrorHandler.notFound('Batas pendaftaran tidak ditemukan'); 
      }
      const response = await prisma.batas_pendaftaran.update({ where: { id: parseInt(params.id) }, data: body });
      ResponseHandler.success(reply, "Batas pendaftaran berhasil diubah", response);
    } catch (error: any) {
      ResponseHandler.error(reply, error.message, error);
    }
  }

  async destroyThesisRegistration(req: FastifyRequest, reply: FastifyReply, done: any) {
    try {
      const id: number = req.params as any;
      const prisma = new PrismaClient();
      const existData = await ExistData.getData(prisma.batas_pendaftaran, { id });
      if(!existData) {
        return ErrorHandler.notFound('Batas pendaftaran tidak ditemukan');
      }
      const response = await prisma.batas_pendaftaran.delete({ where: { id } });
      ResponseHandler.success(reply, "Batas pendaftaran berhasil dihapus", response);
    } catch (error) {
      done(error);
    }
  }
}

export default new BatasPendaftaran();