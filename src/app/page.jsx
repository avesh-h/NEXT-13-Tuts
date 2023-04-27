"use client";
import React, { useState, useEffect } from "react";
import Courses from "./components/Courses";
import LoadingPage from "./loading";
import CoursesSearch from "./components/CoursesSearch";

// Route = '/'

const HomePage = () => {
  const [courseData, setCourseData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCourse = async () => {
      const data = await fetch("http://localhost:3000/api/database");
      const response = await data.json();
      setCourseData(response);
      setLoading(false);
    };
    fetchCourse();
  }, []);

  // const searchHandler = async (query) => {
  //   const filteredData = await fetch(
  //     `http://localhost:3000/api/database/search?query=${query}`
  //   );
  //   const responseData = filteredData.json();
  //   setCourseData(responseData);
  //   setLoading(false);
  // };

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div>
      <h1>Welcome to courses</h1>
      <CoursesSearch setCourseData={setCourseData} />
      <Courses courseData={courseData} />
    </div>
  );
};

export default HomePage;
