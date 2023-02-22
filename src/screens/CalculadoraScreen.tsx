import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {Boton} from '../components/Boton';

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}

export const CalculadoraScreen = () => {
  const [numeroAnterior, setNumeroAterior] = useState('0');
  const [numero, setNumero] = useState('0');

  const ultimaOperacion = useRef<Operadores>();

  const limpiar = () => {
    setNumero('0');
    setNumeroAterior('0');
  };

  const del = () => {
    // setNumero( numero  numero.lastIndexOf )
    // MI SOLUCION
    // if (numero.length === 1) {
    //     if (numero.includes('-')){
    //         setNumero('-0')
    //     } else {
    //         setNumero('0')
    //     }
    //     setNumero('0')
    // } else {
    //     setNumero(numero.slice(0, (numero.length - 1)))
    // }
    //SOLUCION DEL VIDEO
    let negativo = '';
    let numeroTemp = numero;
    if (numero.includes('-')) {
      negativo = '-';
      numeroTemp = numero.slice(1);
    }
    if (numeroTemp.length > 1) {
      setNumero(negativo + numeroTemp.slice(0, -1));
    } else {
      setNumero('0');
    }
  };

  const armarNumero = (numeroTexto: string) => {
    //Verificar si ya existe un punto decimal
    if (numero.includes('.') && numeroTexto === '.') return;

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      // Punto decimal
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);

        //evaluar si es otro cero y hay un punto
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);

        //Evaluar si es diferente de cero y tiene un punto
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto);

        //Evitar 0000.0
      } else if (numeroTexto === '0' && !numero.includes('.')) {
        setNumero(numero);
      } else {
        setNumero(numero + numeroTexto);
      }
    } else {
      setNumero(numero + numeroTexto);
    }
  };

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const cambiarNumPorAnterior = () => {
    if (numero.endsWith('.')) {
      setNumeroAterior(numero.slice(0, -1));
    } else {
      setNumeroAterior(numero);
    }
    setNumero('0');
  };

  const btnDividir = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.dividir;
  };
  const btnMultiplicar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.multiplicar;
  };
  const btnRestar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.restar;
  };
  const btnSumar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.sumar;
  };

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
        <Boton text="=" color="#FF9427" accion={limpiar} />
      </View>
    </View>
  );
};
