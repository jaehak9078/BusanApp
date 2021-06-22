import React, {createContext, useState, useEffect} from "react";

interface IUserContext {
    pushInfo: boolean;
    langInfo: String;
    pressPush: () => void;
    changeLangInfo: (arg0: String) => void;
    config: Object;
}

const defaultConext: IUserContext = {
    pushInfo: true,
    langInfo: 'kor',
    pressPush: () => {},
    changeLangInfo: () => {},
    config: {},
};

const UserContext = createContext(defaultConext);

interface Props {
    children: JSX.Element | Array<JSX.Element>;
}

const UserContextProvider = ({children}: Props) =>  {
    const [pushInfo, setPushInfo] = useState<boolean>(true);
    const [langInfo, setLangInfo] = useState<String>('kor');
    const [config, setConfig] = useState<Object>({});

    const pressPush = () => {
        setPushInfo(!pushInfo);
    };

    const changeLangInfo = (lang: String) => {
        setLangInfo(lang);
    }

    useEffect(() => {
        if (langInfo === 'kor') {
            setConfig({
                "main_title1": "알림확인",
                "main_title2": "식단안내",
                "main_title3": "공지사항",
                "main_title4": "원생수칙",
                "main_title5": "이용문의",
                "sub_page1_t1": "알림설정",
                "sub_page1_t2": "알림내역",
                "sub_page4_t1": "이용방법 문의",
                "sub_page4_b1": "원생게시판 바로가기",
                "sub_page4_b1_t": "* 현재 생활원에 거주중인 원생이 이용가능한 게시판입니다.",
                "sub_page4_b2": "비원생게시판 바로가기",
                "sub_page4_b2_t": "* 현재 생활원에 거주중이지 않은 비원생이 이용가능한 게시판입니다.",
                "sub_page4_b3": "생활원 전화문의",
                "sub_page4_b3_t": "* 행정실 운영시간 : 평일 9시 ~ 18시 / 12시 ~ 13시 제외",
                "sub_page5_t1": "어플리케이션 안내 및 알림 수신 방법",
                "sub_page5_t1_t1": "* 본 어플리케이션은 생활원 공지알림 수신을 위한 PUSH 전용 앱으로 생활원 알림을 수신하고자 하는 모든 분이 이용가능합니다.",
                "sub_page5_t1_t2": "* Push 알림을 수신하고자 하는 이용자는 메인화면 알림확인 → 알림설정 → ON 선택 바랍니다.",
            });
        } else {
            setConfig({
                "main_title1": "Notifications",
                "main_title2": "Menu",
                "main_title3": "Notice",
                "main_title4": "Dormitory\nRules",
                "main_title5": "Inquiries",
                "sub_page1_t1": "Push Setting",
                "sub_page1_t2": "Push List",
                "sub_page4_t1": "Ways of making inquiries",
                "sub_page4_b1": "Shortcut to Bulletin board for Dorm students",
                "sub_page4_b1_t": "* This bulletin board is available for students who are currently living in the dormitory.",
                "sub_page4_b2": "Shortcut to Bulletin board for Non-dorm students",
                "sub_page4_b2_t": "* This bulletin board is available for students who are not living in the dormitory.",
                "sub_page4_b3": "Dormitory telephone inquiries",
                "sub_page4_b3_t": "* Administration office’s Working hours: 09:00~18:00 on Weekdays / Except 12:00~13:00",
                "sub_page5_t1": "Application guide Ways of receiving notifications",
                "sub_page5_t1_t1": "* This application is a PUSH app designed to provide notifications of the notice from dormitory, and is available for anyone who would like to receive notifications from dormitory.",
                "sub_page5_t1_t2": "* Those who want to receive push notifications tap Settings on the main page -> Push settings -> tap Push On"
            });
        }
    },[langInfo]);

    return (
        <UserContext.Provider
            value={{
                pushInfo,
                langInfo,
                pressPush,
                changeLangInfo,
                config,
            }}>
                {children}
        </UserContext.Provider>
    );
};

export {UserContextProvider, UserContext};