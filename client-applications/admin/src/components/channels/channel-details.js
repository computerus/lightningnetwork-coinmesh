import { ChannelsService } from '../../services/channels';
import {bindable} from 'aurelia-templating';

export class ChannelDetails {
    static inject = [ChannelsService, bindable];
    @bindable channel;

    constructor(channelsService) {
        this._channelsService = channelsService;
    }    

    closeChannel() {
        this._channelsService.closeChannel(this.channel);
    }
}