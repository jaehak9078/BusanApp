import React, {useContext, useState, useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from '@react-navigation/native';

import Main from '~/Screens/Main';
import Notice from '~/Screens/Notice';
import StudentRules from "./StudentRules";
import MealList from "./MealList";
import Inquiry from "./Inquiry";
import NotificationConfirm from "./NotificationConfirm";
import { UserContext } from "~/Context/User";


const Stack = createStackNavigator();

const MainNavigator = () => {
    const {config, langInfo } = useContext<IUserContext>(UserContext);
    
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Main"
            >
                <Stack.Screen 
                    name="Main"
                    component={Main}
                    options={{
                        headerShown: false,
                    }}
                    
                />
                 <Stack.Screen 
                    name="NotificationConfirm"
                    component={NotificationConfirm}
                    options={{
                        title: '알림확인',
                        headerTintColor: 'black',
                    }}
                />
                <Stack.Screen 
                    name="MealList"
                    component={MealList}
                    options={{
                        title: '식단안내',
                        headerTintColor: 'black',
                    }}
                />
                <Stack.Screen 
                    name="Notice"
                    component={Notice}
                    options={{
                        title: '공지사항',
                        headerTintColor: 'black',
                    }}
                />
                <Stack.Screen 
                    name="StudentRules"
                    component={StudentRules}
                    options={{
                        title: '원생수칙',
                        headerTintColor: 'black',
                    }}
                />
                <Stack.Screen 
                    name="Inquiry"
                    component={Inquiry}
                    options={{
                        title: '이용문의',
                        headerTintColor: 'black',
                    }}
                />
                
             
            </Stack.Navigator>
        </NavigationContainer>
    )
}

// const NoticeNavigator = () => {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen 
//                 name="Notice"
//                 component={Notice}
//                 options={{
//                     title: '알림확인',
//                     headerTintColor: 'black',
//                 }}
//             />
//         </Stack.Navigator>
//     )
// }

export default MainNavigator;