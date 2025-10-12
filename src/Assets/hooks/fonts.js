import { useFonts } from "expo-font";

export function useCustomFonts() {
  const [fontsLoaded] = useFonts({
    
    
// 
    
    //Montserrat
    'Montserrat-Regular': require('../fonts/Montserrat/static/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('../fonts/Montserrat/static/Montserrat-Bold.ttf'),
    'Montserrat-SemiBold': require('../fonts/Montserrat/static/Montserrat-SemiBold.ttf'),
    'Montserrat-Light': require('../fonts/Montserrat/static/Montserrat-Light.ttf'),

    //Open Sans
    'OpenSans-Regular': require('../fonts/Open_Sans/static/OpenSans-Regular.ttf'),
    'OpenSans-Bold': require('../fonts/Open_Sans/static/OpenSans-Bold.ttf'),
    'OpenSans-SemiBold': require('../fonts/Open_Sans/static/OpenSans-SemiBold.ttf'),
    'OpenSans-Light': require('../fonts/Open_Sans/static/OpenSans-Light.ttf'),

    //Orbitron
    'Orbitron-Regular': require('../fonts/Orbitron/static/Orbitron-Regular.ttf'),
    'Orbitron-Bold': require('../fonts/Orbitron/static/Orbitron-Bold.ttf'),
    'Orbitron-Medium': require('../fonts/Orbitron/static/Orbitron-Medium.ttf'),

    //Poppins
    'Poppins-Regular': require('../fonts/Poppins//Poppins-Regular.ttf'),
    'Poppins-Bold': require('../fonts/Poppins//Poppins-Bold.ttf'),
    'Poppins-Medium': require('../fonts/Poppins//Poppins-Medium.ttf'),
    'Poppins-Light': require('../fonts/Poppins//Poppins-Light.ttf'),

    //Rajdhani
    'Rajdhani-Regular': require('../fonts/Rajdhani/Rajdhani-Regular.ttf'),
    'Rajdhani-Bold': require('../fonts/Rajdhani/Rajdhani-Bold.ttf'),
    'Rajdhani-Medium': require('../fonts/Rajdhani/Rajdhani-Medium.ttf'),
    'Rajdhani-SemiBold': require('../fonts/Rajdhani/Rajdhani-SemiBold.ttf'),

    //Roboto Condensed
    'RobotoCondensed-Regular': require('../fonts/Roboto_Condensed/static/RobotoCondensed-Regular.ttf'),
    'RobotoCondensed-Bold': require('../fonts/Roboto_Condensed/static/RobotoCondensed-Bold.ttf'),
    'RobotoCondensed-Light': require('../fonts/Roboto_Condensed/static/RobotoCondensed-Light.ttf'),
  });

  return fontsLoaded;
}
