import React from "react";
const Table = ({ data, Delete, Checkout,setEditInputEmail ,setEditInputName,setEditInputAge,setEditInputJob}) => {
  const handleChange=(e)=>{
setEditInputName(e.name)
setEditInputAge(e.age)
setEditInputEmail(e.email)
setEditInputJob(e.job)

  }
  return (
    <>
      {data.map((e, i) => (
        <tr key={e.id}>
          <td className="border p-[10px]">{i + 1}</td>
          <td className="border p-[10px]">{e.name}</td>
          <td className="border p-[10px]">{e.age}</td>
          <td className="border p-[10px]">{e.email}</td>

          <td className="border p-[10px]">
            {e.status ? (
              <span className="text-green-800 bg-green-200 px-[10px] py-[5px] rounded">
                Active
              </span>
            ) : (
              <span className="text-red-800 bg-red-200 px-[10px] py-[5px] rounded">
                Inactive
              </span>
            )}
          </td>

          <td className="border p-[10px]">{e.job}</td>

          <td className="border p-[10px]">
            <button
              className="bg-red-200 text-red-700 p-[10px] rounded"
              onClick={() => Delete(e.id)}
            >
              Delete
            </button>
            <button
              onClick={() => handleChange(e)}
              className="bg-blue-200 text-blue-700 p-[10px] rounded mx-2"
            >
              Edit
            </button>
            <input
              checked={e.status}
              type="checkbox"
              onChange={() => Checkout(e.id)}
            />
          </td>
        </tr>
      ))}
    </>
  );
};

export default Table;
