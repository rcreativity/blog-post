import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div>
                <input type="text" onChange={(e) => {
                    this.props.searchresultfromchild(e.target.value);
                    }
                }/>
            </div>
        );
    }
}

export default Search;