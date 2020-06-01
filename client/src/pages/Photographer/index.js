import React from 'react';
import "./style.css";

function PhotographerPage() {
    return (
        <div className="container">
            <div className="uk-card uk-card-default uk-width-1-1@m">
                    <div className="uk-card-header">
            {/* <a className="btn-floating btn-small waves-effect waves-light"><i className="material-icons" width="40" height="40">♡</i></a> */}
            <div className="uk-grid-large uk-flex-middle" uk-grid>
                <div className="row photographer-info">
                    <div className="col s2">
                        <div className="uk-width-auto">
                            <img className="uk-border-circle" width="100" height="100" src="https://picsum.photos/200" alt="preview"/>
                        </div>
                    </div>
                    <div className="col s8">
                        <div className="uk-width-expand photographer-title">
                            <h3 className="uk-card-title uk-margin-remove-bottom name">Photographer Name</h3>
                            <p className="uk-text-meta uk-margin-remove-top">@username</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies a ipsum venenatis egestas. Sed tristique convallis metus eget consequat.</p>
                        </div>
                    </div>
                </div>
                
                        <div className="row">
                            <div className="uk-child-width-1-3@m" uk-grid uk-lightbox="animation: slide">
                                <div className="col s6 m4">
                                    {/* <a className="uk-inline" href="https://picsum.photos/200" data-caption="Caption 1"> */}
                                        <img src="https://picsum.photos/700/500" alt="preview" />
                                    {/* </a> */}
                                </div>
                                <div className="col s6 m4">
                                    {/* <a className="uk-inline" href="https://picsum.photos/200" data-caption="Caption 1"> */}
                                        <img src="https://picsum.photos/700/500" alt="preview" />
                                    {/* </a> */}
                                </div>
                                <div className="col s6 m4">
                                    {/* <a className="uk-inline" href="https://picsum.photos/200" data-caption="Caption 1"> */}
                                        <img src="https://picsum.photos/700/500" alt="preview" />
                                    {/* </a> */}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default PhotographerPage;





