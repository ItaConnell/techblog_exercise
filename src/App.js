import React, { useEffect, useState } from 'react';
import * as contentful from 'contentful'

const client = contentful.createClient({
  space: '2qe6xgfwyxeo',
  accessToken: '1QCB1pBKDFHSOQCxVAscDr5FxGa1JqP4eNXdjrcf0WI'
})

function App() {
  const [content, setContent] = useState([])

  useEffect(() => {
    client.getEntries().then(entries => {
      console.log(entries)

    })
  }, []
  )

  return (
    <>
      {content.map(entry => {
        return (
          <div className="blogpost">
            <h2>{entry.fields.title}</h2>
            <p>{entry.fields.content.content[0].content[0].value}</p>
          </div>
        )
      })}
    </>
  );
}

export default App;
