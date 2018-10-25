import * as React from 'react';
import './Gallery.css';

class Gallery extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
        <div id="Component-Gallery">
            <div className="thumbnail">
                <div className="img-container">
                    <a href="https://github.com/isabelacmor/css-drawings" target="_blank">
                        <div id="marsh" className="imageBackground" />
                        <div className="img-caption table">
                            <span className="table-cell">
                                <button className="btn btn-p btn-trans" role="button">view</button>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
            <div className="thumbnail ">
                <div className="img-container">
                    <a href="https://github.com/isabelacmor/mimosabar" target="_blank">
                        <div id="mimosa" className="imageBackground" />
                        <div className="img-caption table">
                            <span className="table-cell">
                                <button className="btn btn-p btn-trans" role="button">view</button>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
            <div className="thumbnail">
                <div className="img-container">
                    <div id="savefav" className="imageBackground" />
                    <div className="img-caption table">
                        <span className="table-cell">
                            <button className="btn btn-p btn-trans" role="button">view</button>
                        </span>
                    </div>
                </div>
            </div>
            <div className="thumbnail">
                <div className="img-container">
                    <a href="https://github.com/isabelacmor/sam-bot" target="_blank">
                        <div id="sambot" className="imageBackground" />
                        <div className="img-caption table">
                            <span className="table-cell">
                                <button className="btn btn-p btn-trans" role="button">view</button>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
            <div className="thumbnail">
                <div className="img-container">
                    <div id="visualfav" className="imageBackground" />
                    <div className="img-caption table">
                        <span className="table-cell">
                            <button className="btn btn-p btn-trans" role="button">view</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Gallery;