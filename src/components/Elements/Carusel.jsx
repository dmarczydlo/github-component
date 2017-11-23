import React, {Component} from 'react';

import RepoInfoCarusel from './RepoInfoCarusel';
import getIndex from '../../Utils/getIndex';

class Carusel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
        };
    }

    onNextClick = () => {
        const {repositories} = this.props;
        const active = (this.state.activeIndex + repositories.length - 1) % repositories.length;

        this.setState({
            activeIndex: active,
        });
    };

    onPrevClick = () => {
        const {repositories} = this.props;
        const active = (this.state.activeIndex + 1) % repositories.length;
        this.setState({
            activeIndex: active,
        });
    };

    render() {
        const {repositories} = this.props;
        return (
            <div className="box">
                <div className="button-carusel">
                    <button onClick={this.onPrevClick}><span className="left-arrow" /></button>
                </div>
                <div className="carousel is-steady">
                    {repositories.map((repo, i) => {
                        const props = {repo, i};
                        return (
                            <div
                                key={i}
                                style={{order: getIndex(i, this.state.activeIndex, repositories.length)}}
                                className={`carousel-item  ${i === this.state.activeIndex ? 'is-first' : ''}`}
                            >
                                <RepoInfoCarusel key={i} {...props} />
                            </div>
                        );
                    })}
                </div>
                <div className="button-carusel">
                    <button onClick={this.onNextClick}><span className="right-arrow" /></button>
                </div>
            </div>
        );
    }
}

export default Carusel;
