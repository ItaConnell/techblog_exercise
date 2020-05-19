import React, { useEffect, useState } from 'react';
import * as contentful from 'contentful';
import moment from "moment"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Paper } from "@material-ui/core"

const client = contentful.createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_API_KEY
})

console.log(process.env.REACT_APP_API_KEY)

function App() {
  const [content, setContent] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    client.getEntries().then(entries => {
      console.log(entries.items.filter(item => !!item.fields.isPost))
      setContent(entries.items.filter(item => !!item.fields.isPost))

    })
  }, []
  )

  return (
    <>
      {content.map(entry => {
        return (
          <main>
            {console.log(entry.fields.headerImage.fields.file.url)}
            <Paper variant="outlined" style={{ margin: "1%", width: "60%" }}>
              <div className="blogpost">
                <img src={`${entry.fields.headerImage.fields.file.url}`} alt="" />
                <h2>{entry.fields.postTitle}</h2>
                <p><i>{entry.fields.authors.fields.authorName} on {moment(entry.fields.creationDate).format('MMMM Do YYYY')}</i> </p>
                {documentToReactComponents(entry.fields.postContent)}
              </div>
            </Paper>
          </main>
        )
      })}
    </>
  );
}

export default App;
