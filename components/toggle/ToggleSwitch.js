import { Component } from 'react';
import styles from './toggleSwitch.module.css';
import Switch from 'react-switch';


class ToggleSwitch extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <>
        <Switch
        onChange={this.handleChange}
        checked={this.state.checked}
        uncheckedIcon={false}
        checkedIcon={false}
        onColor="#46474a"
        offColor="#FF7B0F"
        />
      </>
    );
  }
}

export default ToggleSwitch;
