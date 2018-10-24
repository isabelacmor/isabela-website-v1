import * as React from 'react';
import './MainContent.css';

class MainContent extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
        <div>
            <header className="App-header">
                <h1 className="title">Isabela Moreira</h1>
            </header>
            Software engineer making things beautiful and usable at Microsoft.
        </div>
    );
  }
}

export default MainContent;