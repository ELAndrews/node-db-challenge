const express = require("express");
const projects = require("../helper/projectsModels");

const router = express.Router();

// -------------- GET REQUESTS --------------- //

router.get("/projects", (req, res) => {
  projects
    .getProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json({ message: "Failed to getting projects" });
    });
});

router.get("/projects/:id", (req, res) => {
  projects
    .getFullProjectDataById(req.params.id)
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      console.log(error.message);
      //   res.status(500).json({ message: "Failed to getting project details" });
    });
});

router.get("/resources", (req, res) => {
  projects
    .getResources()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(error => {
      res.status(500).json({ message: "Failed to getting resources" });
    });
});

router.get("/tasks", (req, res) => {
  projects
    .getTasks()
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(error => {
      res.status(500).json({ message: "Failed to getting tasks" });
    });
});

// -------------- POST REQUESTS --------------- //

router.post("/projects", (req, res) => {
  projects
    .addProject(req.body)
    .then(newID => {
      res
        .status(201)
        .json(`This project was successfully created with the id: ${newID}`);
    })
    .catch(error => {
      res.status(500).json({ message: "Failed to add new project" });
    });
});

router.post("/resources", (req, res) => {
  projects
    .addResource(req.body)
    .then(newID => {
      res
        .status(201)
        .json(`This resource was successfully created with the id: ${newID}`);
    })
    .catch(error => {
      res.status(500).json({ message: "Failed to add new resource" });
    });
});

router.post("/tasks", (req, res) => {
  projects
    .addTask(req.body)
    .then(newID => {
      res
        .status(201)
        .json(`This task was successfully created with the id: ${newID}`);
    })
    .catch(error => {
      res.status(500).json({ message: "Failed to add new task" });
    });
});

module.exports = router;
