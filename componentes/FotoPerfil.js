import react from "react";
import { Image } from "react-native";

export default function FotoPerfil() {
    return (
        <Image
            source={require('../img/base.jpg')}
            style={{ width: 120, height: 120, borderRadius: 50, marginTop: 10, marginLeft: '36dvw'}}
        />
    );
}