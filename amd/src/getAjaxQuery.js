define(['jquery', 'sortThisTable'],
    function($, shortThisTable) {

        var getAjaxQuery = function() {

            var loaddata = 'data.json';
            //url:'https://media.lottoland.com/api/drawings/euroJackpot',
            $.ajax({
                url: loaddata,
                context: document.body
            }).done(function(response) {
                console.log(response);
                $('.day').append(response.last.date.full);
                $(response.last.numbers).each(function(){
                    $('.numbersJackpot').append('<li>' + this + '</li>');
                });

                //$('.numbersJackpot').append();
                var jsonPrizes = response.last.odds;
                for(key in jsonPrizes) {
                    if (key.substring(4) > 0) {
                        $('[data-main="table"] tr:last').after(
                            '<tr>'  +
                                '<td>' + key.substring(4) +  '</td>' +
                                '<td>' + jsonPrizes[key].winners + '</td>' +
                                '<td>' + jsonPrizes[key].specialPrize + '</td>' +
                                '<td>' + '€' + jsonPrizes[key].prize + '</td>' +
                            '</tr>'
                        );
                    }
                    new shortThisTable();
                }


            });

        };
        return getAjaxQuery;

    });












