import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { theme } from "../global/styles/theme";

import { Home } from "../screens/Home/Index";
import { SignIn } from "../screens/SignIn";
import {AppointmentDetails} from '../screens/AppointmentDetails';
import { AppointmentCreate } from "../screens/AppointmentCreate";



const { Navigator, Screen } = createStackNavigator();

export function AutoRoutes() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary100
        },
      }}
    >
      <Screen name="SigIn" component={SignIn} />
      <Screen name="Home" component={Home} />
      <Screen name="AppointmentDetails" component={AppointmentDetails} />
      <Screen name="AppointmentCreate" component={AppointmentCreate}/>
    </Navigator>
  );
}
