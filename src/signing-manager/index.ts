import { SigningManagerProps } from '..';
import Repository from '../repository';
import { SignerService } from './signer.service';
import { TransactionService } from './transaction.service';
export * from './interfaces';

export class SigningManager {
  public repository: Repository;
  public transaction: TransactionService;
  public signer: SignerService;

  constructor(props: SigningManagerProps) {
    this.repository = new Repository({
      apiKey: props.apiKey,
      environment: props.environment,
      endpoint: props.endpoint,
    });
    this.transaction = new TransactionService(this.repository);
    this.signer = new SignerService(this.repository);
  }
}
