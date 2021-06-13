import React from "react";

export const Loader: React.FC<{}> = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        position: "fixed",
        background: "rgba(0, 0, 0, 0.5)",
        color: "white",
      }}
    >
      <p>Loading...</p>
    </div>
  );
};
