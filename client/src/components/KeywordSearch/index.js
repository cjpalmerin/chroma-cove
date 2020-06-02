import React from 'react';
import "./style.css";
import API from '../../utils/API';

class keywordSearch extends React.Component {

    state = {
        photos: [],
        keyword: ""
    }

    componentDidMount() {
        console.log("component mounted")
    }

    handleInputChange = (event) => {
        this.setState({
            keyword: event.target.value
        })
        
    }

    handleSubmit = (event) => {
        event.preventDefault()
        API.keywordSearch(this.state.keyword).then(data => {
            this.setState({
                photos: data.data
            })
        })
    }

    render() {
    return (
        <div className="container">
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                        <input type="text" name="title" className="form-control" placeholder="Search Photos by Keyword..." value={this.state.keyword} onChange={this.handleInputChange} />
                            {/* <textarea id="textarea1" className="materialize-textarea"></textarea>
                            <label htmlFor="textarea1">Search Photos by Keyword</label> */}
                            <button type="submit" onClick={this.handleSubmit}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
}
}

export default keywordSearch;





