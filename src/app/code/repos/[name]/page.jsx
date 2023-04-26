import React, { Suspense } from "react";
import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";

// OR;
// import Repo from "../../../components/Repo";

// In this file you can see the dynamic route and can see how dynamic route is working in Next 13
// Route = "/code/repos/[name of repo]"

const SingleRepoPage = ({ params: { name } }) => {
  // Above argument was = {params} so we have to write params.name , so instead of that we direct distructure in params

  return (
    <div>
      <h2>Repo :- {name}</h2>
      {/* We add suspense for if api take time to give us response so for that we can show the user the delay with loading text */}
      <Suspense fallback={<div>Loading repo...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading Directories...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
};

export default SingleRepoPage;
