import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {BUFFER_PAGE, HOME_PAGE} from 'src/navigation/navigationConst'
import BufferingPage from 'src/page/BufferingPage/BufferingPage';
import HomePage from 'src/page/HomePage/HomePage';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer>        
            <Stack.Navigator
                initialRouteName={BUFFER_PAGE}
                screenOptions={({ navigation }) => ({
                    headerShown: false     
                })}
            >
                <Stack.Screen
                    name={BUFFER_PAGE}
                    component={BufferingPage}
                />
                <Stack.Screen
                    name={HOME_PAGE}
                    component={HomePage}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator;