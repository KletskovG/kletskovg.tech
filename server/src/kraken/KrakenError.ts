export class KrakenError {
  error: Error;
  constructor(message: string) {
    this.error = new Error(`KRAKEN ERROR \n ${message} \n /kraken_stop`);
  }
}
