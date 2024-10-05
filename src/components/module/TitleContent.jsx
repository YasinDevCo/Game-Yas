import React from "react";

function TitleContent({ title }) {
  return (
    <>
      <h2
        style={{
          color: "var(--text-color)",
          fontWeight: "400",
          fontSize: "1.5rem",
          borderBottom: "1px solid var(--text-color)",
          display: "inline-block",
          position: "relative",
          right: "50%",
          transform: "translateX(50%)",
          margin: "50px 0",
          paddingBottom: "10px",
        }}
      >
        {title}
      </h2>
    </>
  );
}

export default TitleContent;
