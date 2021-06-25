import "./style.css";




const Clock = ({ time, setTime, date }) => (
    <>
        <div className="clock">Dzisiaj jest&nbsp;
            {date.toLocaleString(
                undefined,
                {weekday: "long", day:"numeric", month: "long", year: "numeric", hour:"numeric", minute: "numeric", second:"numeric"}
            )}
        </div>
    </>
);

export default Clock;