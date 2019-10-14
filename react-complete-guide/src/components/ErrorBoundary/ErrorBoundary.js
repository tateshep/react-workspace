import React, { Component } from 'react';

// Only use error boundaries for cases that you know might fail in production, and you want to show a custom message

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error,info) => {
        this.setState({
            hasError: true,
            errorMessage: error,
        });
    }
    render() {
        if (this.state.hasError) {
            return <h1>{this.state.errorMessage }</h1>
        } else {
            return this.props.children;
        }
        
    }
}

export default  ErrorBoundary;
