import { Server } from './server';

export class MoocBackendApp {
  server?: Server;

  async start() {
    const port = process.env.PORT || '5000';
    this.server = new Server(port);
    return this.server.listen();
  }

  get httpServer() {
    return this.server?.getHTTPServer();
  }

  async stop() {
    return this.server?.stop();
  }

}

/**No es necesario usar React en el MoocFrontEnd
 * aun que se use solo 2 clases haya tantas carpetas es para realizar buenas practicas
 */
