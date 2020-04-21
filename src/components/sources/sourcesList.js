import React from 'react'

const SourcesList = (props) => {
  const sources = props.item.sources

  return sources.length > 0 ? <div><div className="divider" /><div className="text-container">
    <h3>Sources</h3>
    <p>A list of articles & links we used to help write this page</p>
    {
      sources.map((source, i) => <a target="_blank" href={source.source_link}>
        <p>#{i+1}. <u>{source.source_article_title}</u>, <b>{source.source_title}</b> (External Link)</p>
      </a>)
    }<br /><br /><br />
  </div><div className="reverse-divider" /></div> : ""

}

export default SourcesList
