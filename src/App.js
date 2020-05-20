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
          <div id="content-containter">
            <nav class="navbar navbar-inverse">
              <div class="container-fluid">
                <div class="navbar-header">
                  <div class="navbar-brand">TechnoNerds</div>
                </div>
                  <ul class="nav navbar-nav">
                    <li class="active"><a href="#">Home</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Sort By</a></li>
                  </ul>
                  <form class="navbar-form navbar-left" action="/action_page.php">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="Search" name="search"></input>
                      <div class="input-group-btn">
                        <button class="btn btn-default" type="submit">
                          <i class="glyphicon glyphicon-search"></i>
                        </button>
                      </div>
                    </div>
                  </form>
              </div>
            </nav>
          </div>

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
