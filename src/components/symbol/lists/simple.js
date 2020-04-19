import React from 'react'
import SmallSymbolCard from '../cards/small'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

function SimpleSymbolList(props) {
    const style = {
        display: "flex",
        flexWrap: 'wrap',
        justifyContent: 'center',
        position: 'relative',
        marginBottom:'50px'
    }

    const breadStyle = { 
        position: 'absolute', 
        left: '10px', 
        background: '',
        marginLeft: '-48px',
        width: '48px'
    }


    //a key is created by appending each id onto each other, creating at most a length-60 string, up to 100,000 entries
    const renderKey = props.symbols.length > 1 ? props.symbols.reduce((sum, item) => { return `${sum}${item.symbol_id}` }) : "0"

    let lastLetter = ''

    return <SwitchTransition><CSSTransition key={renderKey}
        in={true} timeout={150} classNames="search-page" unmountOnExit>
        <div style={style} key={renderKey}>
            {props.symbols.length > 0 ? props.symbols.map(item =>

                <>
                <div style ={{
    }}>
                    {
                        //Random check to see if the length is greater than 50 in order to display "bread crumbs"
                        lastLetter != item.symbol_name[0] && props.symbols.length > 50 ?
                            <div style={breadStyle}>
                                <h3>{lastLetter = item.symbol_name[0]} 
                                    &nbsp;<span style={{color:'#558'}} className='fas fa-long-arrow-alt-down'></span></h3>
                            </div>
                            : null
                    }
                    </div>
                    <SmallSymbolCard symbol={item} key={item.symbol_name} />
                </>

            ) : "There are no results."}
        </div></CSSTransition></SwitchTransition>
}

export default SimpleSymbolList
