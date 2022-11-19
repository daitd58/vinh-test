import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Anoucement } from "./Anoucement";
import { Bookmark } from "./Bookmark";
import { CourseContent } from "./courseContent";
import { Grade } from "./Grade";
import { OverView } from "./overView";
import { QA } from "./Q&A";

export const Layout = () => {
  return (
    <Tabs>
      <TabList>
        <div className="d-flex">
          <Tab className={"p30"}>Over View</Tab>
          <Tab className={"p30"}>Annoucement</Tab>
          <Tab className={"p30"}>Course content</Tab>
          <Tab className={"p30"}>Bookmark</Tab>
          <Tab className={"p30"}>Q&A</Tab>
          <Tab className={"p30"}>Grade</Tab>
        </div>
      </TabList>

      <TabPanel>
        <OverView></OverView>
      </TabPanel>
      <TabPanel>
        <Anoucement></Anoucement>
      </TabPanel>
      <TabPanel>
        <CourseContent></CourseContent>
      </TabPanel>
      <TabPanel>
        <Bookmark></Bookmark>
      </TabPanel>
      <TabPanel>
        <QA></QA>
      </TabPanel>
      <TabPanel>
        <Grade></Grade>
      </TabPanel>
    </Tabs>
  );
};
