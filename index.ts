import Fastify, { FastifyInstance } from "fastify";
import routes from "./routes";

class Application {
  fastify: FastifyInstance;
  cors: any;

  constructor() {
    this.fastify = Fastify({ logger: true });
  }

  async start() {
    try {
      await this.fastify.register(import('@fastify/middie'));
      await this.fastify.register(async(instance: FastifyInstance) => {
        routes.map((route: any) => instance.route(route))
      });
      this.fastify.use(require('cors')());
      await this.fastify.listen({port: 8080});
    } catch (err) {
      this.fastify.log.error(err);
      process.exit(1);
    }
  }
}

const app = new Application();
app.start();