function picker() {
    // get form data
    let formdata = $("#inputform").serializeArray(); // use jQuery to assemble key-value pairs


    let graphapi = "https://graph.facebook.com/";
    let requesturl = graphapi + formdata[1].value + "/comments?limit=1000";

    $.get(
        requesturl,
        {"access_token": formdata[0].value},
        function (data) {
            // console.log(data);

        }
    );

}

