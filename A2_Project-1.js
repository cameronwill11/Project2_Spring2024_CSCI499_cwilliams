function apisearch(){
    $.ajax({
        type: 'GET',
        dataType:"jsonp",
        url: "https://www.googleapis.com/customsearch/v1?key=AIzaSyDVnEJpQXazHuvu0QE66HCa39cUaH1WMLE&cx=4764c188cb0fd4115&q=" + $("#querybox").val(),
        success: function (result) {
            console.log('data: ', result);
            var searchOutput = '';
            var len = result.items.length;
            for (i = 0; i < len; i++) {
                searchOutput += `<p><a href="${result.items[i].title}">${result.items[i].link}</a>: ${result.items[i].snippet}</p>`;
            }
    
            $("#output").html(searchOutput);
    
        }
    });   
}

// DO NOT CHANGE CODE ABOVE EXCEPT LINE 5 AS STATED IN THE ASSIGNMENT. YOU MAY COPY THE ABOVE FUNCTION FOR QUESTION (4) OF JS.

// START TYPING BELOW

function displayResults(results) {
    const resultsContainer = document.getElementById("searchResults");
    resultsContainer.innerHTML = results.map(result => `<p>${result}</p>`).join('');
 }
 
  function toggleFade() {
    var content = document.getElementById("content");
    content.classList.toggle("hidden");
  }
  function ChangeBColor() {
    // Generate a random color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
 }
 //