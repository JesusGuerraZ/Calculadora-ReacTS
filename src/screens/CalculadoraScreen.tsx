import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { Boton } from '../components/Boton'


export const CalculadoraScreen = () => (
    <View style={styles.calculadoraContainer}>
        <Text style={styles.resultadoPequeno}>
            1,500.00
        </Text>
        <Text style={styles.resultado}>
            1,500.00
        </Text>

        <View style={styles.fila}>

            {/* Boton */}
            <Boton text="C" color="#9B9B9B" />
            <Boton text="+/-" color="#9B9B9B" />
            <Boton text="del" color="#9B9B9B" />
            <Boton text="/" color="#FF9427" />

        </View>

        <View style={styles.fila}>

            {/* Boton */}
            <Boton text="7" />
            <Boton text="8" />
            <Boton text="9" />
            <Boton text="x" color="#FF9427" />

        </View>

        <View style={styles.fila}>

            {/* Boton */}
            <Boton text="4" />
            <Boton text="5" />
            <Boton text="6" />
            <Boton text="-" color="#FF9427" />

        </View>

        <View style={styles.fila}>

            {/* Boton */}
            <Boton text="1" />
            <Boton text="2" />
            <Boton text="3" />
            <Boton text="+" color="#FF9427" />

        </View>

        <View style={styles.fila}>

            {/* Boton */}
            {/* ancho={ true } no es necesario porque en react si se manda solo es exactamente lo mismo */}
            <Boton text="0" ancho />
            <Boton text="." />
            <Boton text="=" color="#FF9427" />

        </View>


    </View>
)
