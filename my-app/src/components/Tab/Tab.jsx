import React, { useState } from "react";

const Tab = (props) => {
  const { children } = props;
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  return (
    <div>
      <div>
        {children.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedTabIndex(index);
            }}
          >
            {item.props.title}
          </button>
        ))}
      </div>
      <div>{children[selectedTabIndex]}</div>
    </div>
  );
};

export default Tab;
