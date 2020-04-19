import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'


class Collections extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { created_kinds, uses_kinds } = this.props.item
    return <div>
         {
        created_kinds.length > 0 ? <h3>Created Collections</h3> : "" }
      {
        created_kinds.length > 0 ?
          created_kinds.map(item => <Link key={item.kind_name} to={`/collections/${item.kind_id}`}>
            {item.kind_name}
          </Link>
          ) : ""
      }

       { uses_kinds.length > 0 ? <h3>Collections Used</h3> : "" }
      {
        uses_kinds.length > 0 ?
          uses_kinds.map(item => <Link key={item.kind_name} to={`/collections/${item.kind_id}`}>{item.kind_name}</Link>) : ""
      }
    </div>
  }
}

export default Collections
