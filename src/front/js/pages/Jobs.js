import React from "react";
import { Navbar } from "../component/Navbar";
import Searcher from "../component/Searcher";
import JobList from "../component/JobsList";
import { Footer } from "../component/footer";

function Jobs() {
  return (
    <>
      <Searcher />
      <JobList />
    </>
  );
}

export {Jobs};
