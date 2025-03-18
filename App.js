import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
 
const Conversor = () => {
  const [temperatura, setTemperatura] = useState(0);
  const [velocidade, setVelocidade] = useState(0);
  const [resultadoTemperatura, setResultadoTemperatura] = useState(0);
  const [resultadoVelocidade, setResultadoVelocidade] = useState(0);
 
  const converterTemperatura = () => {
    const resultado = (temperatura * 9/5) + 32;
    setResultadoTemperatura(resultado);
  };
 
  const converterVelocidade = () => {
    const resultado = velocidade * 0.621371;
    setResultadoVelocidade(resultado);
  };
 
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Conversor de Valores</Text>
 
      <View style={styles.conversor}>
        <Text style={styles.label}>Temperatura (°C)</Text>
        <TextInput
          style={styles.input}
          value={temperatura.toString()}
          onChangeText={(text) => setTemperatura(parseFloat(text))}
          keyboardType="numeric"
        />
        <Button title="Converter" onPress={converterTemperatura} />
        <Text style={styles.resultado}>
          {resultadoTemperatura.toFixed(2)} °F
        </Text>
      </View>
 
      <View style={styles.conversor}>
        <Text style={styles.label}>Velocidade (km/h)</Text>
        <TextInput
          style={styles.input}
          value={velocidade.toString()}
          onChangeText={(text) => setVelocidade(parseFloat(text))}
          keyboardType="numeric"
        />
        <Button title="Converter" onPress={converterVelocidade} />
        <Text style={styles.resultado}>
          {resultadoVelocidade.toFixed(2)} mph
        </Text>
      </View>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  conversor: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  },
  resultado: {
    fontSize: 18,
    marginTop: 10,
  },
});
 
export default Conversor;