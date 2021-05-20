$(function () {
    $.ajax({
        url: "/challenges-populate-water",
        type: "GET",
        dataType: "json",
        data: { flag: "water challenges" },
        success: function (data) {
            
            var numOfChallenges = 10 //Change here for number of challenges
            var challenges = [];
            while (challenges.length < 3) {
                var rng = Math.floor(Math.random() * numOfChallenges);
                var existFlag = false;
                if (challenges.length == 0) {
                    challenges.push(rng);
                } else {
                    for (i = 0; i < challenges.length; i++) {
                        if (rng == challenges[i]) {
                            existFlag = true;
                            break;
                        };
                    };
                    if (existFlag == false) {
                        challenges.push(rng);
                    };
                };
            };

            $('#water').html(
                "<div class='challenges'><span class='details'>" + data[challenges[0]].challenge + "</span><input type='checkbox' class='check' /><span class='points'>" + data[challenges[0]].points + " pts</span></div>" +
                "<div class='challenges'><span class='details'>" + data[challenges[1]].challenge + "</span><input type='checkbox' class='check' /><span class='points'>" + data[challenges[1]].points + " pts</span></div>" +
                "<div class='challenges'><span class='details'>" + data[challenges[2]].challenge + "</span><input type='checkbox' class='check' /><span class='points'>" + data[challenges[2]].points + " pts</span></div>"
            );
        },
        error: function (jqXHR, textStatus, errorThrown) {
            $("#content").text(jqXHR.statusText);
            console.log("ERROR:", jqXHR, textStatus, errorThrown);
        }
    });

    $.ajax({
        url: "/challenges-populate-food",
        type: "GET",
        dataType: "json",
        data: { flag: "food challenges" },
        success: function (data) {
            
            var numOfChallenges = 10 //Change here for number of challenges
            var challenges = [];
            while (challenges.length < 3) {
                var rng = Math.floor(Math.random() * numOfChallenges);
                var existFlag = false;
                if (challenges.length == 0) {
                    challenges.push(rng);
                } else {
                    for (i = 0; i < challenges.length; i++) {
                        if (rng == challenges[i]) {
                            existFlag = true;
                            break;
                        };
                    };
                    if (existFlag == false) {
                        challenges.push(rng);
                    };
                };
            };

            $('#food').html(
                "<div class='challenges'><span class='details'>" + data[challenges[0]].challenge + "</span><input type='checkbox' class='check' /><span class='points'>" + data[challenges[0]].points + " pts</span></div>" +
                "<div class='challenges'><span class='details'>" + data[challenges[1]].challenge + "</span><input type='checkbox' class='check' /><span class='points'>" + data[challenges[1]].points + " pts</span></div>" +
                "<div class='challenges'><span class='details'>" + data[challenges[2]].challenge + "</span><input type='checkbox' class='check' /><span class='points'>" + data[challenges[2]].points + " pts</span></div>"
            );
        },
        error: function (jqXHR, textStatus, errorThrown) {
            $("#content").text(jqXHR.statusText);
            console.log("ERROR:", jqXHR, textStatus, errorThrown);
        }
    });

    $.ajax({
        url: "/challenges-populate-commute",
        type: "GET",
        dataType: "json",
        data: { flag: "commute challenges" },
        success: function (data) {
            
            var numOfChallenges = 10 //Change here for number of challenges
            var challenges = [];
            while (challenges.length < 3) {
                var rng = Math.floor(Math.random() * numOfChallenges);
                var existFlag = false;
                if (challenges.length == 0) {
                    challenges.push(rng);
                } else {
                    for (i = 0; i < challenges.length; i++) {
                        if (rng == challenges[i]) {
                            existFlag = true;
                            break;
                        };
                    };
                    if (existFlag == false) {
                        challenges.push(rng);
                    };
                };
            };

            $('#commute').html(
                "<div class='challenges'><span class='details'>" + data[challenges[0]].challenge + "</span><input type='checkbox' class='check' /><span class='points'>" + data[challenges[0]].points + " pts</span></div>" +
                "<div class='challenges'><span class='details'>" + data[challenges[1]].challenge + "</span><input type='checkbox' class='check' /><span class='points'>" + data[challenges[1]].points + " pts</span></div>" +
                "<div class='challenges'><span class='details'>" + data[challenges[2]].challenge + "</span><input type='checkbox' class='check' /><span class='points'>" + data[challenges[2]].points + " pts</span></div>"
            );
        },
        error: function (jqXHR, textStatus, errorThrown) {
            $("#content").text(jqXHR.statusText);
            console.log("ERROR:", jqXHR, textStatus, errorThrown);
        }
    });

    $.ajax({
        url: "/challenges-populate-home",
        type: "GET",
        dataType: "json",
        data: { flag: "home challenges" },
        success: function (data) {
            
            var numOfChallenges = 10 //Change here for number of challenges
            var challenges = [];
            while (challenges.length < 3) {
                var rng = Math.floor(Math.random() * numOfChallenges);
                var existFlag = false;
                if (challenges.length == 0) {
                    challenges.push(rng);
                } else {
                    for (i = 0; i < challenges.length; i++) {
                        if (rng == challenges[i]) {
                            existFlag = true;
                            break;
                        };
                    };
                    if (existFlag == false) {
                        challenges.push(rng);
                    };
                };
            };

            $('#home').html(
                "<div class='challenges'><span class='details'>" + data[challenges[0]].challenge + "</span><input type='checkbox' class='check' /><span class='points'>" + data[challenges[0]].points + " pts</span></div>" +
                "<div class='challenges'><span class='details'>" + data[challenges[1]].challenge + "</span><input type='checkbox' class='check' /><span class='points'>" + data[challenges[1]].points + " pts</span></div>" +
                "<div class='challenges'><span class='details'>" + data[challenges[2]].challenge + "</span><input type='checkbox' class='check' /><span class='points'>" + data[challenges[2]].points + " pts</span></div>"
            );
        },
        error: function (jqXHR, textStatus, errorThrown) {
            $("#content").text(jqXHR.statusText);
            console.log("ERROR:", jqXHR, textStatus, errorThrown);
        }
    });
});