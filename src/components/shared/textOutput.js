import React from 'react'

export default function TextOutput(props) {
    const { text, title } = props
    let returnValue = null;

    if (text) {
        if (!(text.substr(0, 11) === ('Lorem ipsum'))) {
            returnValue = text.split('\n').map(line => {
                switch (line[0]) {
                    case ">":
                        return <h4>{line.substr(1)}</h4>
                    default:
                        return <p>{line}</p>
                }
            })
        }
    }
    if (text.substr(0, 10) === 'Lorem ipsum') {

    }

    return returnValue ? <div className="text-block">
        <h3 className="text-block-title">{title}</h3>
        <div className="text-block-content">{returnValue}</div>
    </div> : ""

}
