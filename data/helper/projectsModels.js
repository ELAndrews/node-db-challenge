const db = require("../dbConfig");

// -------------- GET ALL --------------- //

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
      "tasks.taskId",
      "projects.title",
      "projects.projectDescription",
      "tasks.taskDescription",
      "tasks.completed"
    );
}

// -------------- GET BY ID --------------- //

function getProjectById(id) {
  return db("projects").where({ projectID: id });
}

function getFullProjectDataById(id) {
  return db.raw(
    db("projects")
      .select(
        "projects.projectID",
        "projects.title",
        "projects.projectDescription",
        "projects.completed"
      )

      .join("tasks", "projects.projectID", "tasks.projectID")
      .select(
        "tasks.taskID",
        "tasks.taskDescription",
        "tasks.notes",
        "tasks.completed"
      )

      .join(
        "projectResources",
        "projects.projectID",
        "projectResources.projectID"
      )
      .join("resources", "projectResources.resourceID", "resources.resourceID")
      .select(
        "projectResources.id",
        "resources.resourceName",
        "resources.resourceDescription"
      )
      .where({ "projects.projectID": id })
  );
}

function getResourcesById(id) {
  return db("resources").where({ resourceID: id });
}

function getTaskById(id) {
  return db("resources").where({ taskID: id });
}

// -------------- ADD --------------- //

function addProject(payload) {
  return db("projects").insert(payload);
}

function addResource(payload) {
  return db("resources").insert(payload);
}

function addTask(payload) {
  return db("tasks").insert(payload);
}

module.exports = {
  getProjects,
  getResources,
  getTasks,
  getProjectById,
  getFullProjectDataById,
  getResourcesById,
  getTaskById,
  addResource,
  addProject,
  addTask
};
