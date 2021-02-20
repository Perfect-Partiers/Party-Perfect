import React from "react";

const styles = {
  card: {
    backgroundColor: "#8dc6bf",
  },
};

function PastDetail(props) {
  const formatDate = (inputDate) => {
    var date = new Date(inputDate);
    if (!isNaN(date.getTime())) {
      // Months use 0 index.
      return (
        date.getMonth() +
        1 +
        "/" +
        (date.getDate() + 1) +
        "/" +
        date.getFullYear()
      );
    }
  };

  return (
    <tr>
      <td className="font-weight-bold">{props.name}</td>
      <td>{formatDate(props.date)}</td>
      <td>{props.address.street}</td>
    </tr>
  );
}

export default PastDetail;
