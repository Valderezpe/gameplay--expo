import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AutoRoutes } from "./auth.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <AutoRoutes />
    </NavigationContainer>
  );
}
