"use client";

import { useState } from "react";
import Search from "./Search";
import Pagination from "./Panigation";
import { paginate } from "@/helpers";

const JobList = (props) => {
  console.log(props);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;

  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  const paginatedPosts = paginate(props.results, currentPage, pageSize);
  console.log(paginatedPosts);
  return (
    <div>
      <Search />
      <div className="md:container md:mx-auto px-4">
        <h1 className="text-4xl font-bold text-center pt-5">
          Landing Page Hunt
        </h1>
        <h2 className="pb-5 text-center">
          An inspiration bucket for your next landing page.
        </h2>
        <div className="flex flex-row flex-wrap justify-center gap-8">
          {paginatedPosts?.length &&
            paginatedPosts.map((project) => (
              <div key={project.url} className="p-2">
                <div className="text-2xl text-center py-3">
                  <a href={project.url}>{project.project_name}</a>
                </div>
                <div className="mt-2">
                  <img
                    src="https://www.shutterstock.com/image-photo/presentation-project-management-areas-knowledge-600nw-706715482.jpg"
                    width="250"
                  />
                  <h3>{project?.last_accessed}</h3>
                </div>
              </div>
            ))}
        </div>
        <Pagination
          items={props.count}
          currentPage={currentPage} // 1
          pageSize={pageSize}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default JobList;
