import { useState } from 'react';
import hexToRGB from './hexToRGB';

export default function ConverterColor() {
  const [rgb, setRgb] = useState({color: ''});

  const showTextAndColor = (color) => {
    setRgb({color});
    document.body.style.backgroundColor = color;
  }

  const handleInput = ({ target }) => {
    if (target.value.length < 7) {
      setRgb({color: ''});
      return null;
    } else if (!target.value.startsWith('#') || target.value.length > 7) {
      setRgb({color: 'Ошибка!'});
      return null;
    }

    const value = target.value.slice(1);
    const converted = hexToRGB(value);
    converted !== null ? showTextAndColor(converted) : setRgb({color: 'Ошибка!'});
  };

  return (
    <div className="input-output-div">
      <input className="input-div" type="text" onChange={handleInput} />
      <div>{rgb.color}</div>
    </div>
  );
}
