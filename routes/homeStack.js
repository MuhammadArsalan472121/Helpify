import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Splash from '../screens/splashScreen';
import Welcome from '../screens/welcomeScreen';
import Login from '../screens/loginScreen';
import ResetPassword from '../screens/resetPasswordScreen';
import Verify from '../screens/otpScreen';
import NewPassword from '../screens/newPasswordScreen';
import Signup from '../screens/signupScreen';
import Profile from '../screens/profile';
import More from '../screens/moreScreen';
import Payment from '../screens/paymentDetails';
import TermsNConditions from '../screens/termsNConditionsScreen';
import Dashboard from '../screens/dashboard';
import SearchAd from '../screens/searchAd';
import AdDescription from '../screens/adDescription';
import CreateAd from '../screens/createAd';
import AdMore from '../screens/adMore';
import MakeYourAd from '../screens/makeYourAd';
import ChooseTime from '../screens/chooseTime';
import MapPickLoc from '../screens/mapPickLoc';

const screens = {
  Splash:{
    screen:Splash,
    navigationOptions:{
      headerShown:false
    },
  },
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      headerShown:false,
      // headerStyle: {backgroundColor: '#FC6011'}, this will over ride the property passed through defaultNavigation
    },
  },
  Login: {
    screen: Login,
  },
  ResetPassword: {
    screen: ResetPassword,
  },
  Verify: {
    screen: Verify,
  },
  NewPassword: {
    screen: NewPassword,
  },
  Signup: {
    screen: Signup,
  },
  Profile: {
    screen: Profile,
  },
  More: {
    screen: More,
  },
  Payment: {
    screen: Payment,
  },
  TermsNConditions: {
    screen: TermsNConditions,
  },
  Dashboard: {
    screen: Dashboard,
  },
  SearchAd: {
    screen: SearchAd,
  },
  AdDescription: {
    screen: AdDescription,
  },
  CreateAd: {
    screen: CreateAd,
  },
  AdMore: {
    screen: AdMore,
  },
  MakeYourAd: {
    screen: MakeYourAd,
  },
  ChooseTime:{
    screen: ChooseTime,
  },
  MapPickLoc:{
    screen: MapPickLoc,
  }
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#fff',
    headerStyle: {backgroundColor: '#FC6011'},
  },
});

export default createAppContainer(HomeStack);
