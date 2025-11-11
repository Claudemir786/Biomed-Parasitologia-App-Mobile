import Abas from "./src/routes/abas";
import { useCustomFonts } from "./src/Assets/hooks/fonts";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const fontsLoaded = useCustomFonts();

   if (!fontsLoaded) {
    return null;
    }

  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Abas />
    </NavigationContainer>
  </SafeAreaProvider>
  );
}
