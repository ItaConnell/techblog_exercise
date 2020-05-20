import React, { useEffect, useState } from 'react';
import * as contentful from 'contentful';
import ContentStream from "./components/ContentStream";
import { Route, Switch, Redirect } from "react-router-dom";
import Entry from "./components/Entry"

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
      setAuthors(entries.items.filter(item => !!item.fields.isAuthor))
      setContent(entries.items.filter(item => !!item.fields.isPost))
      console.log(entries.items.filter(item => !!item.fields.isPost))

    })
  }, []
  )

  return (
    <main>
      <Switch>
        <Route path="/:slug" render={props => <Entry {...props} content={content} />} />
        <Route exact path="/" render={props => <ContentStream {...props} content={content} authors={authors} />} />
        <Redirect to="/" />
      </Switch>

    </main>
  );
}

export default App;
