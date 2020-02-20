import React from 'react'
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap'


function SmallPantheonCard(props) {
      const item = props.pantheon

      const image_thumb = (link) => {
            const linkArr = link.split('/')
            linkArr.splice(linkArr.length - 2, 1, 'w_800')
            return linkArr.join('/')
      }

      return <Link to={`/pantheons/${item.pantheon_id}`} style={{ backgroundImage: `url(${item.image_url ? image_thumb(item.image_url) : null})` }} className='blockLink pantheonStyleLink'>
            <Row style={{ width: '100%', height: '100%', marginLeft: '0' }}>
                  <Col lg={3} xs={12} style={{padding:'0'}}>
                        <h3 className="pantheonStyleName">{item.pantheon_name}</h3>
                  </Col>
                  <Col lg={9} xs={12} style={{padding:'0'}}>
                        <p className="pantheonStyleText">
                              {item.start_year < 0 ? item.start_year * -1 + "BC" : item.start_year + "AD"} -
                        {item.end_year < 0 ? item.end_year * -1 + "BC" : (item.end_year === 2100 ? "Present" : item.end_year + "AD")}<br />
                              {item.pantheon_description}
                        </p>
                  </Col>
            </Row>
      </Link>
}

export default SmallPantheonCard
