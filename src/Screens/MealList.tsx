import React,  { useEffect, useContext } from "react";
import { WebView } from 'react-native-webview';
import { UserContext } from "~/Context/User";


const MealList = ({ navigation }:any) => {
    const {config } = useContext<IUserContext>(UserContext);
    useEffect(() => {
        const title = config.main_title2;
        navigation.setOptions({
            headerTitle: title
        });
    }, []);
    return(
        <WebView
            source={{uri: 'https://dorm.pusan.ac.kr/dorm/function/mealPlan/20000403'}}
        />
    );
};

export default MealList;