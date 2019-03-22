import React, { Component } from 'react';

class child extends Component {

    state = { cachedSomeProp: null };

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            cachedSomeProp: nextProps.title,
        }
    }

    render() {
        // console.log(this.state.cachedSomeProp);
        const { id, title, body } = this.props;
        return (
            <div className="col-md-4" key={id}>
                    <div className="card">
                    <div className="card-body">
                        {
                            this.state.cachedSomeProp ?
                                     <h5 className="card-title">cachec : {this.state.cachedSomeProp}</h5>
                                :
                                    <h5 className="card-title">{title}</h5>

                        }
                          
                          <p className="card-text">{body}</p>
                          <a href="/" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
            </div>
        );
    }
}

export default child;