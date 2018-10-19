import { ChannelsService } from '../../services/channels';

export class CreateChannel {
    static inject = [ChannelsService];
    isExpanded = false;
    fee;
    give;
    local;
    partner;

    constructor(channelsService) {
        this._channelsService = channelsService;
    }

    expand() {
        this.isExpanded = true;
    }

    openChannel() {
        this._channelsService.connectChannel({
            chain_fee_tokens_per_vbyte: this.fee,
            give_tokens: this.give,
            local_tokens: this.local,
            partner_public_key: this.partner
        });
        location.reload();
    }

    cancelChannel() {
        this.isExpanded = false;
        this.fee = null;
        this.local = null;
        this.give = null;
        this.partner = '';
    }
}