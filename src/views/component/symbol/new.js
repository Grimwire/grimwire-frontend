import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

import Symbol from '../../../components/symbol/page/page'
import HandleForm from '../../../components/forms/handler'

import {defaultSymbol} from '../../../db/defaultObjects'

class SymbolPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
 
  render() {
  const curr_user = localStorage.user ?  JSON.parse(localStorage.user) : false

  const params = new URLSearchParams(window.location.search)
  if(params.get('symbol_kind_id')) { defaultSymbol.symbol_kind_id = Number.parseInt(params.get('symbol_kind_id')) }

    return <div>
        { curr_user ?  <Link to="/symbols">Back To All</Link> : ""}
        <HandleForm item={defaultSymbol} formClass={"symbols"} update={() => {}} />
      </div>
  }
}

export default SymbolPage;
