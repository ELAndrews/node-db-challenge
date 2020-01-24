exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          title: "Bench",
          projectDescription: "Hand-made timber garden bench for summer",
          completed: false
        },
        {
          title: "Trellis",
          projectDescription:
            "Hand-made cedar wood and copper trellis for honeysuckle",
          completed: false
        },
        {
          title: "Relax and enjoy the Garden",
          projectDescription: "ME TIME!",
          completed: false
        }
      ]);
    });
};
