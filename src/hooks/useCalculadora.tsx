import { useRef, useState } from "react";

enum Operadores {
    sumar,
    restar,
    multiplicar,
    dividir,
  }


export const useCalculadora = () => {

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

  const calcular = () => {
    const num1 = Number(numero);
    const num2 = Number(numeroAnterior);

    switch (ultimaOperacion.current) {
      case Operadores.sumar:
        setNumero(`${num1 + num2}`);
        break;

      case Operadores.restar:
        setNumero(`${num2 - num1}`);
        break;

      case Operadores.multiplicar:
        setNumero(`${num1 * num2}`);
        break;

      case Operadores.dividir:
        setNumero(`${num2 / num1}`);
        break;
    }

    setNumeroAterior('0');
  };

  return {
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
  }
}
