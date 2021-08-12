import React from "react";
import {
  Dimensions,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Text
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faUserPlus,
  faEllipsisH,
  faChevronLeft,
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons";

import Home from "../screens/Home";
import Profile from "../screens/Profile";

const Stack = createStackNavigator();

StatusBar.setHidden(true);

const Routes = () => (
  <NavigationContainer
    onStateChange={state =>
      state.index == 0 ? StatusBar.setHidden(true) : StatusBar.setHidden(false)
    }
  >
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: () => null
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: () => (
            <Text
              numberOfLines={1}
              style={{ maxWidth: 150, fontWeight: "bold", fontSize: 18 }}
            >
              user3782787686134324234324
            </Text>
          ),
          headerLeft: () => (
            <FontAwesomeIcon
              style={{ marginLeft: 10 }}
              icon={faUserPlus}
              size={25}
              color="#010101"
            />
          ),
          headerRight: () => (
            <FontAwesomeIcon
              style={{ marginRight: 10 }}
              icon={faEllipsisH}
              size={25}
              color="#010101"
            />
          )
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
