import {InvoicesService} from '../../services/invoices';
import { Invoice } from '../../models/invoice';

export class CreateInvoice {
  invoice = new Invoice();

  static inject = [InvoicesService];
  constructor(invoicesService) {
    this._invoicesService = invoicesService;
  }

  createInvoice() {
    const date = new Date();
    this.invoice.expires_at = date.setDate(date.getDate() + 7); 
    console.log(this.invoice);
    this._invoicesService.createInvoice(this.invoice);
    this.invoice = new Invoice({});
  }
}
