import React, { useEffect, useState } from "react";

import { projects } from "./data";
import { fetchData } from "./utils/entries";
import axios from "axios";
const Projects = () => {
  const [projectData, setProjects] = useState([]);
  const [assets, setAssets] = useState([]);
  useEffect(() => {
    fetchData().then((res) => {
      const { data } = res;
      setProjects(data.items);
      setAssets(data.includes.Asset);
      console.log(assets);
    });
  }, []);

  const getAssetUrl = (id) => {
    const asset = assets.find((a) => a.sys.id === id);
    return asset ? `https:${asset.fields.file.url}` : "";
  };

  if (!projectData) {
    return (
      <div style={{ marginTop: "2rem" }}>
        <div className="loading"></div>
      </div>
    );
  }
  return (
    <div className="projects">
      <h1 className="title">Projects</h1>
      <div className="title-underline"></div>
      <div className="projects-center">
        {projectData.map((project, index) => {
          const { fields, includes } = project;
          // console.log(includes);
          return (
            <a href={fields.url} className="project" key={index}>
              <img
                src={getAssetUrl(fields.image.sys.id)}
                // src=""
                alt=""
                className="img"
              />
              <h5>{fields.title}</h5>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
