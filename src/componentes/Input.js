import React from 'react';

export default function Input({ etiqueta, tipo, funcion, labelColor }) {
    return (
        <div>
            <label style={{ color: labelColor }}>{etiqueta}: </label>
            <input type={tipo} onChange={funcion} />
        </div>
    );
}