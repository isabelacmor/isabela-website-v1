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
                {/* https://blogs.windows.com/windowsexperience/2017/06/21/announcing-windows-10-insider-preview-build-16226-pc/ */}
                    <a href="https://www.windowscentral.com/how-use-new-edge-favorites-features-windows-10-fall-creators-update" target="_blank">
                        <div id="savefav" className="imageBackground" />
                        <div className="img-caption table">
                            <span className="table-cell">
                                <div className="description">Improved UI for saving favorites in Microsoft Edge</div>
                                <button className="btn btn-p btn-trans" role="button">view</button>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
            <div className="thumbnail">
                <div className="img-container">
                    <a href="https://www.windowscentral.com/how-use-new-edge-favorites-features-windows-10-fall-creators-update" target="_blank">
                        <div id="dragfavbar" className="imageBackground" />
                        <div className="img-caption table">
                            <span className="table-cell">
                                <div className="description">Improved drag and drop experience for favorites across all Edge surfaces</div>
                                <button className="btn btn-p btn-trans" role="button">view</button>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
            <div className="thumbnail">
                <div className="img-container">
                    <a href="https://www.windowscentral.com/how-use-new-edge-favorites-features-windows-10-fall-creators-update" target="_blank">
                        <div id="dragui" className="imageBackground" />
                        <div className="img-caption table">
                            <span className="table-cell">
                                <div className="description">Improved experience for creating favorites by dragging from address bar</div>
                                <button className="btn btn-p btn-trans" role="button">view</button>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
            <div className="thumbnail">
                <div className="img-container">
                    <a href="https://mspoweruser.com/microsoft-edge-updated-with-new-dark-theme-for-windows-10-pcs/" target="_blank">
                        <div id="theme" className="imageBackground" />
                        <div className="img-caption table">
                            <span className="table-cell">
                                <div className="description">Started movement leading to redesign of Edge themes</div>
                                <button className="btn btn-p btn-trans" role="button">view</button>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
            <div className="thumbnail">
                <div className="img-container">
                    <a href="https://github.com/isabelacmor/css-drawings" target="_blank">
                        <div id="marsh" className="imageBackground" />
                        <div className="img-caption table">
                            <span className="table-cell">
                                <div className="description">Drawings made in pure CSS</div>
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
                                <div className="description">Website menu for New Year's Eve cocktail party</div>
                                <button className="btn btn-p btn-trans" role="button">view</button>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
            <div className="thumbnail">
                <div className="img-container">
                    <a href="https://github.com/isabelacmor/sam-bot" target="_blank">
                        <div id="sambot" className="imageBackground" />
                        <div className="img-caption table">
                            <span className="table-cell">
                                <div className="description">Emotionally aware browser extension</div>
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
                            <div className="description">Visual favorites with auto-categorization in Chrome</div>
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