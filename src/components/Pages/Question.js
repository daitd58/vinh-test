import React from "react";
import styled from "styled-components";

export const Question = () => {
  return (
    <div>
      <Form>
        <ul>
          <li>Question 1</li>
          <li>Question 2</li>
          <li>Question 3</li> 
        </ul>
      </Form>
    </div>
  );
};
const Form = styled.div`
ul li{
  display: inline;
  margin: 10px;
}`;
