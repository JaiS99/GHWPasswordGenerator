import React from "react";
import {usePasswords} from "./db"

const TableComponent = () => {
    const passwords = usePasswords();

  
  return (
    <table className='min-w-full divide-y divide-pink-200 mt-4 mx-auto border-2 border-pink-800'>
    <thead>
    <tr>
    <th className='px-6 py-3 bg-pink-100 text-left text-sm text-pink-600 uppercase w-10'>
    ID
    </th>
    <th className='px-6 py-3 bg-pink-100 text-left text-sm text-pink-600 uppercase w-80'>
    Website
    </th>
    <th className='px-6 py-3 bg-pink-100 text-left text-sm text-pink-600 uppercase w-96'>
    Passwords
    </th>
      <th className='px-6 py-3 bg-pink-100 text-left text-sm text-pink-600 uppercase w-96'>
    Created On
    </th>
    </tr>
    </thead>
      <tbody className='bg-pink-50 divide-y divide-pink-400'>
        {
          passwords && passwords.map((eachPassword) => (
            <tr key={eachPassword.id}>
            <td className='px-6 py-4 whitespace-nowrap'>{eachPassword.id}</td>
            <td className='px-6 py-4 whitespace-nowrap'>{eachPassword.website}</td>
            <td className='px-6 py-4 whitespace-nowrap'>{eachPassword.password}</td>
            <td className="px-6 py-4 whitespace-nowrap">
                {eachPassword.createdOn.split("T")[0]},{" "}{
                  new Date(eachPassword.createdOn).toLocaleTimeString("en-GB", {
                    timeStyle: "long",
                    hour12: false
                  })
                }
              </td>

            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default TableComponent;