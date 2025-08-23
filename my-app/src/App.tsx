import { useState } from "react";
import { InputField } from "./component/InputField";
import { DataTable } from "./component/DataTable";
import type { Column } from "./component/DataTable";

interface User {
  id: number;
  name: string;
  email: string;
};

const users: User[] = [
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
  { id: 3, name: "Charlie", email: "charlie@mail.com" },
];

const columns: Column<User>[] = [
  { key: "id", title: "ID", dataIndex: "id" },
  { key: "name", title: "Name", dataIndex: "name"},
  { key: "email", title: "Email", dataIndex: "email" },
];

function App() {

  const [inputValue, setInputValue] = useState("");

  return (
    <div className="p-6 space-y-6">

      <InputField 
        label="Username" 
        placeholder="Enter your username" 
        value={inputValue} onChange={(e) => setInputValue(e.target.value)} 
        helperText="This is a helper text" 
        variant="outlined" 
        size="md"
      />

      <DataTable<User>
        data={users}
        columns={columns}
        loading={false}
      />
    </div>
  );

};

export default App;