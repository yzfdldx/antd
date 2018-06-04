import React, { Component } from 'react';
import {Menu, Row, Col} from 'antd';
const MenuItem = Menu.Item;


class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedKeys: ['1'],
    };
  }
  componentWillMount() {
    // console.log(this.props)
    if (this.props.location && this.props.location.pathname) {
      const Pathname = this.props.location.pathname;
      if (Pathname.split('/').length < 4) {
        window.location.href = '#index/web/1';
      } else {
        this.setState({
          selectedKeys: [this.props.params.id]
        })
      }
    }
  }
  onSelect = (val) => {
    this.setState({
      selectedKeys: val.selectedKeys
    })
    window.location.href = `#index/web/${val.selectedKeys}`;
  }
  render() {
    const {children} = this.props;
    const {selectedKeys} = this.state;
    return (<div>
      <Row>
        <Col span="24">
          <Menu
            selectedKeys={selectedKeys}
            style={{ lineHeight: '64px' }}
            mode="horizontal"
            onSelect={this.onSelect}
          >
            <MenuItem key="1">
              11
            </MenuItem>
            <MenuItem key="2">
              22
            </MenuItem>
            <MenuItem key="3">
              33
            </MenuItem>
          </Menu>
        </Col>
      </Row>
      <div>{children}</div>
    </div>);
  }
}

// let selectedKeys = ['1'];
// const onSelect = (val) => {
//     // console.log(val);
//     selectedKeys = val.selectedKeys;
//   }

// const App = (e) => {
//   if (e.location && e.location.pathname) {
//     const Pathname = e.location.pathname;
//     // console.log(Pathname, Pathname.split('/'))
//     if (Pathname.split('/').length < 3) {
//       window.location.href = '#index/web';
//     }
//   }
//   console.log(e.params.id)
//   const open = (val) => {
//     // const {children, to, style} = This.props;
//     window.location.href = val;
//     // console.log(this.props);
//   }
//   // const onSelect = (val) => {
//   //   // console.log(val);
//   //   selectedKeys = val.selectedKeys;
//   // }
//   console.log(selectedKeys);
//   return (<div>
//     <Menu
//       selectedKeys={selectedKeys}
//       style={{ lineHeight: '64px' }}
//       mode="horizontal"
//       onSelect={onSelect}
//     >
//       <MenuItem key="1" onClick={open}>
//         11
//       </MenuItem>
//       <MenuItem key="2" onClick={open}>
//         22
//       </MenuItem>
//       <MenuItem key="3" onClick={open}>
//         33
//       </MenuItem>
//     </Menu>
//     <div>{e.children}</div>
//   </div>);
// };

App.propTypes = {
};

export default App;

