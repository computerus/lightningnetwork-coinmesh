import {HttpWrapper} from './http-wrapper';
import {Peer} from '../models/peer';

export class PeersService {
  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  getPeers() {
    // return this.http.get('/peers').then(result => {
    //   return result.peers.map(item => {
    //     return new Peer(item);
    //   });
    // });
    return () => {return [{public_key:123456789000, 
      network_address:'127.000.000.001',
      tokens_received:120}]}
  }
  connectPeer(peer) {
    return this.http.post('/peers', peer).then(result => {
      return new Peer(result);
    });
  }
  disconnectPeer(peer) {
    return this.http.delete(`/peers/${peer.public_key}`).then(result => {
      return new Peer(result);
    });
  }
}
