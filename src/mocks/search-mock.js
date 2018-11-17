import json from './products.json';

export default {
  init: (server) => {

    server
      .post('/search')
      .intercept((req, res) => {
        res.status(200).json(json);
      });
  }
};
