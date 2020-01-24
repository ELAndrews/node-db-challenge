exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          projectID: 1,
          taskDescription:
            "Three of the landscape timbers will become the “beams” for the bench’s seat. The timbers are slightly longer than 8 ft. when you buy them, so you’ll need to cut a little off each end to make them exactly 96 in. long. Set each timber on a pair of sawhorses and use a Speed Square to draw a pencil line on all four sides",
          notes: "BE CAREFUL!",
          completed: "false"
        },
        {
          projectID: 1,
          taskDescription:
            "Set your circular saw blade for a full-depth cut. Then, using your square as a guide, make the first cut on one of the wide “faces” of the timber.",
          completed: "false"
        },
        {
          projectID: 1,
          taskDescription:
            "Remove any saw marks left behind with a random orbit sander and 60-grit sandpaper.",
          completed: "false"
        },
        {
          projectID: 1,
          taskDescription:
            "The outside beams of the bench’s seat are supported by L-shape notches in the legs. U-shape notches are also cut into the seat beams so the leg’s faces can sit about 1/4 in. proud of the beams. The notches are all formed the same way using a circular saw, a square and a sharp wood chisel.",
          notes: "Don't get this bit wrong!",
          completed: "false"
        },
        {
          projectID: 1,
          taskDescription:
            "Make the shoulder cuts. Make the kerf cuts. Knock away the slivers",
          notes: "Might need a hammer here",
          completed: "false"
        },
        {
          projectID: 1,
          taskDescription:
            "Drill pilot holes for lag screws. Drive the lag screws",
          completed: "false"
        },
        {
          projectID: 1,
          taskDescription: "Paint to look pretty and protect",
          completed: "false"
        },
        {
          projectID: 2,
          taskDescription:
            "Cut the four legs to length, set them on sawhorses and clamp them all together so that the tops are even.",
          notes: "Use Ceder wood as it it better",
          completed: "false"
        },
        {
          projectID: 2,
          taskDescription:
            "Measure, mark and drill 5/8-in.-diameter holes 28 in., 41-1/2 in. and 59 in. from the tops. Each hole is drilled 1 in. deep at a 10-degree angle.",
          notes: "",
          completed: "false"
        },
        {
          projectID: 2,
          taskDescription: "Make the center posts",
          notes: "MEASURE TWICE",
          completed: "false"
        },
        {
          projectID: 2,
          taskDescription: "Assemble two sides",
          completed: "false"
        },
        {
          projectID: 2,
          taskDescription: "Bend copper pipe scrolls",
          completed: "false"
        },
        {
          projectID: 2,
          taskDescription: "Finally assembly",
          notes: "Use nails or staples to secure the scrolls",
          completed: "false"
        },
        { projectID: 3, taskDescription: "Get Book", completed: "false" },
        {
          projectID: 3,
          taskDescription: "Get wine",
          notes: "PRIORITY",
          completed: "false"
        },
        {
          projectID: 3,
          taskDescription:
            "RELAX! Drink Wine and read a good book in the garden",
          notes: "A cushion would be nice on that brench!",
          completed: "false"
        }
      ]);
    });
};
