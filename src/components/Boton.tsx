import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'

//Recibe el dato/texto que va dentro del boton  y el color del mismo
interface Props {
    text: string;
    color?: string;
    ancho?: boolean;
}

//se desestructura la interface anterior
export const Boton = ({ text, color = '#2D2D2D', ancho = false }: Props) => {
  return (
    //se agrega el touch
    <TouchableOpacity>
      {/* //Se aplica el cambio dinamico de color a loas botones */}
    <View style={{ ...styles.boton
    , backgroundColor: color
    , width: (ancho) ? 180 : 80 }}>
        <Text style={{ ...styles.botonTexto, 
                      color: ( color === '#9B9B9B') ? 'black' : 'white'}}>
            { text }
        </Text>
    </View> 
    </TouchableOpacity>
    
  )
}
