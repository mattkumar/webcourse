$(document).ready(function () {
            $("#loadjoke").click(function () {
                $.get('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart',
                function(result){
                    // empty the div before getting a new joke
                    // if this is removed, divs are just appended one after the other
                    $('#joke-placeholder').empty()
                    $('#joke-placeholder').append(`<div class = "joke-item"><h2>${result.setup}</h2><p>${result.delivery}</p></div>`)
                });
            });
        });