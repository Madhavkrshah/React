import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/Madhavkrshah`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div>
      Github followers: {data.followers}{" "}
      <img src={data.avatar_url} alt="Github profile picture" width={300} />
    </div>
  );
}

export default Github;
