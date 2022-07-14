import * as crypto from 'crypto';
import { PayloadWebhook } from './interfaces';

export default class Webhook {
  private signatureKey: string;
  constructor(signatureKey: string) {
    this.signatureKey = signatureKey;
  }

  verify(signature: string, payload: PayloadWebhook): boolean {
    return this.createSignature(this.signatureKey, payload) === signature;
  }

  private createSignature(signature: string, payload: PayloadWebhook) {
    return crypto.createHmac('sha256', signature).update(JSON.stringify(payload), 'utf8').digest('hex');
  }
}
