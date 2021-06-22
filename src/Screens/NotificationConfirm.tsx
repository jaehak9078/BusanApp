import React, {useContext, useEffect, useState} from "react";
import Styled from 'styled-components/native';
import { Switch } from 'react-native';

import { UserContext } from "~/Context/User";

import UpDownMenu from "./UpDownMenu";

const  Container = Styled.View`
    flex: 1;
    background-color: #e1e1e1;
`;
const ToggleContainer = Styled.View`
    width: 100%;
    height: 35px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 5px 2px 2px 3px;
    padding: 5px;
`;
const TitleBox = Styled.Text`
    font-size: 18px;
    font-weight: 600;
`;


const UpDownMenuContainer = Styled.ScrollView`
    flex: 1;
`;
const UpDownMenuBox = Styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 40px;
    border-bottom-color: #d4d4d4;
    border-bottom-width: 2;
`;
const MenuTitleBox = Styled.Text`
    font-size: 14px;
    font-weight: 400;
    margin-left: 8px;
`;
const UpDownImage = Styled.Image`
    margin-right: 3px;
`;


const NotificationConfirm = ({ navigation }:any) => {
    const {pushInfo, pressPush, config} = useContext<IUserContext>(UserContext);
    const [data] = useState<Array<Object>>([
        {
         "title":"2021학년도 정기퇴사 안내",
         "date":"21.06.18(금) 10:10",
         "sub_title":"정기퇴사기간",
         "detail":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
         "title":"코로나 확진자 관련 안내",
         "date":"21.06.11(금) 13:03",
         "sub_title":"확진자 관련 추가 안내 사항",
         "detail":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
         "title":"2021학년도 정기퇴사 안내",
         "date":"21.06.18(금) 10:10",
         "sub_title":"정기퇴사기간",
         "detail":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
         "title":"코로나 확진자 관련 안내",
         "date":"21.06.11(금) 13:03",
         "sub_title":"확진자 관련 추가 안내 사항",
         "detail":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
         "title":"2021학년도 정기퇴사 안내",
         "date":"21.06.18(금) 10:10",
         "sub_title":"정기퇴사기간",
         "detail":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
         "title":"코로나 확진자 관련 안내",
         "date":"21.06.11(금) 13:03",
         "sub_title":"확진자 관련 추가 안내 사항",
         "detail":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "title":"2021학년도 정기퇴사 안내",
            "date":"21.06.18(금) 10:10",
            "sub_title":"정기퇴사기간",
            "detail":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
           },
           {
            "title":"코로나 확진자 관련 안내",
            "date":"21.06.11(금) 13:03",
            "sub_title":"확진자 관련 추가 안내 사항",
            "detail":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
           },
           {
            "title":"2021학년도 정기퇴사 안내",
            "date":"21.06.18(금) 10:10",
            "sub_title":"정기퇴사기간",
            "detail":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
           },
           {
            "title":"코로나 확진자 관련 안내",
            "date":"21.06.11(금) 13:03",
            "sub_title":"확진자 관련 추가 안내 사항",
            "detail":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
           },
           {
            "title":"2021학년도 정기퇴사 안내",
            "date":"21.06.18(금) 10:10",
            "sub_title":"정기퇴사기간",
            "detail":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
           },
           {
            "title":"코로나 확진자 관련 안내",
            "date":"21.06.11(금) 13:03",
            "sub_title":"확진자 관련 추가 안내 사항",
            "detail":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
           },
           {
            "title":"2021학년도 정기퇴사 안내",
            "date":"21.06.18(금) 10:10",
            "sub_title":"정기퇴사기간",
            "detail":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
           },
           {
            "title":"코로나 확진자 관련 안내",
            "date":"21.06.11(금) 13:03",
            "sub_title":"확진자 관련 추가 안내 사항",
            "detail":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
           },
        ]);
    useEffect(() => {
        console.log(pushInfo);
    },[pushInfo])
    useEffect(() => {
        const title = config.main_title1;
        navigation.setOptions({
            headerTitle: title
        });
    }, []);
    return(
        <Container>
            <ToggleContainer>
                <TitleBox>{config.sub_page1_t1}</TitleBox>
                <Switch
                    onValueChange={pressPush}
                    value={pushInfo}
                />
            </ToggleContainer>
            <ToggleContainer>
                <TitleBox>{config.sub_page1_t2}</TitleBox>
            </ToggleContainer>
            <UpDownMenuContainer>
                {data.map((d, index) => (
                    <UpDownMenu data={d} key={index} />
                ))}
            </UpDownMenuContainer>
        </Container>
    );
};

export default NotificationConfirm;