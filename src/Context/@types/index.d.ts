interface IUserContext {
    pushInfo: boolean;
    langInfo: String;
    pressPush: () => void;
    changeLangInfo: (arg0: String) => void;
    config: Object;
}