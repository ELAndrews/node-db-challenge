const db = require("../dbConfig");

function getProjects() {
  return db("projects");
}

function getResources() {
  return db("resources");
}

function getTasks() {
  return db("tasks")
    .join("projects", "tasks.projectID", "projects.projectID")
    .select(
      "tasks.id",
      "projects.title",
      "projects.projectDescription",
      "tasks.taskDescription",
      "tasks.completed"
    );
}

function addResource(payload) {
  return db("resources").insert(payload);
}

function addProject(payload) {
  return db("projects").insert(payload);
}

function addTask(payload) {
  return db("tasks").insert(payload);
}

module.exports = {
  getProjects,
  getResources,
  getTasks,
  addResource,
  addProject,
  addTask
};
