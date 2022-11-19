import React from "react";
import styled from "styled-components";

export const Bookmark = () => {
  return (
    <div>
      <h1>Bookmark</h1>
     <Form>
      <div><input type="checkbox"/></div>
      <div><input type="checkbox"/></div>
      <div><input type="checkbox"/></div>
    
     </Form>
    </div>
  );
};
const Form = styled.div`
display: block;`
