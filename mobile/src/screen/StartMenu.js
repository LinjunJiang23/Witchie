// components/startMenu.tsx
import MyTouchableOpacity from '../components/MyTouchableOpacity';
import { View, Image, StyleSheet } from 'react-native';

const StartMenu = ({ navigation }) => {
  const onPressStart = () => {
    navigation.navigate('HomeScreen');
  };
  return (
    <View style={styles.container}>
      <Image />  
      <MyTouchableOpacity 
        onPress={onPressStart} 
        text="Start Game" />
      <MyTouchableOpacity
        text="Credit" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c4d3ec',
  }
});

export default StartMenu;
