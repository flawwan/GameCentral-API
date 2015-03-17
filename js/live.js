$("#send").removeAttr("disabled");

var api = {
    match: 0,
    lastMessage: null,
    update: function (data) {
        $.get("update.php", { id: this.match, data: data }); //Lägger till ditt meddelande i databasen
        // this.ajax(); // startar timern
    },
    ajax: function () {
        var interval = setInterval(function () {
            $.get("api.php?id=" + api.match, function (data) {

                //Din tur
//                if (data.you.turn == 1) {
                var data = data.other.data;
                $("#message").focus();//Fokusera muspekaren på textrutan
                //$("#send").removeAttr("disabled");//Lås upp knappen
                if (api.lastMessage != data) {
                    $("#chat").append("Other: " + data + "\n"); //Lägg till deras meddelande
                }
                api.lastMessage = data;

                //  clearInterval(interval);//Stoppa timern
//                }
            });
        }, 1000);
    }
};

$("#send").click(function (e) {
    e.preventDefault();
    var data = $("#message").val(); //Ditt meddelande
    $("#chat").append("You: " + data + "\n");//Lägg till ditt meddelande i chatten
    //$("#send").attr("disabled", "disabled");//Lås knappen
    $("#message").val("");//Rensa

    api.update(data);
});