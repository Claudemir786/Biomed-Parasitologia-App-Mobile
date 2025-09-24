import { registerRootComponent } from 'expo';

import Abas from './src/routes/abas';
//import Laudo from './src/Pages/Laudo';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Abas);
