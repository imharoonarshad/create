import React, {useEffect} from "react";
import axios from "axios";

const BasicTable = ({ watts, logsArray }) => {
  


  return (

    <div className="card p-1">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">NO#</th>
            {watts.map((i, index) => {
              return <th scope="col" key={index}>{i} Watt</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">ONE</th>
            {logsArray.map((i, index) => {
              return <td key={index}> {i} </td>;
            })}
          </tr>

        </tbody>
      </table>
    </div>
  );
};
export default BasicTable; 