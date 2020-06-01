import React from 'react';
import "./style.css";

function keywordSearch() {
    return (
        <div className="container">
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea"></textarea>
                            <label htmlFor="textarea1">Search Photos by Keyword</label>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default keywordSearch;





