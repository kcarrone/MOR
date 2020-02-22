import { createAppContainer} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

const screens = {
    LoginForm: {
        screen: LoginForm
    },
    SignUpForm: {
        screen: SignUpForm
    }
} 
const AppNavigator = createStackNavigator(screens)
export default createAppContainer(AppNavigator);