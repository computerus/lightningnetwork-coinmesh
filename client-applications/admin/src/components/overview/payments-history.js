import { HistoriesService } from '../../services/histories';

export class PaymentsHistory {
    static inject = [HistoriesService];
    paymentHistory = [];

    constructor(historiesService) {
        this._historiesService = historiesService;
    }

    attached() {
        this.getPaymentHistory();
    }

    getPaymentHistory() {
        this.paymentHistory = []; // this._historiesService.getForwardingHistory();
    }
}