import * as React from 'react';
import './MainContent.css';

import Gallery from './Gallery';
import githubLogo from './images/github-logo.svg';
import linkedinLogo from './images/linkedin-logo.svg';
import twitterLogo from './images/twitter-logo.svg';

class MainContent extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
        <div id="Component-MainContent">
            <div className="App-header">
                <h1 className="title">Isabela Moreira</h1>
            </div>
            <div id="tag">Software engineer making things beautiful and usable at Microsoft.</div>

            <div id="connect" className="sibling-fade">
                <a href="https://github.com/isabelacmor" target="_blank">
                    <img src={githubLogo} className="logoImage" />
                </a>
                <a href="https://twitter.com/isabelacmor" target="_blank">
                    <img src={twitterLogo} className="logoImage" />
                </a>
                <a href="https://www.linkedin.com/in/isabela-moreira" target="_blank">
                    <img src={linkedinLogo} className="logoImage smaller" />
                </a>
            </div>

            <div id="mainLHS">
                <Gallery />
            </div>
        </div>
    );
  }
}

export default MainContent;