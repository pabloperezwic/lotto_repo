define([],
    function() {

        var shortThisTable = function() {

            var table, rows, switching, i, x, y, shouldSwitch;
            table = document.getElementById("winnersTable");
            switching = true;

            while (switching) {
                switching = false;
                rows = table.getElementsByTagName("TR");

                for (i = 1; i < (rows.length - 1); i++) {
                    shouldSwitch = false;
                    x = rows[i].getElementsByTagName("td")[0];
                    y = rows[i + 1].getElementsByTagName("td")[0];
                    if (parseInt(x.innerHTML) > parseInt(y.innerHTML)) {
                        shouldSwitch= true;
                        break;
                    }
                }
                if (shouldSwitch) {
                    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                    switching = true;
                }
            }


        };



        return shortThisTable;

    });