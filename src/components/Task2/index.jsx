import { useFetchData } from "../../hooks/useFetchData";

function Task2() {
  const { data } = useFetchData();

  return (
    <div>
      <h2>Task-2</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data?.map((item, index) => {
          return (
            <div key={`${index}+item`} style={{ width: `200px` }}>
              <div>Channel-id: {item.title}</div>
              <div>Email: {item.id}</div>
              <img src={item.thumbnailUrl} alt="item.id" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Task2;
