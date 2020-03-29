import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// HTML tags => importados do react-native (Text, View)

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Iphone!</Text>
    </View>
  );
}

// Css => classe StyleSheet
// display flex é padrão!!! não tem como alterar
// Hífen => camelCase
// valores não numéricos devem ter formato texto ''
// Não existe herança de estilos das tags pras suas children

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
