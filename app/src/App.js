import React from 'react';
import { useState } from 'react';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import './App.css';
import 'react-tabs/style/react-tabs.css';
import styled from "styled-components";

const Box = styled.div`
    display: flex;
    width: 100%;
    height: 400px;
    padding: 15px
`

const ItemLeft = styled.div`
    width: 70%;
    height: 100%;
`

const ItemRight = styled.div`
    width: 30%;
`


function App() {
  const [tab, setTab] = useState(0);

  return (
    <div className="App">
      <Tabs selectedIndex={tab} onSelect={(index) => setTab(index)}>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Annoucement</Tab>
          <Tab>Course Content</Tab>
          <Tab>Bookmark</Tab>
          <Tab>Q&A</Tab>
          <Tab>Grade</Tab>
        </TabList>
        <TabPanel>
          <Box>
            <ItemLeft>Tab Overview</ItemLeft>
            <ItemRight>...Overview</ItemRight>
          </Box>
        </TabPanel>
        <TabPanel>Tab Annoucement</TabPanel>
        <TabPanel>Tab Course</TabPanel>
        <TabPanel>Tab Bookmark</TabPanel>
        <TabPanel>Tab Q&A</TabPanel>
        <TabPanel>Tab Grade</TabPanel>
      </Tabs>
    </div>
  );
}

export default App;