import React, {useState} from "react";
import { useEffect } from "react";
import Styled from 'styled-components/native';

const Container = Styled.View`
    flex:1;
    flex-direction: column;
`;
const UpDownMenuBox = Styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
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
const DetailContainer = Styled.View`
    flex: 3;
    background-color: #f3f3f3;
    padding: 20px;
    flex-direction: column;
`;
const Header = Styled.View`
    width:100%;
    height: 25px;
    border-bottom-color: #bdbdbd;
    border-bottom-width: 2;
    align-items: flex-end;
`;
const DateBox = Styled.Text`
    align-items: flex-end;
    color: #5c5c5c;
`;
const SubTitle = Styled.Text`
    font-size: 10px;
    color: #5c5c5c;
    margin: 5px 0px;
`;
const Detail = Styled.Text`
    font-size: 15px;
    font-weight: 600;
`;


const UpDownMenu = ({data}:any) => {
    const [isToggle, setIsToggle] = useState<boolean>(false);
    const onToggle = () => {
        setIsToggle(!isToggle);
    }
    useEffect(() => {
        console.log(data);
    })

    return (
            <Container>
                <UpDownMenuBox onPress={onToggle}>
                    <MenuTitleBox>{data.title}</MenuTitleBox>
                    {
                        isToggle ?
                        <>
                        <UpDownImage
                        source={require('~/Assets/Images/down.png')}
                        /> 
                        </>
                        :
                        <UpDownImage
                        source={require('~/Assets/Images/up.png')}
                        />
                       
                    }
                    
                </UpDownMenuBox>
                {isToggle ? 
                <DetailContainer>
                <Header>
                    <DateBox>{data.date}</DateBox>
                </Header>
                <SubTitle>{data.sub_title}</SubTitle>
                <Detail>{data.detail}</Detail>
            </DetailContainer>
            : null}
            </Container>
    );
};

export default UpDownMenu;