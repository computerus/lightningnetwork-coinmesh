import { InvoicesService } from '../../services/invoices';

export class InvoicesList {
    static inject = [InvoicesService];
    invoicesList = [];
    fee = 0;

    constructor(invoicesService) {
        this._invoicesService = invoicesService;
    }
    
    attached() {
        this.getInvoices();
    }

    getInvoices() {
        this.invoicesList = this._invoicesService.getInvoices();
    }

    pay(invoice) {
        this._invoicesService.payInvoice(invoice, fee);
    }
}