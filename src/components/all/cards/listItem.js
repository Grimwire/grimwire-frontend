import React from 'react'
import {Link} from 'react-router-dom';


function SmallKindCard(props) {
    const item = props.kind
    const style = {
        width: ''
    }

    const image_thumb = (link) => {
        const linkArr = link.split('/')
        linkArr.splice(linkArr.length-2, 1, 'w_800')
        return linkArr.join('/')
      }

    return <Link style={{backgroundImage:`url(${item.image_url ? image_thumb(item.image_url) : null})`}} to={`/collections/${item.kind_id}`}>
        

            <h3 className='kindStyleName'>{ item.name }</h3>
            <p className='kindStyleText'>{ item.description }</p>

    </Link>
}

export default SmallKindCard
