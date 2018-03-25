function picker() {
    // get form data
    let formdata = $("#inputform").serializeArray(); // use jQuery to assemble key-value pairs


    let graphapi = "https://graph.facebook.com/";
    let requesturl = graphapi + formdata[1].value + "/comments?limit=1000";

    $.get(
        requesturl,
        {"access_token": formdata[0].value},
        function (data) {
            let nrOfWinners = parseInt(formdata[2].value);
            var winningcomments = [];

            for (var i = 0; i < nrOfWinners; ++i) {
                let number = Math.round( Math.random() * data.data.length );
                winningcomments.push(data.data[number]);
            }

            console.log(winningcomments);

            winningcomments.forEach(function (comment) {
                console.log(comment.from.name);
                $("#winnerlist").append("<li>" + comment.from.name + "</li>");
            });

            $("#result").show();
        }
    );

}

