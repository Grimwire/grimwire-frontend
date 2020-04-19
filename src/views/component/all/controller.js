import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Index from './index'
import Portal from './portal'

function Controller() {
  return <div class="controller">
    <Switch>
        <Route path="/search" exact component={Index} />
        <Route path="/search/portal-of-chaos" exact component={Portal} />
    </Switch>
  </div>
}

export default Controller;
