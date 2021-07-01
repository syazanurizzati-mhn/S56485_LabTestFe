$(function () {

    var link2 = crossroads.addRoute("", function () {
        $("#divClassic").hide();
    });

   
    var link3 = crossroads.addRoute("/classic", function () {
        $(".navbar-collapse li").removeClass("active");
        $(".navbar-collapse li a[href='#classic']").parent().addClass("active");
        var email = sessionStorage.ttoken;
        var datalist = "email=" + email;
        $.ajax({
            type: "post",
            url: "http://172.17.64.91:8080/LabTestFe/GetContactDataById",
            data: datalist,
            cache: false,
            success: function (mydata) {
                var myData = JSON.parse(mydata);

                var lastIndex = myData.length - 1;
                var htmlText = "";
                if (myData[lastIndex].status === 1) {
                    for (var i = 0; i < lastIndex; i++) {
                        htmlText = htmlText + "<tr><td>" + myData[i].id
                            + "</td><td>" + myData[i].email
                            + "</td></tr>";
                    }

                    $("#tblClassic tbody").html(htmlText);
                }
            },
            error: function () {
                console.log("ajax error!");
                alert("Please contact admin!");
            }
        });
        $("#divClassic").show();
    });
    


    function parseHash(newHash, oldHash) {
        crossroads.parse(newHash);
    }

    hasher.initialized.add(parseHash);
    hasher.changed.add(parseHash);
    hasher.init();
});
