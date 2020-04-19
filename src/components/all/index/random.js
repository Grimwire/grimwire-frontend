import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'


//This component is used to build a 'complete' list, used for calling searches and passing props to the actual list component.

class Kinds extends React.Component {
  constructor(props) {
    super(props);
    const params = new URLSearchParams(window.location.search)
    this.state = {
      items: [],
      update: true,
      params: params,
      loading: false
    }
  }

  componentDidMount = () => {
    this.loadPage();
  }
  componentDidUpdate = () => {
    if (this.state.update) {
      this.loadPage();
    }
  }

  loadPage = () => {
    this.setState({ loading: true, update: false })
    const { pageNumber, sort, sortdir, searchTerm } = this.state
    axios
      .get(`https://grimwire.herokuapp.com/api/all/random`)
      .then(res =>
        this.setState({
          items: res.data.items,
          loading: false
        })
      )
      .catch(err => console.log(err));


  }


  recordKindInfo = () => {
    return {
      'pantheon': {
        link: 'pantheons',
        display: "Traditions & Paths",
      },
      'symbol': {
        link: 'symbols',
        display: "Items & Symbols",
      },
      'kind': {
        link: 'collections',
        display: "Collections & Lists",
      },
      'category': {
        link: 'categories',
        display: "Categories & Classes",
      },
    }
  }


  render() {
    return <div className="container" id="kindSearch">

      <div id="search-window">
        {
          this.state.items.map((item) => {
            let rki = this.recordKindInfo()[item.recordKind]
            return <Link to={`/${rki.link}/${item.id}`} style={{width:"100%", padding:"10px"}}>
              <span style={{fontWeight:'bold'}} className="blendBg">{rki.display}</span>
              <h3 style={{margin:'4px'}}>{item.name}</h3>
              {item.description ? item.description.substr(0, 128) : ""} {item.description && item.description.length > 128 ? <span>... [Read More]</span> : ""}
              
            </Link>
          })
        }
      </div>

    </div>
  }
}


export default Kinds;
