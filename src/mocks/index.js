// import axios from 'axios';
import { Polly } from '@pollyjs/core';
import XhrAdapter from '@pollyjs/adapter-xhr';
import FetchAdapter from '@pollyjs/adapter-fetch';
import LocalStoragepersister from '@pollyjs/persister-local-storage';

// import footerMocks from './footer-mock';
// import quickSearchMocks from './quick-search-mock';
// import addToCartMocks from './add-to-cart-mock';
// import addSizeMocks from './add-size-mock';
// import viewMore from './view-more';

/*
Register the adapters and persisters we want to use. This way all future
polly instances can access them by name.
*/
Polly.register(XhrAdapter);
Polly.register(LocalStoragepersister);
Polly.register(FetchAdapter);
/*
  Create a new polly instance.

  Connect Polly to both fetch and XHR browser APIs. By default, it will
  record any requests that it hasn't yet seen while replaying ones it
  has already recorded.
*/
const polly = new Polly('react-start', {
  mode: 'passthrough',
  adapters: ['xhr', 'fetch'],
  persister: 'local-storage'
});

// eslint-disable-next-line no-unused-vars
const { server } = polly;

// footerMocks.init(server);
// quickSearchMocks.init(server);
// addToCartMocks.init(server);
// addSizeMocks.init(server);
// viewMore.init(server);

export default polly;
