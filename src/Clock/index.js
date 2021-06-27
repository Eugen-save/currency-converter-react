import { TimeDate } from "./styled";
import { useCurrentDate } from "./useCurrentDate"

const Clock = () => {
    const date = useCurrentDate();

    const formatDate = date.toLocaleString(
        undefined, {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    }
    );

    return (
        <>
            <TimeDate>Dzisiaj jest&nbsp;
               {formatDate}
            </TimeDate>
        </>
    );
};

export default Clock;