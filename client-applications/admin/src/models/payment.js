export class Payment {
  address = '';
  label = '';
  tokens = 0.0;
  type = 'payment';
  id = '';

  constructor(data) {
    Object.assign(this, data);
  }
}
