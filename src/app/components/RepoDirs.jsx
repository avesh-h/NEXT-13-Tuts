import React from "react";
import Link from "next/link";

const fetchDirs = async (name) => {
  const data = await fetch(
    `https://api.github.com/repos/avesh-h/${name}/contents`,
    {
      next: { revalidate: 60 },
    }
  );
  //For delay the api response
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const contents = await data.json();
  return contents;
};

const RepoDirs = async ({ name }) => {
  const dirs = await fetchDirs(name);
  const data = dirs.filter((d) => d.type === "dir");
  return (
    <div>
      <h3>Directories</h3>
      <ul>
        {data.map((dir) => (
          <li key={`d-${dir.path}`}>
            <Link href={`code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoDirs;
