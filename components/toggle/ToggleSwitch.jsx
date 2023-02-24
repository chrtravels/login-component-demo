import { useState } from 'react';
import Switch from 'react-switch';
import { useTheme } from '../../hooks/useTheme';


const ToggleSwitch = () => {
  const [checked, setChecked] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

  function handleChange() {
    checked ? setChecked(false) : setChecked(true);
    toggleDarkMode();
  }

  return (
    <>
      <Switch
      onChange={handleChange}
      checked={checked}
      uncheckedIcon={false}
      checkedIcon={false}
      onColor="#FF7B0F"
      offColor="#46474a"
      />
    </>
  );
}

export default ToggleSwitch;
