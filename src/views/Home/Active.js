import React, { useState } from 'react';
import '../../App.css';

export default function Active(){
    const [active, setActive] = useState(false);

    const handleOnChange = () => {
        setActive(!active);
      };

    return(
    <>
    <div className="switchWrapper">
        <label className="switch">
            <input
            type="checkbox"
            id="isActive"
            value="Valor"
            checked={active}
            onChange={handleOnChange}
            />
            <span className="slider round"></span>
        </label>
        <h3>Modo Acompañante</h3>
    </div>
    </>
    );
}