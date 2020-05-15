import React, { useEffect, useState } from 'react';
import * as contentful from 'contentful'

const client = contentful.createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_API_KEY
})

console.log(process.env.REACT_APP_API_KEY)

function App() {
  const [content, setContent] = useState([])

  useEffect(() => {
    client.getEntries().then(entries => {
      console.log(entries)
      setContent(entries.items)

    })
  }, []
  )

  return (
    <>
      {content.map(entry => {
        return (
          <div className="blogpost">
            <h2>{entry.fields.commentAuthor}</h2>
            <p>{entry.fields.commentAuthorEmail}</p>
          </div>
        )
      })}
    </>
  );
}

export default App;
