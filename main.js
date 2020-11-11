
$("button").on("click", function () {
    let address = $("#addr-input").val()
    let minPrice = $("#min-p-input").val()
    let maxPrice = $("#max-p-input").val()
    let minRooms = $("#min-r-input").val()
    let maxRooms = $("#max-r-input").val()
    let parking = $("#park-y")
    let immediate = $("#immed-y")

    console.log(parking)

    let relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, immediate,parking)
    renderApts(relevantApts)
})

const renderApts = function (apartments) {
    $("#results").empty()
    console.log(apartments) //array of apartments to render
    //Your code goes here.
    const source = $('#apartments-template').html();
    const template = Handlebars.compile(source)
    const newHTML = template({apartments});
    $('#results').append(newHTML);
}

renderApts(apartments) //renders apartments when page loads