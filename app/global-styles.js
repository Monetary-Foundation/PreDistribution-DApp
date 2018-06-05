import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #f8f8f8;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }


  body {
    text-align: left;
  }
  
  hr {
    width: 92%;
    text-align:center !important;
    margin: 0 auto !important;
  }

  .react-count-down {
    margin: 0;
    /* padding: 2em; */
  }

  .react-count-down .prefix {
  font-size: 300%;
  font-weight: 200;
  line-height: 1.5;
  color: #03CC85;  
  }

  .react-count-down .date {
  font-size: 2.5em;
  font-weight: 200;
  line-height: 1.5;
  color: #666;
  }
`;
