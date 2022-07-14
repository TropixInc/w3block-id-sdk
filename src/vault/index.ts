import { VaultProps } from '..';
import Repository from '../repository';
import { AccountService } from './account.service';

export class Vault {
  public repository: Repository;
  public account: AccountService;

  constructor(props: VaultProps) {
    this.repository = new Repository({
      apiKey: props.apiKey,
      environment: props.environment,
      endpoint: props.endpoint,
    });
    this.account = new AccountService(this.repository);
  }
}
