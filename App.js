import Abas from "./src/routes/abas";
import { useCustomFonts } from "./src/Assets/hooks/fonts";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Abas />
    </NavigationContainer>
  );
}
