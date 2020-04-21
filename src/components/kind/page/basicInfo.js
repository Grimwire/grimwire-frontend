import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'


const curr_user = localStorage.user ? JSON.parse(localStorage.user) : false


class BasicInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const item = this.props.item

    return <div>
      <div className="text-container">
      {false ? <img src={item.thumbnail.image_url} alt={item.kind_name} height="100px" /> : ""}
      <br /><h1>{item.kind_name}</h1><br />
      {item.health_warning ? <h3 className="health-warning">WARNING: {item.health_warning}</h3> : ""}
      
      <p>{item.kind_description ? <div>
                <b>What are {item.kind_name}? 
                <span style={{display:'none'}}>What does {item.kind_name} stand for? What are the different {item.kind_name}?</span></b>
                <p><i>{item.kind_description}</i></p>
                </div> : "Coming Soon"}</p>
<br />

      {this.props.children}

      

    </div>
    </div>
  }
}

export default BasicInfo
