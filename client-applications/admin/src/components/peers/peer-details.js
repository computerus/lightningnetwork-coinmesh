import { PeersService } from '../../services/peers';
import {bindable} from 'aurelia-templating';

export class PeerDetails {
    static inject = [PeersService, bindable];
    @bindable peer;

    constructor(peersService) {
        this._peersService = peersService;
    }    

    connect() {
        // this._peersService.connect(this.peer)
        this.peer.is_inbound = !this.peer.is_inbound;
    }
    disconnect() {
        // this._peersService.disconnect(this.peer)
        this.peer.is_inbound = !this.peer.is_inbound;
    }

}