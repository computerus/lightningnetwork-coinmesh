export class ChainTransaction{
  block_id= '';
  confirmation_count= 1;
  confirmation_height= 1000;
  created_at= new Date();
  is_confirmed= true;
  is_outgoing= false;
  fee= 1000;
  id= '';
  output_addresses= '';
  tokens= 20001;
  type= transactions;
    
  constructor(data) {
    Object.assign(this, data);
  }
}