
// These variables will hold the results we get from the user's inputs via HTML

var searchTerm = "";
var numResults = 0;
var startYear = 0;
var endYear = 0;

var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  authKey + "&q=";

// counter the articles 
  var articleCounter = 0;



      // Then display the remaining fields in the HTML (Section Name, Date, URL)
  $("#articleWell-" + articleCounter)
  .append("<h5>Section: " + NYTData.response.docs[i].section_name + "</h5>");
$("#articleWell-" + articleCounter)
  .append("<h5>" + NYTData.response.docs[i].pub_date + "</h5>");
$("#articleWell-" + articleCounter)
  .append(
    "<a href='" + NYTData.response.docs[i].web_url + "'>" +
    NYTData.response.docs[i].web_url + "</a>" 
  );   


  searchTerm = $("#search-term").val().trim();
  var searchURL = queryURLBase + searchTerm;


  searchTerm = $("#search-term").val().trim();
  var searchURL = queryURLBase + searchTerm;

  // Number of results the user would like displayed 
  numResults = $("#num-records-select").val();

  // Start Yeart
  startYear = $("#start-year").val().trim(); 

  // End Year  / end year  
  endYear = $("#end-year").val().trim();

  
  if (parseInt(startYear)) {
    searchURL = searchURL + "&begin_date=" + startYear + "0101";
  }

  if (parseInt(endYear)) {
    searchURL = searchURL + "&end_date=" + endYear + "0101";
  }

  // Then we will pass the final searchURL and the number of results to
  // include to the runQuery function ..
  runQuery(numResults, searchURL);
});

// This button clears the top articles section
$("#clear-all").on("click", function() {
  articleCounter = 0;
  $("#well-section").empty();
});
