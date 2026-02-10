import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

class BorderExample extends React.Component {

  componentWillUnmount() {
    console.log("Spinner component unmounted");
  }

  render() {
    return <Spinner animation="border" />;
  }
}

export default BorderExample;

