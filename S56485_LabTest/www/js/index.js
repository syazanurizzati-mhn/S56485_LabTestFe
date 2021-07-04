$(function () {

    var link1 = crossroads.addRoute("", function () {
        $(".navbar-collapse li").removeClass("active");
        $(".navbar-collapse li a[href='#']").parent().addClass("active");
        var username = sessionStorage.ttoken;
        var datalist = "";
        $.ajax({
            type: "post",
            url: "http://www.skimtech.my/ClassicModels/GetStaff",
            data: datalist,
            cache: false,
            success: function (mydata) {
                var myData = JSON.parse(mydata);
                var lastIndex = myData.length - 1;
                var htmlText = "";
                if (myData[lastIndex].status === 1) {
                    for (var i = 0; i < lastIndex; i++) {
                        htmlText = htmlText + "<tr><td><a href='#viewEmailData/" + myData[i].id + "'>" + myData[i].email + "</a></td></tr>";
                    }

                    $("#tblEmail tbody").html(htmlText);
                }
            },
            error: function () {
                console.log("ajax error!");
                alert("Please contact admin!");
            }
        });

        $("#emailData").hide();
        $("#email").show();


    });

    var link1 = crossroads.addRoute("viewEmailData/{id}", function (id) {
        var datalist = "id=" + id;
        $.ajax({
            type: "post",
            url: "http://www.skimtech.my/ClassicModels/GetStaffById",
            data: datalist,
            cache: false,
            success: function (mydata) {
                var myData = JSON.parse(mydata);
                var lastIndex = myData.length - 1;
                var htmlText = "";
                if (myData.status === 1) {
                        htmlText = htmlText + "<tr><td>" + myData.firstname + 
                        "</td><td>" + myData.extension + 
                        "</td><td>" +myData.jobtitle + 
                        "</td><td>" +myData.id + 
                        "</td><td>" +myData.email + 
                        "</td><td>" +myData.lastname + 
                        "</td><td>" +myData.status +
                        "</td></tr>";

                    $("#tblEmailData tbody").html(htmlText);
                }
            },
            error: function () {
                console.log("ajax error!");
                alert("Please contact admin!");
            }
        });

        $("#email").hide();
        $("#emailData").show();


    });

    function parseHash(newHash, oldHash) {
        crossroads.parse(newHash);
    }

    hasher.initialized.add(parseHash);
    hasher.changed.add(parseHash);
    hasher.init();

});