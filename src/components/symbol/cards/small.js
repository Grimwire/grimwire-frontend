import React from 'react'
import {Link} from 'react-router-dom';


function SmallPantheonCard(props) {
    const item = props.symbol
    const style = {
        width: '200px', marginLeft:'10px', marginRight:'10px', 
        marginBottom: '10px',
    }
    return <div style={style}><Link className="blockLink" to={`/symbols/${item.symbol_id}`} style={{height:"100%"}}>


            <h5>{item.kind_name}</h5>
            <h3>{ item.symbol_name }</h3>
            <h6>{item.symbol_description ? item.symbol_description : ""}</h6>
    </Link></div>
}

export default SmallPantheonCard
