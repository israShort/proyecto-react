export const guardar = async (nombre) => {
    const response = await fetch(`http://localhost/services/guardar.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            nombreUsuario: nombre
        })
    });
    let data = await response.json();
    return data;
}