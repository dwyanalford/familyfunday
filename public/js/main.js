// $(document).ready(function() {
//   /* global moment */

//   // Click events for the edit button
//   $(document).on("click", "button.edit", handlePostEdit);
//   var events;
//   // Sets a flag for whether or not we're updating a post to be false initially
//   var updating = false;

//   // This function figures out which post we want to edit and takes it to the
//   // Appropriate url
//   function handlePostEdit() {
    
//     var currentPost = $(this)
//       .parent()
//       .parent()
//       .data("post");
//     window.location.href = "/new?post_id=" + currentPost.id;
//   }

//    // Update a given post, bring user to the blog page when done
//   function updatePost(post) {
//     $.ajax({
//       method: "PUT",
//       url: "/api/posts",
//       data: post
//     })
//     .done(function() {
//       window.location.href = "/success";
//     });
//   }

// });
