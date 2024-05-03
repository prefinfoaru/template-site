import React, {Component} from 'react';
import windowSize from 'react-window-size';
import Aux from "../../../../../../hoc/_Aux";

class NavSearch extends Component {
    state = {
        searchWidth: (this.props.windowWidth < 992) ? 90 : 0,
        searchString: (this.props.windowWidth < 992) ? '90px' : '',
        isOpen: (this.props.windowWidth < 992)
    };

    searchOnHandler = () => {
        this.setState({isOpen: true});
        const searchInterval = setInterval(() => {
            if (this.state.searchWidth >= 91) {
                clearInterval(searchInterval);
                return false;
            }
            this.setState(prevSate => {
                return {
                    searchWidth: prevSate.searchWidth + 15,
                    searchString: prevSate.searchWidth + 'px'
                }
            });
        }, 35);
    };

    searchOffHandler = () => {
        const searchInterval = setInterval(() => {
            if (this.state.searchWidth < 0) {
                this.setState({isOpen: false});
                clearInterval(searchInterval);
                return false;
            }
            this.setState(prevSate => {
                return {
                    searchWidth: prevSate.searchWidth - 15,
                    searchString: prevSate.searchWidth + 'px'
                }
            });
        }, 35);
    };

    render() {
        return (
            <Aux>
                <div id="main-search" className="main-search open">
                    <div className="input-group">
                        <input type="text" id="m-search" className="form-control" placeholder="Search . . ." style={{width: '130px'}}/>
                        <span className="input-group-append search-btn btn btn-primary">
                        <i className="feather icon-search input-group-text"/>
                    </span>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default windowSize(NavSearch);