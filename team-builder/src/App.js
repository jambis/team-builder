import React, { useState } from "react";
import Form from "./Components/Form";
import Member from "./Components/Member";

function App() {
  const [team, setTeam] = useState([]);

  const addMember = member => {
    setTeam(oldTeam => [...oldTeam, member]);
  };

  return (
    <div style={{ margin: "20px auto", width: "100%" }}>
      <Form addMember={addMember} />
      {team.length > 0 ? (
        <div style={{ textAlign: "center" }}>
          <h1>Team Members</h1>
        </div>
      ) : null}
      {team.map(member => {
        return <Member member={member} />;
      })}
    </div>
  );
}

export default App;
