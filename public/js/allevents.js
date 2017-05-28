$(document).ready(function() {
  
  // eventContainer holds all of our posts
  var eventContainer = $("#events-container");
  var eventCategorySelect = $("#category");
  
  eventCategorySelect.on("change", handleEventChange);
  var events;

  // This function grabs events from the database and updates the view
  function getEvents(category) {
    var categoryString = category || "";
    if (categoryString) {
      categoryString = "/category/" + categoryString;
    }
    $.get("/api/events" + categoryString, function(data) {
      console.log("events", data);
      events = data;
      if (!events || !events.length) {
        displayEmpty();
      }
      else {
        initializeRows();
      }
    });
  }


  // Getting the initial list of events
  getEvents();
  // InitializeRows handles appending all of our constructed event HTML inside
  // eventContainer
  function initializeRows() {
    eventContainer.empty();
    var eventsToAdd = [];
    for (var i = 0; i < events.length; i++) {
      eventsToAdd.push(createNewRow(events[i]));
    }
    eventContainer.append(eventsToAdd);
  }

  // This function constructs a event's HTML
  function createNewRow(event) {
    var newPostPanel = $("<div>");
    newPostPanel.addClass("panel panel-default");
    var newPostPanelHeading = $("<div>");
    newPostPanelHeading.addClass("panel-heading");
    var newPostTitle = $("<h2>");
    var newPostDate = $("<small>");
    var newEventCategory = $("<h5>");
    newEventCategory.text("Category: " + event.category);
    newEventCategory.css({
      "float": "right",
      "font-weight": "700",
      "margin-top": "-15px"
    });
    var newPostPanelBody = $("<div>");  
    newPostPanelBody.addClass("panel-body");
    var newPostBody = $("<p>");
    newPostTitle.text(event.name + " ");
    newPostBody.html("<h4>Summary:</h4><p>" + event.description + "</p>");
    newPostDate.text(event.date);
    newPostTitle.append(newPostDate);
    newPostPanelHeading.append(newPostTitle);
    newPostPanelHeading.append(newEventCategory);
    newPostPanelBody.append(newPostBody);
    newPostPanel.append(newPostPanelHeading);
    newPostPanel.append(newPostPanelBody);
    newPostPanel.data("event", event);
    return newPostPanel;
  }


  // This function displays a message if there are no events in db
  function displayEmpty() {
    eventContainer.empty();
    var messageh2 = $("<h2>");
    messageh2.css({ "text-align": "center", "margin-top": "50px" });
    messageh2.html("No events yet for this category, navigate <a href='/cms'>here</a> in order to create a new event.");
    eventContainer.append(messageh2);
  }

  // This function handles reloading new events when the category changes
  function handleEventChange() {
    var newEventCategory = $(this).val();
    getEvents(newEventCategory);
  }

});
