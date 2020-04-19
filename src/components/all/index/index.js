import React from 'react';
import axios from 'axios';
import FullKindList from '../lists/full';
import Pagination from '../../shared/pagination'
import {Link} from 'react-router-dom'


//This component is used to build a 'complete' list, used for calling searches and passing props to the actual list component.

class Kinds extends React.Component {
    constructor(props) {
        super(props);
        const params = new URLSearchParams(window.location.search)
        this.state = {
          kinds: [],
          pager: {},
          pageNumber: params.get('page') || 1,
          sortdir: params.get('sortdir') || "ASC",
          searchTerm: params.get('searchTerm') || "",
          update:true,
          params: params,
          loading: false
        }
    }

    componentDidMount = () => {
      this.loadPage();
    }
    componentDidUpdate = () => {
      if(this.state.update){
        this.loadPage();
      }
    }

    loadPage = () => {
      this.setState({loading:true,update:false})
      const {pageNumber, sort, sortdir, searchTerm} = this.state
      axios
          .get(`https://grimwire.herokuapp.com/api/all?page=${pageNumber}&sortdir=${sortdir}&search=${searchTerm}`)
          .then(res =>
            this.setState({
              kinds: res.data.pageOfItems,
              pager: res.data.pager,
              loading: false
            })
          )
          .catch(err => console.log(err) );


    }

    goToPage = (e) => {
      let params = this.state.params
      const pageNumber =  e.target.attributes.page.value
      params.set('page', pageNumber)
      this.setState({pageNumber, params, update:true})
      window.history.replaceState({}, "", window.location.pathname + '?' + params.toString());
    }

    toggleSortDir = (e) => {
      let params = this.state.params
      const newSortdir = this.state.sortdir === "ASC" ? "DESC" : "ASC"
      params.set('sortdir', newSortdir)
      this.setState({sortdir: newSortdir, update:true, params})
      window.history.replaceState({}, "", window.location.pathname + '?' + params.toString());
    }

    changeSort = (e) => {
      const sort = e.target.attributes.sortTerm.value
      if(sort === this.state.sort) { this.toggleSortDir() }
      let params = this.state.params
      params.set('sort', sort)
      this.setState({ sort, update:true, params })
      window.history.replaceState({}, "", window.location.pathname + '?' + params.toString());
    }

    handleChange = (e) => {
      let params = this.state.params
      const search = e.target.value
      if(search !== "") {
        params.set('searchTerm', search)
      } else {
        params.delete('searchTerm')
      }
      this.setState({searchTerm: search, params, update:true})
      window.history.replaceState({}, "", window.location.pathname + '?' + params.toString());
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
            <div className="componentSearchBar">
              <button className={`page-button ${this.state.sort === 'kind_name' ? 'page-button-active' : "" }`} onClick={this.changeSort} sortTerm={"kind_name"} >
                Sort Alphabetically { this.state.sort === 'kind_name' ? this.state.sortdir === "ASC" ? "(A-Z)" : "(Z-A)" : "" }
              </button>

              <input className="page-field" type='text' onChange={this.handleChange} type="text"
                name="search" placeholder="Search by name"
                value={this.state.searchTerm} />
            </div>

            <div style={{display: this.state.loading && this.state.kinds.length !== 0 ? "block" : "none"}} className="loader"><img className="loaderImg" src={require('../../../img/yyloader.gif')} /></div>
            <Pagination pages={this.state.pager.pages} callback={this.goToPage} currentPage={this.state.pager.currentPage} totalPages={this.state.pager.totalPages} />

              <div id="search-window">
                  {
                    this.state.kinds.length > 0 ?
                      <div>  
                        {this.state.kinds.map((item) => {
                          let rki = this.recordKindInfo()[item.recordKind]

                          return <Link to={`/${rki.link}/${item.id}`} style={{width:"100%", padding:"10px"}}>
                          <span style={{fontWeight:'bold'}} className="blendBg">{rki.display}</span>
                          <h3 style={{margin:'4px'}}>{item.name}</h3>
                          {item.description ? item.description.substr(0, 128) : ""} {item.description && item.description.length > 128 ? <span>... [Read More]</span> : ""}
                          
                        </Link>
                        })}
                      </div>
                      : (this.state.searchTerm === "" ?
                        <div className="loader" style={{height:'60px',margin:'20px'}}><img className="loaderImg" src={require('../../../img/yyloader.gif')} /></div>
                        : <div className="failedSearch">Sorry. There are no results for that term.</div>
                      )
                  }
              </div>


            <Pagination pages={this.state.pager.pages} callback={this.goToPage} currentPage={this.state.pager.currentPage} totalPages={this.state.pager.totalPages} />
            <div style={{display: this.state.loading && this.state.kinds.length !== 0 ? "block" : "none"}} className="loader"><img className="loaderImg" src={require('../../../img/yyloader.gif')} /></div>
            <span style={{cursor:'pointer'}} onClick={() => {document.querySelector('#kindSearch').scrollIntoView(true)}}>To Top</span>
      </div>
    }
}


export default Kinds;
