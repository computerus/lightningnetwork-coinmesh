import {AddressesService} from '../../services/addresses';

export class GetAddress {

  static inject = [AddressesService];
  constructor(addressesService) {
    this._addressesService = addressesService;
  }

  createAddress() {
    this._addressesService.createAddress();
    location.reload();
  }
}
