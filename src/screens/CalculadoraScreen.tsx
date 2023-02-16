import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { Boton } from '../components/Boton'


export const CalculadoraScreen = () => {

    const [numeroAnterior, setNumeroAterior] = useState('0');
    const [numero, setNumero] = useState('0');

    const limpiar = () => {
        setNumero('0');
    }

    const del = () => {
        // setNumero( numero  numero.lastIndexOf )
        if (numero.length === 1) {
            setNumero('0')
        } else {
            setNumero(numero.slice(0, (numero.length - 1)))
        } 
        
    }

    const armarNumero = ( numeroTexto: string ) => {
        //Verificar si ya existe un punto decimal
        if ( numero.includes('.') && numeroTexto === '.') return;

        if( numero.startsWith('0') || numero.startsWith('-0')) {
            // Punto decimal
            if ( numeroTexto === '.') {
                setNumero( numero + numeroTexto);

                //evaluar si es otro cero y hay un punto
            } else if ( numeroTexto === '0' && numero.includes('.')){
                setNumero( numero + numeroTexto);

                //Evaluar si es diferente de cero y tiene un punto
            } else if ( numeroTexto !== '0' && !numero.includes('.')) {
                setNumero( numeroTexto );

                //Evitar 0000.0
            } else if ( numeroTexto === '0' && !numero.includes('.')) {
                setNumero( numero );

            } else {
                setNumero( numero + numeroTexto);
            }
        } else {
            setNumero( numero + numeroTexto);
        }
        
    }

    const positivoNegativo = () => {
        if ( numero.includes('-')){
            setNumero( numero.replace('-', ''));
        } else {
            setNumero('-' + numero);
        }
    }

    return (
        <View style={styles.calculadoraContainer}>
            <Text style={styles.resultadoPequeno}>
                { numeroAnterior }
            </Text>
            <Text style={styles.resultado} numberOfLines={ 1 } adjustsFontSizeToFit >
                { numero }
            </Text>

            <View style={styles.fila}>

                {/* Boton */}
                <Boton text="C" color="#9B9B9B" accion={ limpiar } />
                <Boton text="+/-" color="#9B9B9B" accion={ positivoNegativo } />
                <Boton text="del" color="#9B9B9B" accion={ del } />
                <Boton text="/" color="#FF9427" accion={ limpiar } />

            </View>

            <View style={styles.fila}>

                {/* Boton */}
                <Boton text="7" accion={ armarNumero } />
                <Boton text="8" accion={ armarNumero } />
                <Boton text="9" accion={ armarNumero } />
                <Boton text="x" color="#FF9427" accion={ limpiar } />

            </View>

            <View style={styles.fila}>

                {/* Boton */}
                <Boton text="4" accion={ armarNumero } />
                <Boton text="5" accion={ armarNumero } />
                <Boton text="6" accion={ armarNumero } />
                <Boton text="-" color="#FF9427" accion={ limpiar } />

            </View>

            <View style={styles.fila}>

                {/* Boton */}
                <Boton text="1" accion={ armarNumero } />
                <Boton text="2" accion={ armarNumero } />
                <Boton text="3" accion={ armarNumero } />
                <Boton text="+" color="#FF9427" accion={ limpiar } />

            </View>

            <View style={styles.fila}>

                {/* Boton */}
                {/* ancho={ true } no es necesario porque en react si se manda solo es exactamente lo mismo */}
                <Boton text="0" ancho accion={ armarNumero } />
                <Boton text="." accion={ armarNumero }/>
                <Boton text="=" color="#FF9427" accion={ limpiar } />

            </View>
        </View>
    )
}
