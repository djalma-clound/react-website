import '../Components/links.css'

function Links() {
return (
  <div className="links">
    <ul className="menu-links">
      <a
        className="App-link"
        href="//google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        First item
      </a>
      <a
        className="App-link"
        href="//dj-techs.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        second item
      </a>
      <a
        className="App-link"
        href="//djalmad.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        third item
      </a>
      <a
        className="App-link"
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        my site
      </a>
    </ul>
  </div>
);
}

export default Links;
