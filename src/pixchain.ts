import { PixChanProps } from './interfaces';
import Repository from './repository';
import Contracts from './contracts';
import Transactions from './transactions';
import Deploy from './deploy';
import Webhook from './webhook';
import Events from './events';
import { Blockchain } from './blockchain';
import { SigUtil } from './sig-util';
import { Auth } from './modules';
import Clients from './clients';
import EstimateGas from './estimate-gas';

export class PixChain {
  public repository: Repository;
  public contracts: Contracts;
  public transactions: Transactions;
  public deploy: Deploy;
  public webhook: Webhook;
  public blockchain: Blockchain;
  public sigUtil: SigUtil;
  public auth: Auth;
  public events: Events;
  public clients: Clients;
  public estimateGas: EstimateGas;

  constructor(props: PixChanProps) {
    this.repository = new Repository({
      apiKey: props.apiKey,
      environment: props.environment,
      endpoint: props.endpoint,
    });
    this.contracts = new Contracts(this.repository);
    this.transactions = new Transactions(this.repository);
    this.deploy = new Deploy(this.repository);
    this.webhook = new Webhook(props.signatureKey);
    this.blockchain = new Blockchain(this.repository);
    this.sigUtil = new SigUtil();
    this.auth = new Auth(this.repository);
    this.events = new Events(this.repository);
    this.clients = new Clients(this.repository);
    this.estimateGas = new EstimateGas(this.repository);
  }
}
