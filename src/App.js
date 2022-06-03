import React, { useState } from "react";
import users from "./data";
import Card from "./Card";

function App() {
  const [data, setData] = useState(users);
  return (
    <main>
      <Card items={data}></Card>
    </main>
  );
}

export default App;
