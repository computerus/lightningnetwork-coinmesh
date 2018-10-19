export class PaymentHistorySingle {
     block_id = '';
     chain_address = '';
     confirmation_count = 0;
     confirmed_at =  new Date() ;
     created_at =  new Date() ;
     description = '';
     description_hash = '';
     destination = '';
     expires_at =  new Date() ;
     fee = 0;
     hop_count = 0;
     id = '';
     is_confirmed = true;
     is_outgoing = false;
     request = '';
     tokens = 0;
     type = 'history'; 

  constructor(data) {
    Object.assign(this, data);
  }
}
