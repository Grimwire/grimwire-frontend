import React from 'react'
import { Link } from 'react-router-dom'

class BasicInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const item = this.props.item

    return <div>
      {/*<img src={item.thumbnail ? item.thumbnail.image_url : ""}  alt={item.pantheon_name} width="100px"/>*/}
      <br /><h1>{/*item.order_number ? item.order_number + ". " : ''*/}{item.symbol_name}</h1>
<br/>
      <div style={{ padding: "10px" }}>
        <p>{item.symbol_description ? <div>
          <b>What is the meaning of {item.symbol_name}? What does it stand for?
                <span style={{ display: 'none' }}>What does {item.symbol_name} stand for? What are {item.symbol_name}'s uses?</span></b>
          <p><i>{item.symbol_description}</i></p><br />
        </div> : "Coming Soon"}</p><br />
        <p>{item.symbol_name} is part of a list of {item.kind.kind_name}<Link to={`/collections/${item.kind.kind_id}`}>(Click here to see more {item.kind.kind_name})</Link></p>
        <br />{item.health_warning ? <h3 className="health-warning">WARNING: {item.health_warning}</h3> : ""}


      </div>
      <div className="divider"></div>

      <div className='pageDarkSection' style={{ padding: "10px" }}>
        <h2>Additional Information</h2>
        {item.kindSymbolConnection.length > 0 ?
          <h4>Related Lists</h4> : ""}

        {
          item.kindSymbolConnection.map(ksc => <span>
            <Link to={`/collections/${ksc.kind_id}`}>{ksc.kind_name}</Link>
          </span>)
        }


        <i>{item.other_spellings ? `Also Spelled: ${item.other_spellings}` : ""} </i>
        {item.pantheons.length > 0 ?
          <p>Used by: {item.pantheons.map(i => <Link key={i.id} to={`/pantheons/${i.pantheon_id}`}> {i.pantheon_name} </Link>)}</p>
          : ""}

        {item.extra_info && Object.entries(item.extra_info).length > 0 ? <div>
          <hr />
          {Object.entries(item.kind.default_extra_info).map(infoEntry =>
            <div key={infoEntry[0]} >
              <b>{infoEntry[0].replace(/_/g, ' ').replace(/(?: |\b)(\w)/g, function (key) { return key.toUpperCase() })}</b><br /> {item.extra_info[infoEntry[0]]}<br /><br />
            </div>)} </div> : ""}

</div>

      </div>
  }
}

export default BasicInfo
