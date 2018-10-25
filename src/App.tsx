import * as React from 'react';
import './App.css';

import MainContent from './MainContent';
import Timeline from './Timeline';

class App extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className="columnsContainer">
        <div className="leftColumn">
            <MainContent />
        </div>

        <div className="rightColumn">
          <Timeline />
        </div>
  	</div>
    );
  }
}

export default App;