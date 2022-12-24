import { useState } from "react";

function Folder({ exp }) {
  const [expand, setExpand] = useState(false);

  if (exp.isFolder) {
    return (
      <div>
        <span onClick={() => setExpand(!expand)}>{exp.name}</span>

        <div
          style={{ display: expand ? "block" : "none", paddingLeft: "15px" }}
        >
          {exp.items.map((item) => {
            return <Folder key={item.name} exp={item} />;
          })}
        </div>
      </div>
    );
  }
  return (
    <div>
      <span>{exp.name}</span>
      <br />
    </div>
  );
}

export default Folder;
