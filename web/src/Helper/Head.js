import React from "react";

const Head = (props) => {
  React.useEffect(() => {
    document.title = props.title + " | Dr. Roberto Limongi";
    document
      .querySelector("meta[name='description']")
      .setAttribute("content", props.description || "");
  }, [props]);

  return <></>;
};

export default Head;