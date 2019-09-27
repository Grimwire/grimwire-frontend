import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';
import { Row, Col } from 'react-bootstrap'

import FormInsert from '../../forms/handler'
import {defaultKind} from '../../../db/defaultObjects'


const curr_user = localStorage.user ? JSON.parse(localStorage.user) : false

class CategoryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: {}
        }
    }

    componentDidMount = () => { this.updatePage() }
    componentWillReceiveProps = (newProps) => { this.updatePage(newProps) }

    updatePage = (props = this.props) => {
        const id = props.match.params.id
        axios
            .get(`http://localhost:4001/api/categories/${id}`)
            .then(res =>
              this.setState({category: res.data})
            )
            .catch(err => console.log(err) );
    }

    render() {
        const item = this.state.category
        return typeof item !== 'undefined' && Object.keys(item).length > 0 ? <div>


            { curr_user ?  <Link to="/categories/new">Create Category</Link> : "" }
            { curr_user ?  <Link to={`/categories/${this.props.match.params.id}/edit`}>Edit This Category</Link> : "" }

            <div className="category-info">
                <h1>{item.category_name} {item.category_number}</h1>
                <p>{item.category_description}</p>
            </div>

            <div className="category-list">
                <Row>
                    <Col lg={8}>
                        <h4>Overview & History</h4>
                        <p>{item.category_overview_text}</p>
                        <h4>Sources & Getting Started</h4>
                        <p>{item.category_sources_text}</p>
                    </Col>
                    <Col lg={4}>
                        <img src={item.thumbnail ? `http://localhost:4001/uploads/${item.thumbnail.image_url}` : ""}  alt={item.pantheon_name} width="250px"/>
                        <h4>Collections</h4>
                        { item.kinds ? item.kinds.map(i => <div><Link key={i.kind_id} to={`/collections/${i.kind_id}`}>{i.kind_name}</Link></div>) : ""}
                    </Col>
                </Row>

            </div>



        </div> : "Loading or not found"

    }
}


export default CategoryPage;
