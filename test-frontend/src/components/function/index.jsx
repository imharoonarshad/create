// import React from "react";


const Main = () => {

  // const MIN_LEVEL = 5
  // const MAX_LEVEL = 15

  // Light Switch | Brightnesses for given Bulb Capacity
  // Dimmer Level | 5 Watt | 10 Watt | 20 Watt
  // 5            | 0      | 0       | 0
  // 10           | 2.5    | 5       | 10
  // 15           | 5      | 10      | 20
  // 6            |  .5.   | 1.      | 2

  const theadData = ["Name", "Email", "Date"];


  return (

    <table>
      <tr>
        {theadData.map(item =>
          <th>{item}</th>)}

      </tr>
      <tr>
        <td>Jill</td>
        <td>Smith</td>
        <td>50</td>

      </tr>
      <tr>
        <td>Eve</td>
        <td>Jackson</td>
        <td>94</td>

      </tr>
      <tr>
        <td>Adam</td>
        <td>Johnson</td>
        <td>67</td>

      </tr>
    </table>
  );
};

export default Main;
