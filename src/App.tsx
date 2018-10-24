import * as React from 'react';
import Scrollchor from "react-scrollchor";
import './App.css';

import MainContent from './MainContent';
import Timeline from './Timeline';

class App extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className="App mainBackground">
        <div id="main">
          <MainContent />
          <Timeline />
        </div>

         <div id="top">
          <ul>
              <li><Scrollchor to="#two">Scroll to Section Two</Scrollchor></li>
              <li><Scrollchor to="three">Scroll to Section Three</Scrollchor></li>
          </ul>
          <h1 id="one">Section One</h1>
          <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies, orci nec luctus feugiat, purus nunc pretium tortor, et consectetur ante metus nec lectus. Aenean et tempus lorem. Donec pulvinar mollis nisl, eget interdum elit sollicitudin quis. Aliquam erat volutpat. Sed porta ipsum vel condimentum sollicitudin. Ut nunc sem, commodo vel augue laoreet, congue commodo nunc. Quisque at posuere lorem. Donec a molestie tortor, a sodales mauris. Nulla vel gravida leo. Praesent mi arcu, sagittis vitae lorem quis, ultrices dignissim eros. Nunc a nunc id diam laoreet sodales. Proin ac nisl blandit velit volutpat suscipit sit amet eu justo. Fusce sed ipsum ante. Morbi dui metus, viverra eget consequat sed, mattis in quam.

Fusce sed risus auctor, pulvinar diam a, feugiat eros. Integer faucibus vel leo quis eleifend. Sed volutpat vel sapien non imperdiet. Nam at cursus lectus, ac vestibulum nisl. Curabitur ullamcorper neque at magna elementum accumsan. Sed condimentum, velit dapibus posuere finibus, orci sem pretium odio, vitae pharetra lacus metus eget sem. Etiam feugiat cursus turpis, quis elementum ante auctor vitae. Donec a tellus vel est tempus pharetra quis sed diam. Phasellus at bibendum nunc, at malesuada lectus. Pellentesque eget elementum magna. Suspendisse egestas pulvinar suscipit. Morbi vulputate lectus sed nisl eleifend, sed aliquam erat efficitur.

Ut porta nunc quis sollicitudin malesuada. Sed eu metus tempus, lobortis nisl quis, porta nisi. Nam auctor eros sed orci bibendum, vitae consequat purus egestas. Fusce ut leo tempor, auctor eros vel, molestie risus. Aenean efficitur aliquet ornare. Sed ut accumsan magna, nec hendrerit nisl. Etiam viverra vulputate magna vel gravida. Sed faucibus, dui in elementum luctus, sapien urna scelerisque mauris, ut aliquet risus dui a lectus. Etiam nisl dolor, finibus sagittis orci ut, ullamcorper interdum magna. Ut vulputate aliquet mi, at ullamcorper ligula auctor quis.
          </div>

          <h1 id="two">Section Two</h1>
          <p><Scrollchor to="#top">Top</Scrollchor></p>
          <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies, orci nec luctus feugiat, purus nunc pretium tortor, et consectetur ante metus nec lectus. Aenean et tempus lorem. Donec pulvinar mollis nisl, eget interdum elit sollicitudin quis. Aliquam erat volutpat. Sed porta ipsum vel condimentum sollicitudin. Ut nunc sem, commodo vel augue laoreet, congue commodo nunc. Quisque at posuere lorem. Donec a molestie tortor, a sodales mauris. Nulla vel gravida leo. Praesent mi arcu, sagittis vitae lorem quis, ultrices dignissim eros. Nunc a nunc id diam laoreet sodales. Proin ac nisl blandit velit volutpat suscipit sit amet eu justo. Fusce sed ipsum ante. Morbi dui metus, viverra eget consequat sed, mattis in quam.

Fusce sed risus auctor, pulvinar diam a, feugiat eros. Integer faucibus vel leo quis eleifend. Sed volutpat vel sapien non imperdiet. Nam at cursus lectus, ac vestibulum nisl. Curabitur ullamcorper neque at magna elementum accumsan. Sed condimentum, velit dapibus posuere finibus, orci sem pretium odio, vitae pharetra lacus metus eget sem. Etiam feugiat cursus turpis, quis elementum ante auctor vitae. Donec a tellus vel est tempus pharetra quis sed diam. Phasellus at bibendum nunc, at malesuada lectus. Pellentesque eget elementum magna. Suspendisse egestas pulvinar suscipit. Morbi vulputate lectus sed nisl eleifend, sed aliquam erat efficitur.

Ut porta nunc quis sollicitudin malesuada. Sed eu metus tempus, lobortis nisl quis, porta nisi. Nam auctor eros sed orci bibendum, vitae consequat purus egestas. Fusce ut leo tempor, auctor eros vel, molestie risus. Aenean efficitur aliquet ornare. Sed ut accumsan magna, nec hendrerit nisl. Etiam viverra vulputate magna vel gravida. Sed faucibus, dui in elementum luctus, sapien urna scelerisque mauris, ut aliquet risus dui a lectus. Etiam nisl dolor, finibus sagittis orci ut, ullamcorper interdum magna. Ut vulputate aliquet mi, at ullamcorper ligula auctor quis.
          </div>

          <h1 id="three">Section Three</h1>
          <p><Scrollchor to="#top">Top</Scrollchor></p>
          <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies, orci nec luctus feugiat, purus nunc pretium tortor, et consectetur ante metus nec lectus. Aenean et tempus lorem. Donec pulvinar mollis nisl, eget interdum elit sollicitudin quis. Aliquam erat volutpat. Sed porta ipsum vel condimentum sollicitudin. Ut nunc sem, commodo vel augue laoreet, congue commodo nunc. Quisque at posuere lorem. Donec a molestie tortor, a sodales mauris. Nulla vel gravida leo. Praesent mi arcu, sagittis vitae lorem quis, ultrices dignissim eros. Nunc a nunc id diam laoreet sodales. Proin ac nisl blandit velit volutpat suscipit sit amet eu justo. Fusce sed ipsum ante. Morbi dui metus, viverra eget consequat sed, mattis in quam.

Fusce sed risus auctor, pulvinar diam a, feugiat eros. Integer faucibus vel leo quis eleifend. Sed volutpat vel sapien non imperdiet. Nam at cursus lectus, ac vestibulum nisl. Curabitur ullamcorper neque at magna elementum accumsan. Sed condimentum, velit dapibus posuere finibus, orci sem pretium odio, vitae pharetra lacus metus eget sem. Etiam feugiat cursus turpis, quis elementum ante auctor vitae. Donec a tellus vel est tempus pharetra quis sed diam. Phasellus at bibendum nunc, at malesuada lectus. Pellentesque eget elementum magna. Suspendisse egestas pulvinar suscipit. Morbi vulputate lectus sed nisl eleifend, sed aliquam erat efficitur.

Ut porta nunc quis sollicitudin malesuada. Sed eu metus tempus, lobortis nisl quis, porta nisi. Nam auctor eros sed orci bibendum, vitae consequat purus egestas. Fusce ut leo tempor, auctor eros vel, molestie risus. Aenean efficitur aliquet ornare. Sed ut accumsan magna, nec hendrerit nisl. Etiam viverra vulputate magna vel gravida. Sed faucibus, dui in elementum luctus, sapien urna scelerisque mauris, ut aliquet risus dui a lectus. Etiam nisl dolor, finibus sagittis orci ut, ullamcorper interdum magna. Ut vulputate aliquet mi, at ullamcorper ligula auctor quis.
          </div>
        </div>
      </div>
    );
  }
}

export default App;