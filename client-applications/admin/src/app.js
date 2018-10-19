export class App {
  configureRouter(config, router) {
    config.title = 'Litecoin Wallet Components';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: 'routes/home/index', nav: true, title: 'Overview' },
      { route: 'send', name: 'send', moduleId: 'routes/pay', nav: true, title: 'Send' },
      { route: 'receive', name: 'receive', moduleId: 'routes/receive', nav: true, title: 'Receive' },
      { route: 'channels', name: 'channels', moduleId: 'routes/channels', nav: true, title: 'Channels' },
      { route: 'peers', name: 'peers', moduleId: 'routes/peers', nav: true, title: 'Peers' },
      { route: 'network', name: 'network', moduleId: 'routes/network', nav: true, title: 'Network' }
    ]);

    this.router = router;
  }
}
