import React from 'react'
import ListItemKindCard from '../cards/listItem'
import {CSSTransition, SwitchTransition} from 'react-transition-group'
import {Row, Col} from 'react-bootstrap'

function SimpleKindList(props) {
    const style = {
    }
    //a key is created by appending each id onto each other, creating at most a length-60 string, up to 100,000 entries
    const renderKey = props.kinds.length > 1 ? props.kinds.reduce((sum, item) => { return `${sum}${item.kind_id}`}) : "0"

    return <SwitchTransition><CSSTransition key={renderKey}
      in={true} timeout={150} classNames="search-page" unmountOnExit>
      <div style={style} key={renderKey}>
          
      <Row>
        { props.kinds.map(item =>
            <Col lg={6}><ListItemKindCard key={item.name} kind={item} /></Col>
        )}
        </Row>
    </div>
    </CSSTransition></SwitchTransition>
}

export default SimpleKindList
