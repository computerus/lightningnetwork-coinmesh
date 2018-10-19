import { PeersService } from '../../services/peers';

export class PeersList {
    static inject = [PeersService];
    peers = [];

    constructor(peersService) {
        this._peersService = peersService;
    }
    
    attached() {
        this.peers = this._peersService.getPeers()();
    }

}