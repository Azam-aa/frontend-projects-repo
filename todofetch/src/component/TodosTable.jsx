import { useEffect, useState } from "react";

const TodosTable = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data.todos);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Todos List</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">ID</th>
              <th className="border px-4 py-2 text-left">Todo</th>
              <th className="border px-4 py-2 text-left">Completed</th>
              <th className="border px-4 py-2 text-left">User ID</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{item.id}</td>
                <td className="border px-4 py-2">{item.todo}</td>
                <td className="border px-4 py-2">
                  {item.completed ? "Yes" : "No"}
                </td>
                <td className="border px-4 py-2">{item.userId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodosTable;
