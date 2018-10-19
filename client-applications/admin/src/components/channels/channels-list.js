import { ChannelsService } from '../../services/channels';

export class ChannelsList {
    static inject = [ChannelsService];
    channels = [];

    constructor(channelsService) {
        this._channelsService = channelsService;
    }
    
    attached() {
        this.channels = this._channelsService.getChannels()();
    }

}