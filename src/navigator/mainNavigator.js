import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen485484Navigator from '../features/BlankScreen485484/navigator';
import CopyOfBlankScreen185465Navigator from '../features/CopyOfBlankScreen185465/navigator';
import BlankScreen185444Navigator from '../features/BlankScreen185444/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen485484: { screen: BlankScreen485484Navigator },
CopyOfBlankScreen185465: { screen: CopyOfBlankScreen185465Navigator },
BlankScreen185444: { screen: BlankScreen185444Navigator },

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
