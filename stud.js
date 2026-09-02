$(document).ready(function () {

	
	$("#regForm").validate({

		rules: {
			name: {
				required: true,
				minlength: 3
			},

			mail: {
				required: true,
				email: true
			},

			sex: {
				required: true
			},

			course: {
				required: true
			},

			date: {
				required: true
			}
		},

		messages: {
			name: {
				required: "Please enter your name.",
				minlength: "Name must contain at least 3 characters."
			},

			mail: {
				required: "Please enter your email.",
				email: "Please enter a valid email address."
			},

			sex: {
				required: "Please select your gender."
			},

			course: {
				required: "Please select your qualification."
			},

			date: {
				required: "Please enter your date of birth."
			}
		},
		
		onfocusout: function(element) {
			this.element(element);
		},

		onclick: function(element) {
			this.element(element);
		}
	});


    $("#marksForm").submit(function (event) {

        event.preventDefault();  //to calculate the marks without reloading the page

        let name = $("#marksName").val().trim();
        let registerNumber = $("#registerNo").val().trim();

        let mark1 = Number($("#sub1").val());
        let mark2 = Number($("#sub2").val());
        let mark3 = Number($("#sub3").val());

        let total = mark1 + mark2 + mark3;
        let average = total / 3;

        let grade;

        if (average >= 90) {
            grade = "A+";
        }
        else if (average >= 80) {
            grade = "A";
        }
        else if (average >= 70) {
            grade = "B";
        }
        else if (average >= 60) {
            grade = "C";
        }
        else if (average >= 50) {
            grade = "D";
        }
        else {
            grade = "F";
        }

        $("#sName").text(name);
        $("#Registerno").text(registerNumber);
        $("#tMarks").text(total);
        $("#avgMarks").text(average.toFixed(2));
        $("#grade").text(grade);

        $(".result").fadeIn(500);
    });


    $("#changeBtn").click(function () {
        $(".profile-info").css("color", "red");
    });

    $("#hideBtn").click(function () {
        $("#pro").toggle();
    });

    $("#slideBtn").click(function () {
        $("#reg").slideToggle(500);
    });

    $("#fadeBtn").click(function () {
        $("#multimedia").fadeToggle(1000);
    });

});