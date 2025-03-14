import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const MyTouchableOpacity = ({ text, onPress, onLongPress, underlayColor, ...props }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={onPress} 
        onLongPress={onLongPress}
        underlayColor={underlayColor ? underlayColor : 'blue'}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    alignItems: 'center',
  },
  button: {
    marginBottom: 10,
    width: 150,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#b2a0de',
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: '#b44da3',
  },
});

export default MyTouchableOpacity;