import React,  { useEffect, useContext } from "react";
import { WebView } from 'react-native-webview';
import { UserContext } from "~/Context/User";


const StudentRules = ({ navigation }:any) => {
    const {config } = useContext<IUserContext>(UserContext);
    useEffect(() => {
        const title = config.main_title4;
        navigation.setOptions({
            headerTitle: title
        });
    }, []);
    return(
        <WebView
            source={{uri: 'https://dorm.pusan.ac.kr/dorm/bbs/list03/20000602'}}
        />
    );
};

export default StudentRules;