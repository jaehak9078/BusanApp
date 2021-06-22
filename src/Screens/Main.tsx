import React from "react";
import {StackNavigationProp} from '@react-navigation/stack';
import Styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import { UserContext } from "~/Context/User";
import { useContext } from "react";

const Container = Styled.View`
    flex: 1;
`;

const TitleContainer = Styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const ButtonContainer = Styled.View`
    flex: 3;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 3px;
`;

const ButtonBox1 = Styled.TouchableOpacity`
    width: 195px;
    height: 180px;
    justify-content: center;
    align-items: center;
    background-color: white;
    margin-bottom: 20px;
    border-radius: 10px;

`;
const ButtonBox2 = Styled.TouchableOpacity`
    width: 130px;
    height: 170px;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 10px;

`;

const TitleImageBox = Styled.Image`
    resize-mode: contain;
    width: 70%;
`;
const ImageBox = Styled.Image`
    resize-mode: contain;
    width: 30%;
    height: 35%;
    justify-content: center;
    align-items: center;
`;
const TextBox = Styled.Text`
    justify-content: center;
    align-items: center;
    font-size: 16px;
    /* font-family: 'D2Coding, Consolas, 'Courier New', monospace'; */
`;
const ImageBackground = Styled.ImageBackground`
    flex: 1;
    resize-mode: cover;
    justify-content: center;
`;
const LanguageContainer = Styled.View`
    flex: 0.2;
    flex-direction: row;
    justify-content: flex-end;
`;
const LanguageButton1 = Styled.TouchableOpacity`
    width: 40px;
    height: 20px;
    border: 1px solid white;
    border-radius: 3px;
    justify-content: center;
    align-items: center;
    margin: 3px;
    background-color: white;
`;
const LanguageButton2 = Styled.TouchableOpacity`
    width: 40px;
    height: 20px;
    border: 1px solid white;
    border-radius: 3px;
    justify-content: center;
    align-items: center;
    margin: 3px;
`;
const LangText1 = Styled.Text`
    font-size: 9px;
    color: black;
`;
const LangText2 = Styled.Text`
    font-size: 9px;
    color: white;
`;
    

const Main = () => {
    const navigation = useNavigation();
    const {langInfo, changeLangInfo, config} = useContext<IUserContext>(UserContext);
    
    return (
        <Container>
            <ImageBackground source={require('~/Assets/Images/main_bg2.png')}>
            {langInfo === 'kor'? 
            <LanguageContainer>
                <LanguageButton1 onPress={() => changeLangInfo('kor')}>
                    <LangText1>한국어</LangText1>
                </LanguageButton1>
                <LanguageButton2 onPress={() => changeLangInfo('eng')}>
                    <LangText2>ENG</LangText2>
                </LanguageButton2>
            </LanguageContainer>
            :
            <LanguageContainer>
                <LanguageButton2 onPress={() => changeLangInfo('kor')}>
                    <LangText2>한국어</LangText2>
                </LanguageButton2>
                <LanguageButton1 onPress={() => changeLangInfo('eng')}>
                    <LangText1>ENG</LangText1>
                </LanguageButton1>
            </LanguageContainer>
    }
                <TitleContainer>
                    <TitleImageBox
                        source={require('~/Assets/Images/main_logo.png')}

                    />
                </TitleContainer>
                <ButtonContainer>
                    <ButtonBox1 onPress={()=> navigation.navigate("NotificationConfirm")}>
                        <ImageBox
                            source={require('~/Assets/Images/icon1.png')}
                        />
                        <TextBox>{config.main_title1}</TextBox>
                    </ButtonBox1>
                    <ButtonBox1 onPress={()=> navigation.navigate("MealList")}>
                        <ImageBox
                            source={require('~/Assets/Images/icon2.png')}
                        />
                        <TextBox>{config.main_title2}</TextBox>
                    </ButtonBox1>
                    <ButtonBox2 onPress={()=> navigation.navigate("Notice")}>
                        <ImageBox
                            source={require('~/Assets/Images/icon3.png')}
                        />
                        <TextBox>{config.main_title3}</TextBox>
                    </ButtonBox2>
                    <ButtonBox2 onPress={()=> navigation.navigate("StudentRules")}>
                        <ImageBox
                            source={require('~/Assets/Images/icon4.png')}
                        />
                        <TextBox>{config.main_title4}</TextBox>
                    </ButtonBox2>
                    <ButtonBox2 onPress={()=> navigation.navigate("Inquiry")}>
                        <ImageBox
                            source={require('~/Assets/Images/icon5.png')}
                        />
                        <TextBox>{config.main_title5}</TextBox>
                    </ButtonBox2>
                </ButtonContainer>
            </ImageBackground>
        </Container>
        
    );
};

export default Main;
