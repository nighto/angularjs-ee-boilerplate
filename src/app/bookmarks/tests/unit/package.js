define(function(require) {
  'use strict';

  require('./module.spec');
  require('./resources/rest.spec');
  require('./resources/search.spec');
  require('./controllers/list.spec');
  require('./controllers/search.spec');
  require('./controllers/new.spec');

  // TODO: update test
  // require('./controllers/edit.spec');
  // require('./routes.spec');

});
