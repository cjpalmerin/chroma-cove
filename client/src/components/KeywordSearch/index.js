import React from 'react';
import "./style.css";

function Search(props){
    return (
        <div className="container">
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                value={props.keyword}
                                onChange={props.handleInputChange}
                                type="text"
                                name="title"
                                className="form-control"
                                placeholder="Search Photos by Keyword..."
                            />
                            <button type="submit" onClick={props.handleSubmit}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );

}

export default Search;





