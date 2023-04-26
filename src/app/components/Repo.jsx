import React from "react";
import Link from "next/link";

//This is server component of next js so we don't need to use useEffect to call the api and get the response

const fetchRepo = async (name) => {
  const repo = await fetch(`https://api.github.com/repos/avesh-h/${name}`, {
    next: { revalidate: 60 },
  });
  const response = await repo.json();
  return response;
};

const Repo = async ({ name }) => {
  const data = await fetchRepo(name);
  return (
    <div
      style={{ border: "1px solid green", width: "50%", borderRadius: "5px" }}
    >
      <h3>{data.name}</h3>
      <p>{data.description}</p>
      <Link href={`${data.html_url}`} target="_blank">
        Go To Repo
      </Link>
    </div>
  );
};

export default Repo;
