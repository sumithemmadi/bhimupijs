interface BankInfo {
    _: string[];
    handle: {
        [id: string]: {
            PSPbank: string;
            TPAP: string;
            id: string;
            link: string;
        };
    };
}
declare const handles: BankInfo;
export default handles;
