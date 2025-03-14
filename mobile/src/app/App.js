// App.tsx
import { NavigationContainer } from '@react-navigation/native';

import MyStack from './components/MyStack';
import GameProvider from './provider/GameProvider';

const App = () => {
  return (
    <GameProvider>
      <NavigationContainer>
	      <MyStack/>
      </NavigationContainer>
    </GameProvider>
  );
};

export default App;
