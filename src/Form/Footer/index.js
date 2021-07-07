import {TextFooter} from "./styled";

const Footer = ({date}) => {

    return (
    <TextFooter>
        Kursy wyliczane są na podstawie danych z Europiejskiego Banku Centralnego z dnia {date}
    </TextFooter>
    );
}

export default Footer;