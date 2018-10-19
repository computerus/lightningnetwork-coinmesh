import { TransactionsService } from '../../services/transactions';

export class ChainTransactions {
    static inject = [TransactionsService];
    chainTransactions = [];

    constructor(transactionsService) {
        this._transactionsService = transactionsService;
    }    

    getChainTransactions() {
        this.chainTransactions = this._transactionsService.getTransactions();
    }
}