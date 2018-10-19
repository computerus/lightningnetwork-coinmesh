import {HttpWrapper} from './http-wrapper';
import {Channel} from '../models/channel';

export class ChannelsService {
  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  getChannels() {
    // return this.http.get('/channels').then(result => {
    //   return result.channels.map(item => {
    //     return new Channel(item);
    //   });
    // });
    return () => { return [{partner_public_key:'12345 67890 abc', is_active:true, sent: 200, received:100250.32}] }
  }
  connectChannel(channel) {
    let body = {
      partner_public_key: 'test'
    };
    return this.http.post('/channels', channel).then(result => {
      return new Channel(result);
    });
  }

  closeChannel(channel) {
    return this.http.delete('/channels' + channel.id).then(result => {
      return result;
    });
  }
}
