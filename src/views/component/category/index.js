import React from 'react';

import Categories from '../../../components/category/index/index'
import FormInsert from '../../../components/forms/handler'
import {defaultCategory} from '../../../db/defaultObjects'
import {Link} from 'react-router-dom'
import {CSSTransition, SwitchTransition} from 'react-transition-group'

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
    }
  }


  render() {
    const curr_user = localStorage.user ?  JSON.parse(localStorage.user) : false
  return (<SwitchTransition><CSSTransition key={`categories`}
    in={true} timeout={350} classNames="whole-page" unmountOnExit appear enter exit><div className="">
    <div key='categories' className="midCTA">
        <div className="container">
          <h4>Making finding related information easier.</h4>
          <h1>Categories & Classes</h1>
          <h5>Conveinient categories combined to make complete topics easier to see all at once.</h5>

                        { curr_user ?  <Link to="/categories/new">+ Create New Category</Link> : "" }
        </div>
      </div>
      <div className="divider"></div>
      <div className="pageDarkSection">
      <Categories />
      </div>
      <div className="reverse-divider"></div>

            </div></CSSTransition></SwitchTransition>
  );

  }
}

export default Category;
