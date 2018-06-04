import React, { Component } from 'react';
import { connect } from 'dva';
// import styles from './example.css';
import './example.less';

// let This;
class IndexPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {

    };
    // This = this;
  }
  componentWillMount() {
    const Props = this.props;
    const { dispatch } = Props;
    // console.log(dispatch);
    dispatch({
      type: 'example/aaa',
      payload: 123,
    });
  }
  render() {
    // console.log(this.props);
    return (<div className="example">
      gvdsfgdfgsfg
    </div>);
  }
}

IndexPage.propTypes = {
};
const IndexPageFn = (model) => {
  const Example = {};
  Example.example = model.example;
  return Example;
};

export default connect()(IndexPage);
