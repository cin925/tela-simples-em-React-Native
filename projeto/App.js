import { StyleSheet, View, StatusBar } from 'react-native';
import CartaoPerfil from './components/CartaoPerfil';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <CartaoPerfil
        nome="Mateus Redivo"
        profissao="Professor"
        cidade="São Paulo, SP"
        email="mateus.redivo@email.com"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
});