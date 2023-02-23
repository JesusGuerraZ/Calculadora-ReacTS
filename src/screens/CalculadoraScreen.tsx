import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {Boton} from '../components/Boton';
import { useCalculadora } from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {
  

  const {
    numeroAnterior,
    numero,
    limpiar,
    positivoNegativo,
    del,
    btnDividir,
    armarNumero,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  } = useCalculadora();


  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      )}
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      <View style={styles.fila}>
        {/* Boton */}
        <Boton text="C" color="#9B9B9B" accion={limpiar} />
        <Boton text="+/-" color="#9B9B9B" accion={positivoNegativo} />
        <Boton text="del" color="#9B9B9B" accion={del} />
        <Boton text="/" color="#FF9427" accion={btnDividir} />
      </View>

      <View style={styles.fila}>
        {/* Boton */}
        <Boton text="7" accion={armarNumero} />
        <Boton text="8" accion={armarNumero} />
        <Boton text="9" accion={armarNumero} />
        <Boton text="x" color="#FF9427" accion={btnMultiplicar} />
      </View>

      <View style={styles.fila}>
        {/* Boton */}
        <Boton text="4" accion={armarNumero} />
        <Boton text="5" accion={armarNumero} />
        <Boton text="6" accion={armarNumero} />
        <Boton text="-" color="#FF9427" accion={btnRestar} />
      </View>

      <View style={styles.fila}>
        {/* Boton */}
        <Boton text="1" accion={armarNumero} />
        <Boton text="2" accion={armarNumero} />
        <Boton text="3" accion={armarNumero} />
        <Boton text="+" color="#FF9427" accion={btnSumar} />
      </View>

      <View style={styles.fila}>
        {/* Boton */}
        {/* ancho={ true } no es necesario porque en react si se manda solo es exactamente lo mismo */}
        <Boton text="0" ancho accion={armarNumero} />
        <Boton text="." accion={armarNumero} />
        <Boton text="=" color="#FF9427" accion={calcular} />
      </View>
    </View>
  );
};
