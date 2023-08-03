import React from "react";
import { type MonerisReceiptResponse } from "./monerisTypes";

const MonerisResponse = (props: MonerisReceiptResponse) => {
  return (
    <div>
      <h1>response: {props.response.success}</h1>
      <ul>
        <li>order no: {props.response.receipt.cc.order_no}</li>
        <li>response code: {props.response.receipt.cc.response_code}</li>
        <li>date time: {props.response.receipt.cc.transaction_date_time}</li>
      </ul>
      <h2>moneris token</h2>
      <ul>
        <li>
          <span>issuer id: {props.response.receipt.cc.issuer_id}</span>
        </li>
        <li>
          {" "}
          <span>token: {props.response.receipt.cc.tokenize.datakey}</span>
        </li>
        <li>
          <span>token: {props.response.receipt.cc.tokenize.first4last4}</span>
        </li>
        <li>
          <span>token: {props.response.receipt.cc.tokenize.message}</span>
        </li>
      </ul>
      <span>issuer id: {props.response.receipt.cc.issuer_id}</span>
      <span>token: {props.response.receipt.cc.tokenize.datakey}</span>
      <span>token: {props.response.receipt.cc.tokenize.first4last4}</span>
      <span>token: {props.response.receipt.cc.tokenize.message}</span>
    </div>
  );
};

export default MonerisResponse;
