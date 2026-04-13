// Aluno: Nicolas Galdino
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const CartaoPerfil = ({ nome, profissao, cidade, email }) => {

  const handlePress = () => {
    alert(`E-mail enviado para: ${email}`);
  };

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.profissao}>{profissao}</Text>
      <View style={styles.infoExtra}>
        <Text style={styles.detalhe}>{cidade}</Text>
        <Text style={styles.detalhe}>{email}</Text>
      </View>

      <TouchableOpacity
        style={styles.botao}
        onPress={handlePress}
      >
        <Text style={styles.textoBotao}>Enviar E-mail</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 20,
    width: '85%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 8,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2d3436',
    marginBottom: 5,
  },
  profissao: {
    fontSize: 18,
    color: '#6c5ce7',
    fontWeight: '600',
    marginBottom: 15,
  },
  infoExtra: {
    alignItems: 'center',
    marginBottom: 20,
  },
  detalhe: {
    fontSize: 14,
    color: '#636e72',
    fontStyle: 'italic',
  },
  botao: {
    backgroundColor: '#6c5ce7',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
  },
});

export default CartaoPerfil;
