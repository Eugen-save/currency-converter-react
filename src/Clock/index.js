import { TimeDate } from "./styled";

const Clock = ({ time, setTime, date }) => (
    <>
        <TimeDate>Dzisiaj jest&nbsp;
            {date.toLocaleString(
                undefined,
                {weekday: "long", day:"numeric", month: "long", year: "numeric", hour:"numeric", minute: "numeric", second:"numeric"}
            )}
        </TimeDate>
    </>
);

export default Clock;