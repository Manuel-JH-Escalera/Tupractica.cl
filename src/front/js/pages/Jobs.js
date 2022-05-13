import React from "react";
import { Navbar } from "../component/navbar";
import Searcher from "../component/Searcher";
import JobList from "../component/JobsList";
import { Footer } from "../component/footer";

function Jobs() {
  return (
    <>
      <Navbar />
      <Searcher />
      <JobList />
      <Footer />
    </>
  );
}

export default Jobs;
