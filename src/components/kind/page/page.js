import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet'
import {defaultSymbol} from '../../../db/defaultObjects'
import BasicInfo from './basicInfo'
import SymbolList from './symbolList'
import ImageGallery from '../../imageGallery/gallery'
import Sources from '../../sources/sourcesList'
import {CSSTransition, SwitchTransition} from 'react-transition-group'

import TextOutput from '../../shared/textOutput';


const curr_user = localStorage.user ? JSON.parse(localStorage.user) : false

class KindPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            kind: {},
            loading: true
        }
    }

    componentDidMount = () => { this.updatePage() }
    componentWillReceiveProps = (newProps) => { this.updatePage(newProps) }

    updatePage = (props = this.props) => {
      this.setState({loading:true})
        const id = props.match.params.id
        axios
            .get(`https://grimwire.herokuapp.com/api/kinds/${id}`)
            .then(res => {
              this.setState({kind: res.data, loading: false})
              const params = new URLSearchParams(window.location.search)
              params.set('article', encodeURI(this.state.kind.kind_name.replace(/ /g, "-")))
              window.history.replaceState({}, "", window.location.pathname + '?' + params.toString());
            }
            )
            .catch(err => {
              console.log(err);
              this.setState({kind: {}, loading: false})
            } );
    }



    defaultSymbolWithInfo = () => {
        const item = this.state.kind
        return {
            ...defaultSymbol,
            info: item.extraInfoDefault,
        }
    }

    render() {
        const item = this.state.kind
        return <SwitchTransition><CSSTransition key={`pantheons-${this.props.match.params.id}`}
          in={true} timeout={350} classNames="whole-page" unmountOnExit appear enter exit>
            {typeof item !== 'undefined' && Object.keys(item).length > 0 && !this.state.loading ?
            <div>
              
    
        <Helmet>
                <title>{`GrimWire- ${item.kind_name}- Information on All ${item.kind_name}`}</title>
								<meta property="og:title" content={`Information on All ${item.kind_name}- GrimWire`} />
    						<meta property="og:description" content={item.kind_description} />
        </Helmet>

            { curr_user ?  <span><Link to="/collections/new">Create Collection</Link> 
            <Link to={`/collections/${item.kind_id}/edit`}>Edit This Collection</Link> 
            <Link to={`/symbols/new?symbol_kind_id=${item.kind_id}`}>New Symbol</Link></span> : "" }
            <Link to="/collections"><span className="fas fa-caret-left"></span> Back to All Collections</Link>

            {item.kindSymbolConnections.length > 0 ? 
                <div>This article is a list of {item.kind_name}. </div> : ""}

            { 
              item.kindSymbolConnections.map(ksc => <div>
                For more general information, please see <Link to={`/symbols/${ksc.symbol_id}`}>{ksc.symbol_name} ({ksc.connected_symbol_kind_name})</Link>
              </div>) 
            }

            <BasicInfo item={item}>
              {/*<ImageGallery item={item} key={item.kind_ids}/>*/}
            </BasicInfo>
            <div className="divider"></div>
            <SymbolList item={item} updatePage={this.updatePage} />
            <div className="reverse-divider"></div>
            
            <TextOutput text={item.kind_application_theory_text} title={'Theory & Application'} />
      <TextOutput text={item.kind_background_history_text} title={'History & Overview'} />

     { item.kind_application_theory_text || item.kind_background_history_text ? 
          <div className="reverse-divider"></div> : "" }


      <div className="text-container">
        <h3>Additional Information</h3>
        <p>{item.kind_name} were created by the following tradition:<br />
        <Link to={`/pantheons/${item.pantheon_id}`}>{item.pantheon_name}</Link></p>
            <hr />
        {/* item.pantheons.length > 0 ? <div>
          <h3>Used by the following Traditions: </h3>
          {item.pantheons.map(i =>
            <Link key={i.pantheon_id} to={`/pantheons/${i.pantheon_id}`}>{console.log(i)}{i.pantheon_name}</Link>
          )}
          </div> : ""*/}

        {item.categories.length > 0 ? <p>We include {item.kind_name} in the following classes and categories:</p> : ""}
        {item.categories.map(category => <div>
          <Link to={`/categories/${category.category_id}`}>- {category.category_name} {category.category_number}</Link>
        </div>)}
<br />
      </div>
            <Sources item={item} />

      </div> : ( this.state.loading ?
        <div className="loader" style={{height:'60px',margin:'20px'}}><img className="loaderImg" src={require('../../../img/yyloader.gif')} /></div>
        : <div className="failedSearch">Sorry, there was an error. This page does not exist.</div>
    )

}</CSSTransition></SwitchTransition>}

}

export default KindPage;
