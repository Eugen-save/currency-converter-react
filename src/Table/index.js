import "./style.css";

const Table = () => (
    <div className="container">
    <table className="table">
    <tr className="table__row">
        <th className="table__header table__cell">Nazwa waluty</th>
        <th className="table__header table__cell">Kod waluty</th>
        <th className="table__header table__cell">Kurs średni</th>
    </tr>
    <tr className="table__row">
        <th className="table__header--currency table__header table__cell">Euro</th>
        <td className="table__cell">1 EUR</td>
        <td className="table__cell">4.53</td>
    </tr>
    <tr className="table__row">
        <th className="table__header--currency table__header table__cell">Dolar amerykański</th>
        <td className="table__cell">1 USD</td>
        <td className="table__cell">3.74</td>
    </tr>
</table>
</div>
);

export default Table;