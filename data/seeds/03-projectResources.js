exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projectResources")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projectResources").insert([
        { projectID: 1, resourceID: 1 },
        { projectID: 1, resourceID: 4 },
        { projectID: 1, resourceID: 6 },
        { projectID: 1, resourceID: 9 },
        { projectID: 1, resourceID: 8 },
        { projectID: 1, resourceID: 10 },
        { projectID: 1, resourceID: 11 },
        { projectID: 1, resourceID: 12 },
        { projectID: 1, resourceID: 13 },
        { projectID: 1, resourceID: 14 },
        { projectID: 2, resourceID: 2 },
        { projectID: 2, resourceID: 3 },
        { projectID: 2, resourceID: 4 },
        { projectID: 2, resourceID: 5 },
        { projectID: 2, resourceID: 6 },
        { projectID: 2, resourceID: 7 },
        { projectID: 2, resourceID: 8 },
        { projectID: 2, resourceID: 9 },
        { projectID: 2, resourceID: 10 },
        { projectID: 2, resourceID: 11 },
        { projectID: 2, resourceID: 12 },
        { projectID: 3, resourceID: 13 },
        { projectID: 3, resourceID: 14 }
      ]);
    });
};
