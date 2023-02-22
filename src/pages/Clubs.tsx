import { Plus } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Clubs() {
  return (
    <div className="flex container mx-auto">
      <div className="w-1/5 h-screen p-3 bg-violet-500 text-white text-lg font-semibold rounded-tr-2xl rounded-br-2xl">
        <h1 className="text-center text-2xl mb-3">Data click</h1>
        <ul className="text-center">
          <li className="p-2 rounded-md hover:bg-violet-600">
            <NavLink to={"/users"}>Usuários</NavLink>
          </li>
          <li className="p-2 rounded-md hover:bg-violet-600">
            <NavLink to={"/clubs"}>Clubes</NavLink>
          </li>
        </ul>
      </div>
      <div className="w-4/5 p-3">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-start text-2xl">Clubes</h1>
          <button className="px-4 py-2 flex items-center bg-violet-500 rounded-md text-white font-semibold hover:bg-violet-600">
            <Plus className="mr-3" size={15} />
            Novo
          </button>
        </div>

        <div className="relative overflow-x-auto sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nome
                </th>
                <th scope="col" className="px-6 py-3">
                  E-mail
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4 text-right">
                  <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    Edit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
