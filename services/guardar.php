<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

$data = json_decode(file_get_contents('php://input'));

if ($data->nombreUsuario) {
    $usuarioExiste = false;

    if (file_exists('data/users.dat'))
        $aUsuarios = json_decode(file_get_contents('data/users.dat'), true);
    else
        $aUsuarios = array();

    if (isset($aUsuarios)) {
        foreach ($aUsuarios as $usuario) {
            if (!$usuarioExiste) {
                if ($usuario["nombre"] == $data->nombreUsuario) {
                    $usuarioExiste = true;
                }
            }
        }
    } else {
        $aUsuarios = array();
    }

    if ($usuarioExiste) {
        $response["code"] = 400;
        $response["msg"] = "Usuario ya existente.";
        echo json_encode($response);
    } else {
        $datos = array(
            "nombre" => $data->nombreUsuario
        );
        array_push($aUsuarios, $datos);
        file_put_contents('data/users.dat', json_encode($aUsuarios));
        $response["code"] = 200;
        $response["msg"] = "El usuario fue insertado con éxito.";
        echo json_encode($response);
    }
} else {
    $response["code"] = 400;
    $response["msg"] = "Debe ingresar datos válidos.";
    echo json_encode($response);
}
