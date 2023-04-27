import React from "react";

// we before do with server component now then we are doing with client component because we cannot add the server component inside the client component

// export const fetchDummyData = async () => {
//   const getData = await fetch("http://localhost:3000/api/database");
//   const finalData = getData.json();
//   return finalData;
// };

const Courses = ({ courseData }) => {
  console.log("courseData", courseData);
  //for server component
  // const courseData = await fetchDummyData();
  return (
    <div>
      {courseData.length ? (
        courseData.map((d) => (
          <div key={d.id}>
            <h2>{d.title}</h2>
            <p>{d.description}</p>
            <p>{d.level}</p>
          </div>
        ))
      ) : (
        <div>There is no data!</div>
      )}
    </div>
  );
};

export default Courses;
