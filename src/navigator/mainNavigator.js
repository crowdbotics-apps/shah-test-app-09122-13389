import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen412466Navigator from '../features/BlankScreen412466/navigator';
import BlankScreen312425Navigator from '../features/BlankScreen312425/navigator';
import BlankScreen212414Navigator from '../features/BlankScreen212414/navigator';
import BlankScreen112409Navigator from '../features/BlankScreen112409/navigator';
import BlankScreen012395Navigator from '../features/BlankScreen012395/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen412466: { screen: BlankScreen412466Navigator },
BlankScreen312425: { screen: BlankScreen312425Navigator },
BlankScreen212414: { screen: BlankScreen212414Navigator },
BlankScreen112409: { screen: BlankScreen112409Navigator },
BlankScreen012395: { screen: BlankScreen012395Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
