import React from "react";
import './Table.css';
import numeral from "numeral";

function Table({ countries }) {
    return <div className="table">
        {countries.map(({ country, cases, countryInfo }) => (
            <tr>
                <td>
                    <img src={countryInfo.flag} />
                </td>
                <td>{country}</td>
                <td>
                    <strong>{numeral(cases).format("0,0")}</strong>
                </td>
            </tr>
        ))}
    </div>;
}

export default Table;
