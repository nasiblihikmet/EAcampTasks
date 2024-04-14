import React, { useMemo } from "react";
import { data } from "../../constants/data";

function Task1() {
  const fetchData = useMemo(() => {
    function fetchData(data) {
      let dataEmail = data?.find((item) => {
        if (item.attribute == "email") return item.attribute;
      });
      const channelData = dataEmail.emails.filter((item) =>
        item.channel_id == 4505 ? item.channel_id : ""
      );

      console.log("channelData", channelData);
      return channelData;
    }
    return fetchData(data);
  }, []);

  return (
    <div>
      <h2>Task -1</h2>
      {fetchData?.map((item, index) => {
        return (
          <div key={`${index}+item`}>
            <div>Channel-id: {item.channel_id}</div>
            <div>Email: {item.email}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Task1;
