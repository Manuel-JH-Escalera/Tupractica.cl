import React from "react";
import { Navbar } from "../component/Navbar";
import Searcher from "../component/Searcher";
import JobList from "../component/JobsList";
import { Footer } from "../component/footer";
import { Vehicles } from "../component/JobsApi";

function Jobs() {
  return (
    <>
      <Searcher />
      <JobList />
      <Vehicles />
    </>
  );
}

export {Jobs};
