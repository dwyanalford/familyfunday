$(document).ready(function() {
  // Gets an optional query string from our url (i.e. ?post_id=23)
  var url = window.location.search;
  var eventId;
  // Sets a flag for whether or not we're updating an event to be false initially
  var updating = false;

  // If we have this section in our url, we pull out the post id from the url
  // In localhost:8080/cms?post_id=1, eventId is 1
  if (url.indexOf("?post_id=") !== -1) {
    eventId = url.split("=")[1];
    getEventData(eventId);
  }

  // Getting jQuery references to the post body, title, form, and category select
  var nameInput = $("#name");
  var dateInput = $("#date");
  var timeInput = $("#time");
  var venueInput = $("#venue");
  var descriptionInput = $("#description");
  var createForm = $("#createEventForm");
  var eventCategorySelect = $("#category");

  // Giving the eventCategorySelect a default value
  eventCategorySelect.val("Arts/Culture");

  // Adding an event listener for when the form is submitted
  $(createForm).on("submit", function handleFormSubmit(event) {
    event.preventDefault();

    // Constructing a newEvent object to hand to the database
    var newEvent = {
      name: nameInput.val().trim(),
      date: dateInput.val().trim(),
      time: timeInput.val().trim(),
      venue: venueInput.val().trim(),
      description: descriptionInput.val().trim(),
      category: eventCategorySelect.val()
    };

    console.log(newEvent)

    // If we're updating an event, run updateEvent to update 
    // Otherwise run submitEvent to create a whole new event
    if (updating) {
      newEvent.id = eventId;
      updateEvent(newEvent);
    }
    else {
      submitEvent(newEvent);
      // Empty input box by replacing the value with an empty string
      $("#name").val("");
      $("#date").val("");
      $("#time").val("");
      $("#venue").val("");
      $("#description").val("");
      $("#category").val("");
    }
  });

  // Submits a new event and alerts user of success
  // and then brings user to home page upon completion
  function submitEvent(Events) {
    $.post("/api/events/", Events, function() {

    // alert user of success 
      alert("Your event was successfully submitted");
      window.location.href = "/";
    });
  }

  // Gets events data for an event if we're editing
  function getEventData(id) {
    $.get("/api/events/" + id, function(data) {
      if (data) {
        // If this event exists, prefill our create event form with its data
        nameInput.val(data.name);
        dateInput.val(data.date);
        timeInput.val(data.time);
        venueInput.val(data.venue);
        descriptionInput.val(data.description);
        eventCategorySelect.val(data.category);
        // If we have an event with this id, set a flag for us to know to update the event
        // when we hit submit
        updating = true;
      }
    });
  }

  // Update a given event, bring user to the home page when done
  function updateEvent(post) {
    $.ajax({
      method: "PUT",
      url: "/api/events",
      data: post
    })
    .done(function() {
      window.location.href = "/";
    });
  }
});
