import { NextResponse } from "next/server";
import data from "../data.json";

export const GET = async (request) => {
  // const getData = NextResponse(data)

  //If you want all query from the url
  //   const { searchParams } = new URL(request.url);
  //   console.log("param->", searchParams);

  // if you want the only specific query from the url
  const { searchParams } = new URL(request.url);
  //   console.log("param->", searchParams.get("query"));
  const param = searchParams.get("query");

  console.log("para->", param);

  //after the filter we send filtered response.

  const filteredData = data.filter((d) =>
    d.title.toLowerCase().includes(param.toLowerCase())
  );
  if (filteredData.length) {
    return NextResponse.json(filteredData);
  } else {
    return NextResponse.json([]);
  }
};
