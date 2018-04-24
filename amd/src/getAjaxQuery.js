define(['jquery', 'sortThisTable.min'],
    function($, shortThisTable) {

        var getAjaxQuery = function() {

            var loaddata = 'data.json';
            //url:'https://media.lottoland.com/api/drawings/euroJackpot',
            // To avoid use a proxy I´ve downloaded JSON to parse.
            $.ajax({
                url: loaddata,
                context: document.body
            }).done(function(response) {
                $('.day').append(response.last.date.full);
                $(response.last.numbers).each(function(){
                    $('.numbersJackpot').append('<li>' + this + '</li>');
                });
                $(response.last.euroNumbers).each(function(){
                    $('.numbersJackpot').append('<li class="euronumbers">' + this + '</li>');
                });
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


























