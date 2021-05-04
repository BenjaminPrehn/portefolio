(async function getProjects() {
    try {

        $.ajax({
            method: "GET",
            url: '/api/projects',
            dataType: 'json'
        }).done(function(data) {

            $.each(data, function(i, projects) {

                projects.forEach(function(value) {
                    $('<div class="card-size">').appendTo("#projects")
                        .append($("<h1></h1>").text(value.title))
                        .append($('<img class="img-size" src="' + value.image + '">'))
                        .append($("<h3></h3>").text(value.description))
                        .append($('<a href="' + value.gitLink + '"> <button type="button" class="btn btn-success">Go Github</button> </a>'))
                });
            });
        })

    } catch (error) {
        console.log(error);
    }

})();