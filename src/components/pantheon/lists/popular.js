import React from 'react'
import SmallPantheonCard from '../cards/small'
import axios from 'axios';

//This component is used to build a 'complete' list, used for calling searches and passing props to the actual list component.

class PopularPantheonList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          pantheons: []
        }
    }

    componentDidMount = () => {
      axios
          .get('https://grimwire.herokuapp.com/api/pantheons')
          .then(res =>
            this.setState({pantheons: res.data.pageOfItems})
          )
          .catch(err => console.log(err) );
    }

    render() {
      const style = {
          display: "flex",
          justifyContent: 'center',
          overflow: "hidden"
      }

      return <div>
        <h3>Popular Pantheons</h3>
        <div style={style}>
          { this.state.pantheons.map(item =>
            <SmallPantheonCard key={item.pantheon_name} pantheon={item} />
          )}
        </div>
      </div>
    }
}

export default PopularPantheonList
