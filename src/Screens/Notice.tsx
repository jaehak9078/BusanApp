import React,  { useEffect, useContext } from "react";
import { WebView } from 'react-native-webview';
import { UserContext } from "~/Context/User";

const Notice = ({ navigation }:any) => {
    const {config } = useContext<IUserContext>(UserContext);
    useEffect(() => {
        const title = config.main_title3;
        navigation.setOptions({
            headerTitle: title
        });
    }, []);
    return(
        <WebView
            source={{uri: 'https://dorm.pusan.ac.kr/dorm/bbs/list01/20000601'}}
        />
    );
};

export default Notice;