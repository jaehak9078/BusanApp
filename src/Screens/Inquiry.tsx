import React, { useEffect, useContext } from "react";
import Styled from 'styled-components/native';
import { Linking } from "react-native";
import { UserContext } from "~/Context/User";

const TitleBox = Styled.Text`
    font-weight: 600;
    font-size: 18px;
    margin-top: 12px;
    margin-bottom: 5px;
`;
const TextBox = Styled.Text`
    font-size: 12px;
    color: #5c5c5c;
    margin: 5px;
`;
const Container = Styled.View`
    flex: 1;
    background-color: #e1e1e1;
    padding: 10px;
`;
const ButtonContainer = Styled.View`
   align-items: center;
`;
const Button = Styled.TouchableOpacity`
    margin: 5px 0px;
    width: 99%;
    height: 30px;
    align-items: center;
    justify-content: center;
    background-color: #3545c5;
    border-radius: 5px;
`;
const ButtonText = Styled.Text`
    color: white;
`;

const Inquiry = ({ navigation }:any) => {
    const {config } = useContext<IUserContext>(UserContext);
    useEffect(() => {
        const title = config.main_title5;
        navigation.setOptions({
            headerTitle: title
        });
    }, []);
    return(
        <Container>
            <TitleBox>{config.sub_page5_t1}</TitleBox>
            <TextBox>{config.sub_page5_t1_t1}</TextBox>
            <TextBox>{config.sub_page5_t1_t2}</TextBox>
            <TitleBox>{config.sub_page4_t1}</TitleBox>
            <Button onPress={()=> Linking.openURL('https://dorm.pusan.ac.kr')}>
                <ButtonText>{config.sub_page4_b1}</ButtonText>
            </Button>
            <TextBox>{config.sub_page4_b1_t}</TextBox>
            <Button onPress={()=> Linking.openURL('https://dorm.pusan.ac.kr')}>
                <ButtonText>{config.sub_page4_b2}</ButtonText>
            </Button>
            <TextBox>{config.sub_page4_b2_t}</TextBox>
            <Button onPress={()=> Linking.openURL('tel:051-510-7827')}>
                <ButtonText>{config.sub_page4_b3}</ButtonText>
            </Button>
            <TextBox>{config.sub_page4_b3_t}</TextBox>
        </Container>
    );
};

export default Inquiry;