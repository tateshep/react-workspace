import React, {Component} from 'react';

// this has to do with Lazy loading. see lecture 244

// Alternatively can use React.lazy. see lecture 245


const asyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            component: null
        }

        //All of this is dependent on how create-react-app sets stuff up
        componentDidMount() {
            importComponent()
                .then(cmp => {
                    this.setState({component: cmp.default});
                });
        }

        render () {
            const C = this.state.component;
            return C ? <C {...this.props} /> : null;
        }
    }
}

export default asyncComponent;