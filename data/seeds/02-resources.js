exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        { resourceName: "Timber", resourceDescription: "4 x 6" },
        { resourceName: "Cedar", resourceDescription: "2 x 2" },
        { resourceName: "copper piping" },
        { resourceName: "Lag screws" },
        { resourceName: "nails" },
        { resourceName: "Washers", resourceDescription: "Various sizes" },
        {
          resourceName: "Circular Saw",
          resourceDescription: "None-portable, Table Saw"
        },
        {
          resourceName: "Orbit Sander",
          resourceDescription: "Various grades of sandpaper in kit"
        },
        { resourceName: "Hand-held circular saw" },
        {
          resourceName: "Hammer",
          resourceDescription: "various sizes and types"
        },
        { resourceName: "Silvers" },
        {
          resourceName: "Hammer Drill",
          resourceDescription: "3 different settings: hammer, drill, screw"
        },
        {
          resourceName: "Paint",
          resourceDescription: "All safety equipment provided"
        },
        {
          resourceName: "Paint Brushes",
          resourceDescription: "Selection to pick from"
        },
        { resourceName: "Wine" },
        { resourceName: "Book" }
      ]);
    });
};
