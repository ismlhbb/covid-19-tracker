import React from "react";
import "./InfoBox.css";
import { Card, CardContent, Typography } from "@material-ui/core";
function InfoBox({ title, cases, isRed, active, total, ...props }) {
    return (
        <Card
            onClick={props.onClick}
            className={`infoBox ${active && "infoBox--selected"} ${isRed && "infoBox--red"}`} >
            <CardContent>
                {/* Title i.e. Coronavirus Cases */}
                <Typography className="infoBox__title">{title}</Typography>
                {/* Number of cases i.e. +120K */}
                <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>{cases} Today</h2>
                {/* Total i.e. 1.2M Total */}
                <Typography className="infoBox__total" color="textSecondary">
                    {total} Total
                </Typography>
            </CardContent>
        </Card >
    )
}

export default InfoBox;
