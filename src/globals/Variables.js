import {css}from "styled-components/macro";


export const customCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const WEEK_DAYS = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAT", "THURSDAY", "FRIDAY", "SATURDAY"]

export const reformDate = (date) => {
    return WEEK_DAYS[date.getDay()] +","+
    date.getDate()+"."+
    date.getMonth()+"."+date.getYear()
}
