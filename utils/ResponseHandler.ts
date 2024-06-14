import { FastifyReply } from "fastify";

class ResponseHandler {
  public static success(res: FastifyReply, message: string, data: any) {
    res.statusCode = 200;
    res.send({
      success: true,
      message,
      data
    })
  }
  public static error(res: FastifyReply, message: string, error?: any) {
    res.statusCode = error.code || 500;
    res.send({
      success: false,
      message
    })
  }
}

export default ResponseHandler;