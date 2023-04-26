import Link from "next/link";
// import { Card } from "react-bootstrap";

// Route = '/code/repos'

// So this is default behaviour of the next is that all component is server component so we cannot use any type of hook in this type of component we can directly communicate with database

// so in this component we gonna fetch data from the api without using any hook

// this is server side component and we finally able to communicate with api and give the data to the component as you can see in below example

const fetchData = async () => {
  // in previous version of the next js we have getserverside function in which if our data is keep changing then we use that function to show latest data but now in this version we have the next object in which we can add revalidate and set time how often your data will change so it will rerender and give you new data

  const fetchedData = await fetch(
    "https://api.github.com/users/avesh-h/repos",
    {
      next: { revalidate: 60 },
    }
  );

  //To check loading.tsx is working or not
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = fetchedData.json();
  // console.log('data->',response)
  return response;
};

const RepoPage = async () => {
  const getData = await fetchData();
  // console.log("getData->", getData)
  // console.log('this url->','git://github.com/avesh-h/python_practice.git'.split('git://')[1])
  return (
    <div>
      <h1>This Is repositories Page</h1>
      <h2>Project List from api call</h2>
      <ul>
        {getData.map((proj) => {
          return (
            <li
              key={`p-${proj.name}`}
              style={{ border: "1px solid grey", marginTop: "10px" }}
            >
              {/* For directly redirect to the repostiory of github */}
              {/* <Link href={`${proj.html_url}`} target="_blank">
                {proj.name}
              </Link> */}
              <Link href={`/code/repos/${proj.name}`}>
                <h2>{proj.name}</h2>
                <p>{proj.description}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RepoPage;
