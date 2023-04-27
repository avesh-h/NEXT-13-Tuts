import { NextResponse } from "next/server";
import data from "./data.json";

// for below route we have to send GET request from the postman for get the data

// In the NEXT 13 we did not use the axios to make get,post request we directly name the function what kind of request we have to make

export const GET = async (request) => {
  return NextResponse.json(data);
};

//Post request
export const POST = async (request) => {
  //   const postData = await request.json();
  // data.push(postData);

  //TO add new data inside the data.json file please check with postman app
  const newData = {
    id: 55,
    title: "Swelte js",
    description: "New Swelete course",
    link: "https://www.traversymedia.com",
    level: "All Levels",
  };
  data.push(newData);
  return NextResponse.json(data);
};
