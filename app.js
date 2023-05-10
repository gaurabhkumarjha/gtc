const showbtn = document.getElementById("showbtn");
const showconsole = document.getElementById("outputconsole");
const taxableconsole = document.getElementById("taxableamount");
const cgstconsole = document.getElementById("cgst");
const sgstconsole = document.getElementById("sgst");
const igstconsole = document.getElementById("igst");
const footershow = document.getElementById("sitefoter");

function getoutput(event) {
    event.preventDefault();
    const number = document.getElementById("number").value;
    const taxslave = document.getElementById("exampleFormControlSelect1").value;
    const dropdownmenu = document.getElementById("dropdownmenu").value;

    
    if (taxslave == 1) {
        showconsole.style.display = "block";
        footershow.style.display = "none";

        var semians = number * 100 / 101;
        semians = Math.trunc(semians * 100) / 100;
        var semians_two_point_value = (semians + "").split(".")[1];
        if (semians_two_point_value >= 50) {
            semians = Math.ceil(semians);
        }
        else if (semians_two_point_value < 50) {
            semians = Math.trunc(semians);
        }
        // var taxabel_output = Math.trunc(semians * 100) / 100;// tax able output
        taxableconsole.innerHTML = 'TAXABLE AMOUNT->' + `${semians}`;
        var taxslaveoutput = semians * taxslave / 100;
        taxslaveoutput = Math.trunc(taxslaveoutput * 100) / 100;
        var taxslave_two_point_value = (taxslaveoutput + "").split(".")[1];

        if (taxslave_two_point_value >= 50) {
            taxslaveoutput = Math.ceil(taxslaveoutput);
        }
        else if (taxslave_two_point_value < 50) {
            taxslaveoutput = Math.trunc(taxslaveoutput);
        }
        if (dropdownmenu == "CGST & SGST") {
            var halftaxtypeoutput = taxslaveoutput / 2;
            cgstconsole.innerHTML = 'CGST->' + `${halftaxtypeoutput}`;
            sgstconsole.innerHTML = 'SGST->' + `${halftaxtypeoutput}`;
            igstconsole.innerHTML = 'IGST->' + "";
        } else {
            cgstconsole.innerHTML = 'CGST->' + "";
            sgstconsole.innerHTML = 'SGST->' + "";
            igstconsole.innerHTML = 'IGST->' + `${taxslaveoutput}`;
        }
    } else if (taxslave == 2) {

        showconsole.style.display = "block";
        footershow.style.display = "none";
        var semians = number * 100 / 102;
        semians = Math.trunc(semians * 100) / 100;
        var semians_two_point_value = (semians + "").split(".")[1];
        if (semians_two_point_value >= 50) {
            semians = Math.ceil(semians);
        }
        else if (semians_two_point_value < 50) {
            semians = Math.trunc(semians);
        }
        // var taxabel_output = Math.trunc(semians * 100) / 100;// tax able output
        taxableconsole.innerHTML = 'TAXABLE AMOUNT->' + `${semians}`;
        var taxslaveoutput = semians * taxslave / 100;
        taxslaveoutput = Math.trunc(taxslaveoutput * 100) / 100;
        var taxslave_two_point_value = (taxslaveoutput + "").split(".")[1];

        if (taxslave_two_point_value >= 50) {
            taxslaveoutput = Math.ceil(taxslaveoutput);
        }
        else if (taxslave_two_point_value < 50) {
            taxslaveoutput = Math.trunc(taxslaveoutput);
        }
        if (dropdownmenu == "CGST & SGST") {
            var halftaxtypeoutput = taxslaveoutput / 2;
            cgstconsole.innerHTML = 'CGST->' + `${halftaxtypeoutput}`;
            sgstconsole.innerHTML = 'SGST->' + `${halftaxtypeoutput}`;
            igstconsole.innerHTML = 'IGST->' + "";
        } else {
            cgstconsole.innerHTML = 'CGST->' + "";
            sgstconsole.innerHTML = 'SGST->' + "";
            igstconsole.innerHTML = 'IGST->' + `${taxslaveoutput}`;
        }

    } else if (taxslave == 3) {
        showconsole.style.display = "block";
        footershow.style.display = "none";
        var semians = number * 100 / 103;
        //var taxabel_output = Math.round(semians * 100) / 100;// tax able output
        semians = Math.trunc(semians * 100) / 100;
        var semians_two_point_value = (semians + "").split(".")[1];
        if (semians_two_point_value >= 50) {
            semians = Math.ceil(semians);
        }
        else if (semians_two_point_value < 50) {
            semians = Math.trunc(semians);
        }
        // var taxabel_output = Math.trunc(semians * 100) / 100;// tax able output
        taxableconsole.innerHTML = 'TAXABLE AMOUNT->' + `${semians}`;
        var taxslaveoutput = semians * taxslave / 100;
        taxslaveoutput = Math.trunc(taxslaveoutput * 100) / 100;
        var taxslave_two_point_value = (taxslaveoutput + "").split(".")[1];

        if (taxslave_two_point_value >= 50) {
            taxslaveoutput = Math.ceil(taxslaveoutput);
        }
        else if (taxslave_two_point_value < 50) {
            taxslaveoutput = Math.trunc(taxslaveoutput);
        }
        if (dropdownmenu == "CGST & SGST") {
            var halftaxtypeoutput = taxslaveoutput / 2;
            cgstconsole.innerHTML = 'CGST->' + `${halftaxtypeoutput}`;
            sgstconsole.innerHTML = 'SGST->' + `${halftaxtypeoutput}`;
            igstconsole.innerHTML = 'IGST->' + "";
        } else {
            cgstconsole.innerHTML = 'CGST->' + "";
            sgstconsole.innerHTML = 'SGST->' + "";
            igstconsole.innerHTML = 'IGST->' + `${taxslaveoutput}`;
        }
    } else if (taxslave == 4) {
        showconsole.style.display = "block";
        footershow.style.display = "none";
        var semians = number * 100 / 104;
        // var taxabel_output = Math.round(semians * 100) / 100;// tax able output
        semians = Math.trunc(semians * 100) / 100;
        var semians_two_point_value = (semians + "").split(".")[1];
        if (semians_two_point_value >= 50) {
            semians = Math.ceil(semians);
        }
        else if (semians_two_point_value < 50) {
            semians = Math.trunc(semians);
        }
        // var taxabel_output = Math.trunc(semians * 100) / 100;// tax able output
        taxableconsole.innerHTML = 'TAXABLE AMOUNT->' + `${semians}`;
        var taxslaveoutput = semians * taxslave / 100;
        taxslaveoutput = Math.trunc(taxslaveoutput * 100) / 100;
        var taxslave_two_point_value = (taxslaveoutput + "").split(".")[1];

        if (taxslave_two_point_value >= 50) {
            taxslaveoutput = Math.ceil(taxslaveoutput);
        }
        else if (taxslave_two_point_value < 50) {
            taxslaveoutput = Math.trunc(taxslaveoutput);
        }
        if (dropdownmenu == "CGST & SGST") {
            var halftaxtypeoutput = taxslaveoutput / 2;
            cgstconsole.innerHTML = 'CGST->' + `${halftaxtypeoutput}`;
            sgstconsole.innerHTML = 'SGST->' + `${halftaxtypeoutput}`;
            igstconsole.innerHTML = 'IGST->' + "";
        } else {
            cgstconsole.innerHTML = 'CGST->' + "";
            sgstconsole.innerHTML = 'SGST->' + "";
            igstconsole.innerHTML = 'IGST->' + `${taxslaveoutput}`;
        }
    } else if (taxslave == 5) {
        showconsole.style.display = "block";
        footershow.style.display = "none";
        var semians = number * 100 / 105;
        semians = Math.trunc(semians * 100) / 100;
        var semians_two_point_value = (semians + "").split(".")[1];
        if (semians_two_point_value >= 50) {
            semians = Math.ceil(semians);
        }
        else if (semians_two_point_value < 50) {
            semians = Math.trunc(semians);
        }
        // var taxabel_output = Math.trunc(semians * 100) / 100;// tax able output
        taxableconsole.innerHTML = 'TAXABLE AMOUNT->' + `${semians}`;
        var taxslaveoutput = semians * taxslave / 100;
        taxslaveoutput = Math.trunc(taxslaveoutput * 100) / 100;
        var taxslave_two_point_value = (taxslaveoutput + "").split(".")[1];

        if (taxslave_two_point_value >= 50) {
            taxslaveoutput = Math.ceil(taxslaveoutput);
        }
        else if (taxslave_two_point_value < 50) {
            taxslaveoutput = Math.trunc(taxslaveoutput);
        }
        if (dropdownmenu == "CGST & SGST") {
            var halftaxtypeoutput = taxslaveoutput / 2;
            cgstconsole.innerHTML = 'CGST->' + `${halftaxtypeoutput}`;
            sgstconsole.innerHTML = 'SGST->' + `${halftaxtypeoutput}`;
            igstconsole.innerHTML = 'IGST->' + "";
        } else {
            cgstconsole.innerHTML = 'CGST->' + "";
            sgstconsole.innerHTML = 'SGST->' + "";
            igstconsole.innerHTML = 'IGST->' + `${taxslaveoutput}`;
        }
    } else if (taxslave == 6) {
        showconsole.style.display = "block";
        footershow.style.display = "none";
        var semians = number * 100 / 106;
        //var taxabel_output = Math.round(semians * 100) / 100;// tax able output
        semians = Math.trunc(semians * 100) / 100;
        var semians_two_point_value = (semians + "").split(".")[1];
        if (semians_two_point_value >= 50) {
            semians = Math.ceil(semians);
        }
        else if (semians_two_point_value < 50) {
            semians = Math.trunc(semians);
        }
        // var taxabel_output = Math.trunc(semians * 100) / 100;// tax able output
        taxableconsole.innerHTML = 'TAXABLE AMOUNT->' + `${semians}`;
        var taxslaveoutput = semians * taxslave / 100;
        taxslaveoutput = Math.trunc(taxslaveoutput * 100) / 100;
        var taxslave_two_point_value = (taxslaveoutput + "").split(".")[1];

        if (taxslave_two_point_value >= 50) {
            taxslaveoutput = Math.ceil(taxslaveoutput);
        }
        else if (taxslave_two_point_value < 50) {
            taxslaveoutput = Math.trunc(taxslaveoutput);
        }
        if (dropdownmenu == "CGST & SGST") {
            var halftaxtypeoutput = taxslaveoutput / 2;
            cgstconsole.innerHTML = 'CGST->' + `${halftaxtypeoutput}`;
            sgstconsole.innerHTML = 'SGST->' + `${halftaxtypeoutput}`;
            igstconsole.innerHTML = 'IGST->' + "";
        } else {
            cgstconsole.innerHTML = 'CGST->' + "";
            sgstconsole.innerHTML = 'SGST->' + "";
            igstconsole.innerHTML = 'IGST->' + `${taxslaveoutput}`;
        }
    } else if (taxslave == 7) {
        showconsole.style.display = "block";
        footershow.style.display = "none";
        var semians = number * 100 / 107;
        //var taxabel_output = Math.round(semians * 100) / 100;// tax able output
        semians = Math.trunc(semians * 100) / 100;
        var semians_two_point_value = (semians + "").split(".")[1];
        if (semians_two_point_value >= 50) {
            semians = Math.ceil(semians);
        }
        else if (semians_two_point_value < 50) {
            semians = Math.trunc(semians);
        }
        // var taxabel_output = Math.trunc(semians * 100) / 100;// tax able output
        taxableconsole.innerHTML = 'TAXABLE AMOUNT->' + `${semians}`;
        var taxslaveoutput = semians * taxslave / 100;
        taxslaveoutput = Math.trunc(taxslaveoutput * 100) / 100;
        var taxslave_two_point_value = (taxslaveoutput + "").split(".")[1];

        if (taxslave_two_point_value >= 50) {
            taxslaveoutput = Math.ceil(taxslaveoutput);
        }
        else if (taxslave_two_point_value < 50) {
            taxslaveoutput = Math.trunc(taxslaveoutput);
        }
        if (dropdownmenu == "CGST & SGST") {
            var halftaxtypeoutput = taxslaveoutput / 2;
            cgstconsole.innerHTML = 'CGST->' + `${halftaxtypeoutput}`;
            sgstconsole.innerHTML = 'SGST->' + `${halftaxtypeoutput}`;
            igstconsole.innerHTML = 'IGST->' + "";
        } else {
            cgstconsole.innerHTML = 'CGST->' + "";
            sgstconsole.innerHTML = 'SGST->' + "";
            igstconsole.innerHTML = 'IGST->' + `${taxslaveoutput}`;
        }
    } else if (taxslave == 8) {
        showconsole.style.display = "block";
        footershow.style.display = "none";
        var semians = number * 100 / 108;
        // var taxabel_output = Math.round(semians * 100) / 100;// tax able output
        semians = Math.trunc(semians * 100) / 100;
        var semians_two_point_value = (semians + "").split(".")[1];
        if (semians_two_point_value >= 50) {
            semians = Math.ceil(semians);
        }
        else if (semians_two_point_value < 50) {
            semians = Math.trunc(semians);
        }
        // var taxabel_output = Math.trunc(semians * 100) / 100;// tax able output
        taxableconsole.innerHTML = 'TAXABLE AMOUNT->' + `${semians}`;
        var taxslaveoutput = semians * taxslave / 100;
        taxslaveoutput = Math.trunc(taxslaveoutput * 100) / 100;
        var taxslave_two_point_value = (taxslaveoutput + "").split(".")[1];

        if (taxslave_two_point_value >= 50) {
            taxslaveoutput = Math.ceil(taxslaveoutput);
        }
        else if (taxslave_two_point_value < 50) {
            taxslaveoutput = Math.trunc(taxslaveoutput);
        }
        if (dropdownmenu == "CGST & SGST") {
            var halftaxtypeoutput = taxslaveoutput / 2;
            cgstconsole.innerHTML = 'CGST->' + `${halftaxtypeoutput}`;
            sgstconsole.innerHTML = 'SGST->' + `${halftaxtypeoutput}`;
            igstconsole.innerHTML = 'IGST->' + "";
        } else {
            cgstconsole.innerHTML = 'CGST->' + "";
            sgstconsole.innerHTML = 'SGST->' + "";
            igstconsole.innerHTML = 'IGST->' + `${taxslaveoutput}`;
        }

    } else if (taxslave == 9) {
        showconsole.style.display = "block";
        footershow.style.display = "none";
        var semians = number * 100 / 109;
        // var taxabel_output = Math.round(semians * 100) / 100;// tax able output
        semians = Math.trunc(semians * 100) / 100;
        var semians_two_point_value = (semians + "").split(".")[1];
        if (semians_two_point_value >= 50) {
            semians = Math.ceil(semians);
        }
        else if (semians_two_point_value < 50) {
            semians = Math.trunc(semians);
        }
        // var taxabel_output = Math.trunc(semians * 100) / 100;// tax able output
        taxableconsole.innerHTML = 'TAXABLE AMOUNT->' + `${semians}`;
        var taxslaveoutput = semians * taxslave / 100;
        taxslaveoutput = Math.trunc(taxslaveoutput * 100) / 100;
        var taxslave_two_point_value = (taxslaveoutput + "").split(".")[1];

        if (taxslave_two_point_value >= 50) {
            taxslaveoutput = Math.ceil(taxslaveoutput);
        }
        else if (taxslave_two_point_value < 50) {
            taxslaveoutput = Math.trunc(taxslaveoutput);
        }
        if (dropdownmenu == "CGST & SGST") {
            var halftaxtypeoutput = taxslaveoutput / 2;
            cgstconsole.innerHTML = 'CGST->' + `${halftaxtypeoutput}`;
            sgstconsole.innerHTML = 'SGST->' + `${halftaxtypeoutput}`;
            igstconsole.innerHTML = 'IGST->' + "";
        } else {
            cgstconsole.innerHTML = 'CGST->' + "";
            sgstconsole.innerHTML = 'SGST->' + "";
            igstconsole.innerHTML = 'IGST->' + `${taxslaveoutput}`;
        }
    } else if (taxslave == 10) {
        showconsole.style.display = "block";
        footershow.style.display = "none";
        var semians = number * 100 / 110;
        // var taxabel_output = Math.round(semians * 100) / 100;// tax able output
        semians = Math.trunc(semians * 100) / 100;
        var semians_two_point_value = (semians + "").split(".")[1];
        if (semians_two_point_value >= 50) {
            semians = Math.ceil(semians);
        }
        else if (semians_two_point_value < 50) {
            semians = Math.trunc(semians);
        }
        // var taxabel_output = Math.trunc(semians * 100) / 100;// tax able output
        taxableconsole.innerHTML = 'TAXABLE AMOUNT->' + `${semians}`;
        var taxslaveoutput = semians * taxslave / 100;
        taxslaveoutput = Math.trunc(taxslaveoutput * 100) / 100;
        var taxslave_two_point_value = (taxslaveoutput + "").split(".")[1];

        if (taxslave_two_point_value >= 50) {
            taxslaveoutput = Math.ceil(taxslaveoutput);
        }
        else if (taxslave_two_point_value < 50) {
            taxslaveoutput = Math.trunc(taxslaveoutput);
        }
        if (dropdownmenu == "CGST & SGST") {
            var halftaxtypeoutput = taxslaveoutput / 2;
            cgstconsole.innerHTML = 'CGST->' + `${halftaxtypeoutput}`;
            sgstconsole.innerHTML = 'SGST->' + `${halftaxtypeoutput}`;
            igstconsole.innerHTML = 'IGST->' + "";
        } else {
            cgstconsole.innerHTML = 'CGST->' + "";
            sgstconsole.innerHTML = 'SGST->' + "";
            igstconsole.innerHTML = 'IGST->' + `${taxslaveoutput}`;
        }
    } else if (taxslave == 11) {
        showconsole.style.display = "block";
        footershow.style.display = "none";
        var semians = number * 100 / 111;
        //var taxabel_output = Math.round(semians * 100) / 100;// tax able output
        semians = Math.trunc(semians * 100) / 100;
        var semians_two_point_value = (semians + "").split(".")[1];
        if (semians_two_point_value >= 50) {
            semians = Math.ceil(semians);
        }
        else if (semians_two_point_value < 50) {
            semians = Math.trunc(semians);
        }
        // var taxabel_output = Math.trunc(semians * 100) / 100;// tax able output
        taxableconsole.innerHTML = 'TAXABLE AMOUNT->' + `${semians}`;
        var taxslaveoutput = semians * taxslave / 100;
        taxslaveoutput = Math.trunc(taxslaveoutput * 100) / 100;
        var taxslave_two_point_value = (taxslaveoutput + "").split(".")[1];

        if (taxslave_two_point_value >= 50) {
            taxslaveoutput = Math.ceil(taxslaveoutput);
        }
        else if (taxslave_two_point_value < 50) {
            taxslaveoutput = Math.trunc(taxslaveoutput);
        }
        if (dropdownmenu == "CGST & SGST") {
            var halftaxtypeoutput = taxslaveoutput / 2;
            cgstconsole.innerHTML = 'CGST->' + `${halftaxtypeoutput}`;
            sgstconsole.innerHTML = 'SGST->' + `${halftaxtypeoutput}`;
            igstconsole.innerHTML = 'IGST->' + "";
        } else {
            cgstconsole.innerHTML = 'CGST->' + "";
            sgstconsole.innerHTML = 'SGST->' + "";
            igstconsole.innerHTML = 'IGST->' + `${taxslaveoutput}`;
        }
    } else if (taxslave == 12) {
        showconsole.style.display = "block";
        footershow.style.display = "none";
        var semians = number * 100 / 112;
        // var taxabel_output = Math.round(semians * 100) / 100;// tax able output
        semians = Math.trunc(semians * 100) / 100;
        var semians_two_point_value = (semians + "").split(".")[1];
        if (semians_two_point_value >= 50) {
            semians = Math.ceil(semians);
        }
        else if (semians_two_point_value < 50) {
            semians = Math.trunc(semians);
        }
        // var taxabel_output = Math.trunc(semians * 100) / 100;// tax able output
        taxableconsole.innerHTML = 'TAXABLE AMOUNT->' + `${semians}`;
        var taxslaveoutput = semians * taxslave / 100;
        taxslaveoutput = Math.trunc(taxslaveoutput * 100) / 100;
        var taxslave_two_point_value = (taxslaveoutput + "").split(".")[1];

        if (taxslave_two_point_value >= 50) {
            taxslaveoutput = Math.ceil(taxslaveoutput);
        }
        else if (taxslave_two_point_value < 50) {
            taxslaveoutput = Math.trunc(taxslaveoutput);
        }
        if (dropdownmenu == "CGST & SGST") {
            var halftaxtypeoutput = taxslaveoutput / 2;
            cgstconsole.innerHTML = 'CGST->' + `${halftaxtypeoutput}`;
            sgstconsole.innerHTML = 'SGST->' + `${halftaxtypeoutput}`;
            igstconsole.innerHTML = 'IGST->' + "";
        } else {
            cgstconsole.innerHTML = 'CGST->' + "";
            sgstconsole.innerHTML = 'SGST->' + "";
            igstconsole.innerHTML = 'IGST->' + `${taxslaveoutput}`;
        }

    } else if (taxslave == 13) {
        showconsole.style.display = "block";
        footershow.style.display = "none";
        var semians = number * 100 / 113;
        //  var taxabel_output = Math.round(semians * 100) / 100;// tax able output
        semians = Math.trunc(semians * 100) / 100;
        var semians_two_point_value = (semians + "").split(".")[1];
        if (semians_two_point_value >= 50) {
            semians = Math.ceil(semians);
        }
        else if (semians_two_point_value < 50) {
            semians = Math.trunc(semians);
        }
        // var taxabel_output = Math.trunc(semians * 100) / 100;// tax able output
        taxableconsole.innerHTML = 'TAXABLE AMOUNT->' + `${semians}`;
        var taxslaveoutput = semians * taxslave / 100;
        taxslaveoutput = Math.trunc(taxslaveoutput * 100) / 100;
        var taxslave_two_point_value = (taxslaveoutput + "").split(".")[1];

        if (taxslave_two_point_value >= 50) {
            taxslaveoutput = Math.ceil(taxslaveoutput);
        }
        else if (taxslave_two_point_value < 50) {
            taxslaveoutput = Math.trunc(taxslaveoutput);
        }
        if (dropdownmenu == "CGST & SGST") {
            var halftaxtypeoutput = taxslaveoutput / 2;
            cgstconsole.innerHTML = 'CGST->' + `${halftaxtypeoutput}`;
            sgstconsole.innerHTML = 'SGST->' + `${halftaxtypeoutput}`;
            igstconsole.innerHTML = 'IGST->' + "";
        } else {
            cgstconsole.innerHTML = 'CGST->' + "";
            sgstconsole.innerHTML = 'SGST->' + "";
            igstconsole.innerHTML = 'IGST->' + `${taxslaveoutput}`;
        }

    } else if (taxslave == 14) {
        showconsole.style.display = "block";
        footershow.style.display = "none";
        var semians = number * 100 / 114;
        //   var taxabel_output = Math.round(semians * 100) / 100;// tax able output
        semians = Math.trunc(semians * 100) / 100;
        var semians_two_point_value = (semians + "").split(".")[1];
        if (semians_two_point_value >= 50) {
            semians = Math.ceil(semians);
        }
        else if (semians_two_point_value < 50) {
            semians = Math.trunc(semians);
        }
        // var taxabel_output = Math.trunc(semians * 100) / 100;// tax able output
        taxableconsole.innerHTML = 'TAXABLE AMOUNT->' + `${semians}`;
        var taxslaveoutput = semians * taxslave / 100;
        taxslaveoutput = Math.trunc(taxslaveoutput * 100) / 100;
        var taxslave_two_point_value = (taxslaveoutput + "").split(".")[1];

        if (taxslave_two_point_value >= 50) {
            taxslaveoutput = Math.ceil(taxslaveoutput);
        }
        else if (taxslave_two_point_value < 50) {
            taxslaveoutput = Math.trunc(taxslaveoutput);
        }
        if (dropdownmenu == "CGST & SGST") {
            var halftaxtypeoutput = taxslaveoutput / 2;
            cgstconsole.innerHTML = 'CGST->' + `${halftaxtypeoutput}`;
            sgstconsole.innerHTML = 'SGST->' + `${halftaxtypeoutput}`;
            igstconsole.innerHTML = 'IGST->' + "";
        } else {
            cgstconsole.innerHTML = 'CGST->' + "";
            sgstconsole.innerHTML = 'SGST->' + "";
            igstconsole.innerHTML = 'IGST->' + `${taxslaveoutput}`;
        }

    } else if (taxslave == 15) {
        showconsole.style.display = "block";
        footershow.style.display = "none";
        var semians = number * 100 / 115;
        // var taxabel_output = Math.round(semians * 100) / 100;// tax able output
        semians = Math.trunc(semians * 100) / 100;
        var semians_two_point_value = (semians + "").split(".")[1];
        if (semians_two_point_value >= 50) {
            semians = Math.ceil(semians);
        }
        else if (semians_two_point_value < 50) {
            semians = Math.trunc(semians);
        }
        // var taxabel_output = Math.trunc(semians * 100) / 100;// tax able output
        taxableconsole.innerHTML = 'TAXABLE AMOUNT->' + `${semians}`;
        var taxslaveoutput = semians * taxslave / 100;
        taxslaveoutput = Math.trunc(taxslaveoutput * 100) / 100;
        var taxslave_two_point_value = (taxslaveoutput + "").split(".")[1];

        if (taxslave_two_point_value >= 50) {
            taxslaveoutput = Math.ceil(taxslaveoutput);
        }
        else if (taxslave_two_point_value < 50) {
            taxslaveoutput = Math.trunc(taxslaveoutput);
        }
        if (dropdownmenu == "CGST & SGST") {
            var halftaxtypeoutput = taxslaveoutput / 2;
            cgstconsole.innerHTML = 'CGST->' + `${halftaxtypeoutput}`;
            sgstconsole.innerHTML = 'SGST->' + `${halftaxtypeoutput}`;
            igstconsole.innerHTML = 'IGST->' + "";
        } else {
            cgstconsole.innerHTML = 'CGST->' + "";
            sgstconsole.innerHTML = 'SGST->' + "";
            igstconsole.innerHTML = 'IGST->' + `${taxslaveoutput}`;
        }

    } else if (taxslave == 16) {
        showconsole.style.display = "block";
        footershow.style.display = "none";
        var semians = number * 100 / 116;
        // var taxabel_output = Math.round(semians * 100) / 100;// tax able output
        semians = Math.trunc(semians * 100) / 100;
        var semians_two_point_value = (semians + "").split(".")[1];
        if (semians_two_point_value >= 50) {
            semians = Math.ceil(semians);
        }
        else if (semians_two_point_value < 50) {
            semians = Math.trunc(semians);
        }
        // var taxabel_output = Math.trunc(semians * 100) / 100;// tax able output
        taxableconsole.innerHTML = 'TAXABLE AMOUNT->' + `${semians}`;
        var taxslaveoutput = semians * taxslave / 100;
        taxslaveoutput = Math.trunc(taxslaveoutput * 100) / 100;
        var taxslave_two_point_value = (taxslaveoutput + "").split(".")[1];

        if (taxslave_two_point_value >= 50) {
            taxslaveoutput = Math.ceil(taxslaveoutput);
        }
        else if (taxslave_two_point_value < 50) {
            taxslaveoutput = Math.trunc(taxslaveoutput);
        }
        if (dropdownmenu == "CGST & SGST") {
            var halftaxtypeoutput = taxslaveoutput / 2;
            cgstconsole.innerHTML = 'CGST->' + `${halftaxtypeoutput}`;
            sgstconsole.innerHTML = 'SGST->' + `${halftaxtypeoutput}`;
            igstconsole.innerHTML = 'IGST->' + "";
        } else {
            cgstconsole.innerHTML = 'CGST->' + "";
            sgstconsole.innerHTML = 'SGST->' + "";
            igstconsole.innerHTML = 'IGST->' + `${taxslaveoutput}`;
        }

    } else if (taxslave == 17) {
        showconsole.style.display = "block";
        footershow.style.display = "none";
        var semians = number * 100 / 117;
        //   var taxabel_output = Math.round(semians * 100) / 100;// tax able output
        semians = Math.trunc(semians * 100) / 100;
        var semians_two_point_value = (semians + "").split(".")[1];
        if (semians_two_point_value >= 50) {
            semians = Math.ceil(semians);
        }
        else if (semians_two_point_value < 50) {
            semians = Math.trunc(semians);
        }
        // var taxabel_output = Math.trunc(semians * 100) / 100;// tax able output
        taxableconsole.innerHTML = 'TAXABLE AMOUNT->' + `${semians}`;
        var taxslaveoutput = semians * taxslave / 100;
        taxslaveoutput = Math.trunc(taxslaveoutput * 100) / 100;
        var taxslave_two_point_value = (taxslaveoutput + "").split(".")[1];

        if (taxslave_two_point_value >= 50) {
            taxslaveoutput = Math.ceil(taxslaveoutput);
        }
        else if (taxslave_two_point_value < 50) {
            taxslaveoutput = Math.trunc(taxslaveoutput);
        }
        if (dropdownmenu == "CGST & SGST") {
            var halftaxtypeoutput = taxslaveoutput / 2;
            cgstconsole.innerHTML = 'CGST->' + `${halftaxtypeoutput}`;
            sgstconsole.innerHTML = 'SGST->' + `${halftaxtypeoutput}`;
            igstconsole.innerHTML = 'IGST->' + "";
        } else {
            cgstconsole.innerHTML = 'CGST->' + "";
            sgstconsole.innerHTML = 'SGST->' + "";
            igstconsole.innerHTML = 'IGST->' + `${taxslaveoutput}`;
        }

    } else if (taxslave == 18) {
        showconsole.style.display = "block";
        footershow.style.display = "none";
        var semians = number * 100 / 118;
        // var taxabel_output = Math.round(semians * 100) / 100;// tax able output
        semians = Math.trunc(semians * 100) / 100;
        var semians_two_point_value = (semians + "").split(".")[1];
        if (semians_two_point_value >= 50) {
            semians = Math.ceil(semians);
        }
        else if (semians_two_point_value < 50) {
            semians = Math.trunc(semians);
        }
        // var taxabel_output = Math.trunc(semians * 100) / 100;// tax able output
        taxableconsole.innerHTML = 'TAXABLE AMOUNT->' + `${semians}`;
        var taxslaveoutput = semians * taxslave / 100;
        taxslaveoutput = Math.trunc(taxslaveoutput * 100) / 100;
        var taxslave_two_point_value = (taxslaveoutput + "").split(".")[1];

        if (taxslave_two_point_value >= 50) {
            taxslaveoutput = Math.ceil(taxslaveoutput);
        }
        else if (taxslave_two_point_value < 50) {
            taxslaveoutput = Math.trunc(taxslaveoutput);
        }
        if (dropdownmenu == "CGST & SGST") {
            var halftaxtypeoutput = taxslaveoutput / 2;
            cgstconsole.innerHTML = 'CGST->' + `${halftaxtypeoutput}`;
            sgstconsole.innerHTML = 'SGST->' + `${halftaxtypeoutput}`;
            igstconsole.innerHTML = 'IGST->' + "";
        } else {
            cgstconsole.innerHTML = 'CGST->' + "";
            sgstconsole.innerHTML = 'SGST->' + "";
            igstconsole.innerHTML = 'IGST->' + `${taxslaveoutput}`;
        }

    } else if (taxslave == 19) {
        showconsole.style.display = "block";
        footershow.style.display = "none";
        var semians = number * 100 / 119;
        //var taxabel_output = Math.round(semians * 100) / 100;// tax able output
        semians = Math.trunc(semians * 100) / 100;
        var semians_two_point_value = (semians + "").split(".")[1];
        if (semians_two_point_value >= 50) {
            semians = Math.ceil(semians);
        }
        else if (semians_two_point_value < 50) {
            semians = Math.trunc(semians);
        }
        // var taxabel_output = Math.trunc(semians * 100) / 100;// tax able output
        taxableconsole.innerHTML = 'TAXABLE AMOUNT->' + `${semians}`;
        var taxslaveoutput = semians * taxslave / 100;
        taxslaveoutput = Math.trunc(taxslaveoutput * 100) / 100;
        var taxslave_two_point_value = (taxslaveoutput + "").split(".")[1];

        if (taxslave_two_point_value >= 50) {
            taxslaveoutput = Math.ceil(taxslaveoutput);
        }
        else if (taxslave_two_point_value < 50) {
            taxslaveoutput = Math.trunc(taxslaveoutput);
        }
        if (dropdownmenu == "CGST & SGST") {
            var halftaxtypeoutput = taxslaveoutput / 2;
            cgstconsole.innerHTML = 'CGST->' + `${halftaxtypeoutput}`;
            sgstconsole.innerHTML = 'SGST->' + `${halftaxtypeoutput}`;
            igstconsole.innerHTML = 'IGST->' + "";
        } else {
            cgstconsole.innerHTML = 'CGST->' + "";
            sgstconsole.innerHTML = 'SGST->' + "";
            igstconsole.innerHTML = 'IGST->' + `${taxslaveoutput}`;
        }

    } else if (taxslave == 20) {
        showconsole.style.display = "block";
        footershow.style.display = "none";
        var semians = number * 100 / 120;
        //var taxabel_output = Math.round(semians * 100) / 100;// tax able output
        semians = Math.trunc(semians * 100) / 100;
        var semians_two_point_value = (semians + "").split(".")[1];
        if (semians_two_point_value >= 50) {
            semians = Math.ceil(semians);
        }
        else if (semians_two_point_value < 50) {
            semians = Math.trunc(semians);
        }
        // var taxabel_output = Math.trunc(semians * 100) / 100;// tax able output
        taxableconsole.innerHTML = 'TAXABLE AMOUNT->' + `${semians}`;
        var taxslaveoutput = semians * taxslave / 100;
        taxslaveoutput = Math.trunc(taxslaveoutput * 100) / 100;
        var taxslave_two_point_value = (taxslaveoutput + "").split(".")[1];

        if (taxslave_two_point_value >= 50) {
            taxslaveoutput = Math.ceil(taxslaveoutput);
        }
        else if (taxslave_two_point_value < 50) {
            taxslaveoutput = Math.trunc(taxslaveoutput);
        }
        if (dropdownmenu == "CGST & SGST") {
            var halftaxtypeoutput = taxslaveoutput / 2;
            cgstconsole.innerHTML = 'CGST->' + `${halftaxtypeoutput}`;
            sgstconsole.innerHTML = 'SGST->' + `${halftaxtypeoutput}`;
            igstconsole.innerHTML = 'IGST->' + "";
        } else {
            cgstconsole.innerHTML = 'CGST->' + "";
            sgstconsole.innerHTML = 'SGST->' + "";
            igstconsole.innerHTML = 'IGST->' + `${taxslaveoutput}`;
        }

    } else if (taxslave == 21) {
        showconsole.style.display = "block";
        footershow.style.display = "none";
        var semians = number * 100 / 121;
        // var taxabel_output = Math.round(semians * 100) / 100;// tax able output
        semians = Math.trunc(semians * 100) / 100;
        var semians_two_point_value = (semians + "").split(".")[1];
        if (semians_two_point_value >= 50) {
            semians = Math.ceil(semians);
        }
        else if (semians_two_point_value < 50) {
            semians = Math.trunc(semians);
        }
        // var taxabel_output = Math.trunc(semians * 100) / 100;// tax able output
        taxableconsole.innerHTML = 'TAXABLE AMOUNT->' + `${semians}`;
        var taxslaveoutput = semians * taxslave / 100;
        taxslaveoutput = Math.trunc(taxslaveoutput * 100) / 100;
        var taxslave_two_point_value = (taxslaveoutput + "").split(".")[1];

        if (taxslave_two_point_value >= 50) {
            taxslaveoutput = Math.ceil(taxslaveoutput);
        }
        else if (taxslave_two_point_value < 50) {
            taxslaveoutput = Math.trunc(taxslaveoutput);
        }
        if (dropdownmenu == "CGST & SGST") {
            var halftaxtypeoutput = taxslaveoutput / 2;
            cgstconsole.innerHTML = 'CGST->' + `${halftaxtypeoutput}`;
            sgstconsole.innerHTML = 'SGST->' + `${halftaxtypeoutput}`;
            igstconsole.innerHTML = 'IGST->' + "";
        } else {
            cgstconsole.innerHTML = 'CGST->' + "";
            sgstconsole.innerHTML = 'SGST->' + "";
            igstconsole.innerHTML = 'IGST->' + `${taxslaveoutput}`;
        }

    } else if (taxslave == 22) {
        showconsole.style.display = "block";
        footershow.style.display = "none";
        var semians = number * 100 / 122;
        // var taxabel_output = Math.round(semians * 100) / 100;// tax able output
        semians = Math.trunc(semians * 100) / 100;
        var semians_two_point_value = (semians + "").split(".")[1];
        if (semians_two_point_value >= 50) {
            semians = Math.ceil(semians);
        }
        else if (semians_two_point_value < 50) {
            semians = Math.trunc(semians);
        }
        // var taxabel_output = Math.trunc(semians * 100) / 100;// tax able output
        taxableconsole.innerHTML = 'TAXABLE AMOUNT->' + `${semians}`;
        var taxslaveoutput = semians * taxslave / 100;
        taxslaveoutput = Math.trunc(taxslaveoutput * 100) / 100;
        var taxslave_two_point_value = (taxslaveoutput + "").split(".")[1];

        if (taxslave_two_point_value >= 50) {
            taxslaveoutput = Math.ceil(taxslaveoutput);
        }
        else if (taxslave_two_point_value < 50) {
            taxslaveoutput = Math.trunc(taxslaveoutput);
        }
        if (dropdownmenu == "CGST & SGST") {
            var halftaxtypeoutput = taxslaveoutput / 2;
            cgstconsole.innerHTML = 'CGST->' + `${halftaxtypeoutput}`;
            sgstconsole.innerHTML = 'SGST->' + `${halftaxtypeoutput}`;
            igstconsole.innerHTML = 'IGST->' + "";
        } else {
            cgstconsole.innerHTML = 'CGST->' + "";
            sgstconsole.innerHTML = 'SGST->' + "";
            igstconsole.innerHTML = 'IGST->' + `${taxslaveoutput}`;
        }

    } else if (taxslave == 23) {
        showconsole.style.display = "block";
        footershow.style.display = "none";
        var semians = number * 100 / 123;
        // var taxabel_output = Math.round(semians * 100) / 100;// tax able output
        semians = Math.trunc(semians * 100) / 100;
        var semians_two_point_value = (semians + "").split(".")[1];
        if (semians_two_point_value >= 50) {
            semians = Math.ceil(semians);
        }
        else if (semians_two_point_value < 50) {
            semians = Math.trunc(semians);
        }
        // var taxabel_output = Math.trunc(semians * 100) / 100;// tax able output
        taxableconsole.innerHTML = 'TAXABLE AMOUNT->' + `${semians}`;
        var taxslaveoutput = semians * taxslave / 100;
        taxslaveoutput = Math.trunc(taxslaveoutput * 100) / 100;
        var taxslave_two_point_value = (taxslaveoutput + "").split(".")[1];

        if (taxslave_two_point_value >= 50) {
            taxslaveoutput = Math.ceil(taxslaveoutput);
        }
        else if (taxslave_two_point_value < 50) {
            taxslaveoutput = Math.trunc(taxslaveoutput);
        }
        if (dropdownmenu == "CGST & SGST") {
            var halftaxtypeoutput = taxslaveoutput / 2;
            cgstconsole.innerHTML = 'CGST->' + `${halftaxtypeoutput}`;
            sgstconsole.innerHTML = 'SGST->' + `${halftaxtypeoutput}`;
            igstconsole.innerHTML = 'IGST->' + "";
        } else {
            cgstconsole.innerHTML = 'CGST->' + "";
            sgstconsole.innerHTML = 'SGST->' + "";
            igstconsole.innerHTML = 'IGST->' + `${taxslaveoutput}`;
        }

    } else if (taxslave == 24) {
        showconsole.style.display = "block";
        footershow.style.display = "none";
        var semians = number * 100 / 124;
        // var taxabel_output = Math.round(semians * 100) / 100;// tax able output
        semians = Math.trunc(semians * 100) / 100;
        var semians_two_point_value = (semians + "").split(".")[1];
        if (semians_two_point_value >= 50) {
            semians = Math.ceil(semians);
        }
        else if (semians_two_point_value < 50) {
            semians = Math.trunc(semians);
        }
        // var taxabel_output = Math.trunc(semians * 100) / 100;// tax able output
        taxableconsole.innerHTML = 'TAXABLE AMOUNT->' + `${semians}`;
        var taxslaveoutput = semians * taxslave / 100;
        taxslaveoutput = Math.trunc(taxslaveoutput * 100) / 100;
        var taxslave_two_point_value = (taxslaveoutput + "").split(".")[1];

        if (taxslave_two_point_value >= 50) {
            taxslaveoutput = Math.ceil(taxslaveoutput);
        }
        else if (taxslave_two_point_value < 50) {
            taxslaveoutput = Math.trunc(taxslaveoutput);
        }
        if (dropdownmenu == "CGST & SGST") {
            var halftaxtypeoutput = taxslaveoutput / 2;
            cgstconsole.innerHTML = 'CGST->' + `${halftaxtypeoutput}`;
            sgstconsole.innerHTML = 'SGST->' + `${halftaxtypeoutput}`;
            igstconsole.innerHTML = 'IGST->' + "";
        } else {
            cgstconsole.innerHTML = 'CGST->' + "";
            sgstconsole.innerHTML = 'SGST->' + "";
            igstconsole.innerHTML = 'IGST->' + `${taxslaveoutput}`;
        }

    } else if (taxslave == 25) {
        showconsole.style.display = "block";
        footershow.style.display = "none";
        var semians = number * 100 / 125;
        //var taxabel_output = Math.round(semians * 100) / 100;// tax able output
        semians = Math.trunc(semians * 100) / 100;
        var semians_two_point_value = (semians + "").split(".")[1];
        if (semians_two_point_value >= 50) {
            semians = Math.ceil(semians);
        }
        else if (semians_two_point_value < 50) {
            semians = Math.trunc(semians);
        }
        // var taxabel_output = Math.trunc(semians * 100) / 100;// tax able output
        taxableconsole.innerHTML = 'TAXABLE AMOUNT->' + `${semians}`;
        var taxslaveoutput = semians * taxslave / 100;
        taxslaveoutput = Math.trunc(taxslaveoutput * 100) / 100;
        var taxslave_two_point_value = (taxslaveoutput + "").split(".")[1];

        if (taxslave_two_point_value >= 50) {
            taxslaveoutput = Math.ceil(taxslaveoutput);
        }
        else if (taxslave_two_point_value < 50) {
            taxslaveoutput = Math.trunc(taxslaveoutput);
        }
        if (dropdownmenu == "CGST & SGST") {
            var halftaxtypeoutput = taxslaveoutput / 2;
            cgstconsole.innerHTML = 'CGST->' + `${halftaxtypeoutput}`;
            sgstconsole.innerHTML = 'SGST->' + `${halftaxtypeoutput}`;
            igstconsole.innerHTML = 'IGST->' + "";
        } else {
            cgstconsole.innerHTML = 'CGST->' + "";
            sgstconsole.innerHTML = 'SGST->' + "";
            igstconsole.innerHTML = 'IGST->' + `${taxslaveoutput}`;
        }

    } else if (taxslave == 26) {
        showconsole.style.display = "block";
        footershow.style.display = "none";
        var semians = number * 100 / 126;
        //var taxabel_output = Math.round(semians * 100) / 100;// tax able output
        semians = Math.trunc(semians * 100) / 100;
        var semians_two_point_value = (semians + "").split(".")[1];
        if (semians_two_point_value >= 50) {
            semians = Math.ceil(semians);
        }
        else if (semians_two_point_value < 50) {
            semians = Math.trunc(semians);
        }
        // var taxabel_output = Math.trunc(semians * 100) / 100;// tax able output
        taxableconsole.innerHTML = 'TAXABLE AMOUNT->' + `${semians}`;
        var taxslaveoutput = semians * taxslave / 100;
        taxslaveoutput = Math.trunc(taxslaveoutput * 100) / 100;
        var taxslave_two_point_value = (taxslaveoutput + "").split(".")[1];

        if (taxslave_two_point_value >= 50) {
            taxslaveoutput = Math.ceil(taxslaveoutput);
        }
        else if (taxslave_two_point_value < 50) {
            taxslaveoutput = Math.trunc(taxslaveoutput);
        }
        if (dropdownmenu == "CGST & SGST") {
            var halftaxtypeoutput = taxslaveoutput / 2;
            cgstconsole.innerHTML = 'CGST->' + `${halftaxtypeoutput}`;
            sgstconsole.innerHTML = 'SGST->' + `${halftaxtypeoutput}`;
            igstconsole.innerHTML = 'IGST->' + "";
        } else {
            cgstconsole.innerHTML = 'CGST->' + "";
            sgstconsole.innerHTML = 'SGST->' + "";
            igstconsole.innerHTML = 'IGST->' + `${taxslaveoutput}`;
        }

    } else if (taxslave == 27) {
        showconsole.style.display = "block";
        footershow.style.display = "none";
        var semians = number * 100 / 127;
        // var taxabel_output = Math.round(semians * 100) / 100;// tax able output
        semians = Math.trunc(semians * 100) / 100;
        var semians_two_point_value = (semians + "").split(".")[1];
        if (semians_two_point_value >= 50) {
            semians = Math.ceil(semians);
        }
        else if (semians_two_point_value < 50) {
            semians = Math.trunc(semians);
        }
        // var taxabel_output = Math.trunc(semians * 100) / 100;// tax able output
        taxableconsole.innerHTML = 'TAXABLE AMOUNT->' + `${semians}`;
        var taxslaveoutput = semians * taxslave / 100;
        taxslaveoutput = Math.trunc(taxslaveoutput * 100) / 100;
        var taxslave_two_point_value = (taxslaveoutput + "").split(".")[1];

        if (taxslave_two_point_value >= 50) {
            taxslaveoutput = Math.ceil(taxslaveoutput);
        }
        else if (taxslave_two_point_value < 50) {
            taxslaveoutput = Math.trunc(taxslaveoutput);
        }
        if (dropdownmenu == "CGST & SGST") {
            var halftaxtypeoutput = taxslaveoutput / 2;
            cgstconsole.innerHTML = 'CGST->' + `${halftaxtypeoutput}`;
            sgstconsole.innerHTML = 'SGST->' + `${halftaxtypeoutput}`;
            igstconsole.innerHTML = 'IGST->' + "";
        } else {
            cgstconsole.innerHTML = 'CGST->' + "";
            sgstconsole.innerHTML = 'SGST->' + "";
            igstconsole.innerHTML = 'IGST->' + `${taxslaveoutput}`;
        }

    } else if (taxslave == 28) {
        showconsole.style.display = "block";
        footershow.style.display = "none";
        var semians = number * 100 / 128;
        semians = Math.trunc(semians * 100) / 100;
        var semians_two_point_value = (semians + "").split(".")[1];
        if (semians_two_point_value >= 50) {
            semians = Math.ceil(semians);
        }
        else if (semians_two_point_value < 50) {
            semians = Math.trunc(semians);
        }
        // var taxabel_output = Math.trunc(semians * 100) / 100;// tax able output
        taxableconsole.innerHTML = 'TAXABLE AMOUNT->' + `${semians}`;
        var taxslaveoutput = semians * taxslave / 100;
        taxslaveoutput = Math.trunc(taxslaveoutput * 100) / 100;
        var taxslave_two_point_value = (taxslaveoutput + "").split(".")[1];

        if (taxslave_two_point_value >= 50) {
            taxslaveoutput = Math.ceil(taxslaveoutput);
        }
        else if (taxslave_two_point_value < 50) {
            taxslaveoutput = Math.trunc(taxslaveoutput);
        }
        if (dropdownmenu == "CGST & SGST") {
            var halftaxtypeoutput = taxslaveoutput / 2;
            cgstconsole.innerHTML = 'CGST->' + `${halftaxtypeoutput}`;
            sgstconsole.innerHTML = 'SGST->' + `${halftaxtypeoutput}`;
            igstconsole.innerHTML = 'IGST->' + "";
        } else {
            cgstconsole.innerHTML = 'CGST->' + "";
            sgstconsole.innerHTML = 'SGST->' + "";
            igstconsole.innerHTML = 'IGST->' + `${taxslaveoutput}`;
        }

    } else if (taxslave == 29) {
        showconsole.style.display = "block";
        footershow.style.display = "none";
        var semians = number * 100 / 129;
        // var taxabel_output = Math.round(semians * 100) / 100;// tax able output
        semians = Math.trunc(semians * 100) / 100;
        var semians_two_point_value = (semians + "").split(".")[1];
        if (semians_two_point_value >= 50) {
            semians = Math.ceil(semians);
        }
        else if (semians_two_point_value < 50) {
            semians = Math.trunc(semians);
        }
        // var taxabel_output = Math.trunc(semians * 100) / 100;// tax able output
        taxableconsole.innerHTML = 'TAXABLE AMOUNT->' + `${semians}`;
        var taxslaveoutput = semians * taxslave / 100;
        taxslaveoutput = Math.trunc(taxslaveoutput * 100) / 100;
        var taxslave_two_point_value = (taxslaveoutput + "").split(".")[1];

        if (taxslave_two_point_value >= 50) {
            taxslaveoutput = Math.ceil(taxslaveoutput);
        }
        else if (taxslave_two_point_value < 50) {
            taxslaveoutput = Math.trunc(taxslaveoutput);
        }
        if (dropdownmenu == "CGST & SGST") {
            var halftaxtypeoutput = taxslaveoutput / 2;
            cgstconsole.innerHTML = 'CGST->' + `${halftaxtypeoutput}`;
            sgstconsole.innerHTML = 'SGST->' + `${halftaxtypeoutput}`;
            igstconsole.innerHTML = 'IGST->' + "";
        } else {
            cgstconsole.innerHTML = 'CGST->' + "";
            sgstconsole.innerHTML = 'SGST->' + "";
            igstconsole.innerHTML = 'IGST->' + `${taxslaveoutput}`;
        }

    } else if (taxslave == 30) {
        showconsole.style.display = "block";
        footershow.style.display = "none";
        var semians = number * 100 / 130;
        // var taxabel_output = Math.round(semians * 100) / 100;// tax able output
        semians = Math.trunc(semians * 100) / 100;
        var semians_two_point_value = (semians + "").split(".")[1];
        if (semians_two_point_value >= 50) {
            semians = Math.ceil(semians);
        }
        else if (semians_two_point_value < 50) {
            semians = Math.trunc(semians);
        }
        // var taxabel_output = Math.trunc(semians * 100) / 100;// tax able output
        taxableconsole.innerHTML = 'TAXABLE AMOUNT->' + `${semians}`;
        var taxslaveoutput = semians * taxslave / 100;
        taxslaveoutput = Math.trunc(taxslaveoutput * 100) / 100;
        var taxslave_two_point_value = (taxslaveoutput + "").split(".")[1];

        if (taxslave_two_point_value >= 50) {
            taxslaveoutput = Math.ceil(taxslaveoutput);
        }
        else if (taxslave_two_point_value < 50) {
            taxslaveoutput = Math.trunc(taxslaveoutput);
        }
        if (dropdownmenu == "CGST & SGST") {
            var halftaxtypeoutput = taxslaveoutput / 2;
            cgstconsole.innerHTML = 'CGST->' + `${halftaxtypeoutput}`;
            sgstconsole.innerHTML = 'SGST->' + `${halftaxtypeoutput}`;
            igstconsole.innerHTML = 'IGST->' + "";
        } else {
            cgstconsole.innerHTML = 'CGST->' + "";
            sgstconsole.innerHTML = 'SGST->' + "";
            igstconsole.innerHTML = 'IGST->' + `${taxslaveoutput}`;
        }

    } else if (taxslave == 31) {
        showconsole.style.display = "block";
        footershow.style.display = "none";
        var semians = number * 100 / 131;
        // var taxabel_output = Math.round(semians * 100) / 100;// tax able output
        semians = Math.trunc(semians * 100) / 100;
        var semians_two_point_value = (semians + "").split(".")[1];
        if (semians_two_point_value >= 50) {
            semians = Math.ceil(semians);
        }
        else if (semians_two_point_value < 50) {
            semians = Math.trunc(semians);
        }
        // var taxabel_output = Math.trunc(semians * 100) / 100;// tax able output
        taxableconsole.innerHTML = 'TAXABLE AMOUNT->' + `${semians}`;
        var taxslaveoutput = semians * taxslave / 100;
        taxslaveoutput = Math.trunc(taxslaveoutput * 100) / 100;
        var taxslave_two_point_value = (taxslaveoutput + "").split(".")[1];

        if (taxslave_two_point_value >= 50) {
            taxslaveoutput = Math.ceil(taxslaveoutput);
        }
        else if (taxslave_two_point_value < 50) {
            taxslaveoutput = Math.trunc(taxslaveoutput);
        }
        if (dropdownmenu == "CGST & SGST") {
            var halftaxtypeoutput = taxslaveoutput / 2;
            cgstconsole.innerHTML = 'CGST->' + `${halftaxtypeoutput}`;
            sgstconsole.innerHTML = 'SGST->' + `${halftaxtypeoutput}`;
            igstconsole.innerHTML = 'IGST->' + "";
        } else {
            cgstconsole.innerHTML = 'CGST->' + "";
            sgstconsole.innerHTML = 'SGST->' + "";
            igstconsole.innerHTML = 'IGST->' + `${taxslaveoutput}`;
        }

    } else if (taxslave == 32) {
        showconsole.style.display = "block";
        footershow.style.display = "none";
        var semians = number * 100 / 132;
        // var taxabel_output = Math.round(semians * 100) / 100;// tax able output
        semians = Math.trunc(semians * 100) / 100;
        var semians_two_point_value = (semians + "").split(".")[1];
        if (semians_two_point_value >= 50) {
            semians = Math.ceil(semians);
        }
        else if (semians_two_point_value < 50) {
            semians = Math.trunc(semians);
        }
        // var taxabel_output = Math.trunc(semians * 100) / 100;// tax able output
        taxableconsole.innerHTML = 'TAXABLE AMOUNT->' + `${semians}`;
        var taxslaveoutput = semians * taxslave / 100;
        taxslaveoutput = Math.trunc(taxslaveoutput * 100) / 100;
        var taxslave_two_point_value = (taxslaveoutput + "").split(".")[1];

        if (taxslave_two_point_value >= 50) {
            taxslaveoutput = Math.ceil(taxslaveoutput);
        }
        else if (taxslave_two_point_value < 50) {
            taxslaveoutput = Math.trunc(taxslaveoutput);
        }
        if (dropdownmenu == "CGST & SGST") {
            var halftaxtypeoutput = taxslaveoutput / 2;
            cgstconsole.innerHTML = 'CGST->' + `${halftaxtypeoutput}`;
            sgstconsole.innerHTML = 'SGST->' + `${halftaxtypeoutput}`;
            igstconsole.innerHTML = 'IGST->' + "";
        } else {
            cgstconsole.innerHTML = 'CGST->' + "";
            sgstconsole.innerHTML = 'SGST->' + "";
            igstconsole.innerHTML = 'IGST->' + `${taxslaveoutput}`;
        }

    } else if (taxslave == 33) {
        showconsole.style.display = "block";
        footershow.style.display = "none";
        var semians = number * 100 / 133;
        // var taxabel_output = Math.round(semians * 100) / 100;// tax able output
        semians = Math.trunc(semians * 100) / 100;
        var semians_two_point_value = (semians + "").split(".")[1];
        if (semians_two_point_value >= 50) {
            semians = Math.ceil(semians);
        }
        else if (semians_two_point_value < 50) {
            semians = Math.trunc(semians);
        }
        // var taxabel_output = Math.trunc(semians * 100) / 100;// tax able output
        taxableconsole.innerHTML = 'TAXABLE AMOUNT->' + `${semians}`;
        var taxslaveoutput = semians * taxslave / 100;
        taxslaveoutput = Math.trunc(taxslaveoutput * 100) / 100;
        var taxslave_two_point_value = (taxslaveoutput + "").split(".")[1];

        if (taxslave_two_point_value >= 50) {
            taxslaveoutput = Math.ceil(taxslaveoutput);
        }
        else if (taxslave_two_point_value < 50) {
            taxslaveoutput = Math.trunc(taxslaveoutput);
        }
        if (dropdownmenu == "CGST & SGST") {
            var halftaxtypeoutput = taxslaveoutput / 2;
            cgstconsole.innerHTML = 'CGST->' + `${halftaxtypeoutput}`;
            sgstconsole.innerHTML = 'SGST->' + `${halftaxtypeoutput}`;
            igstconsole.innerHTML = 'IGST->' + "";
        } else {
            cgstconsole.innerHTML = 'CGST->' + "";
            sgstconsole.innerHTML = 'SGST->' + "";
            igstconsole.innerHTML = 'IGST->' + `${taxslaveoutput}`;
        }

    } else if (taxslave == 34) {
        showconsole.style.display = "block";
        footershow.style.display = "none";
        var semians = number * 100 / 134;
        // var taxabel_output = Math.round(semians * 100) / 100;// tax able output
        semians = Math.trunc(semians * 100) / 100;
        var semians_two_point_value = (semians + "").split(".")[1];
        if (semians_two_point_value >= 50) {
            semians = Math.ceil(semians);
        }
        else if (semians_two_point_value < 50) {
            semians = Math.trunc(semians);
        }
        // var taxabel_output = Math.trunc(semians * 100) / 100;// tax able output
        taxableconsole.innerHTML = 'TAXABLE AMOUNT->' + `${semians}`;
        var taxslaveoutput = semians * taxslave / 100;
        taxslaveoutput = Math.trunc(taxslaveoutput * 100) / 100;
        var taxslave_two_point_value = (taxslaveoutput + "").split(".")[1];

        if (taxslave_two_point_value >= 50) {
            taxslaveoutput = Math.ceil(taxslaveoutput);
        }
        else if (taxslave_two_point_value < 50) {
            taxslaveoutput = Math.trunc(taxslaveoutput);
        }
        if (dropdownmenu == "CGST & SGST") {
            var halftaxtypeoutput = taxslaveoutput / 2;
            cgstconsole.innerHTML = 'CGST->' + `${halftaxtypeoutput}`;
            sgstconsole.innerHTML = 'SGST->' + `${halftaxtypeoutput}`;
            igstconsole.innerHTML = 'IGST->' + "";
        } else {
            cgstconsole.innerHTML = 'CGST->' + "";
            sgstconsole.innerHTML = 'SGST->' + "";
            igstconsole.innerHTML = 'IGST->' + `${taxslaveoutput}`;
        }

    } else if (taxslave == 35) {
        showconsole.style.display = "block";
        footershow.style.display = "none";
        var semians = number * 100 / 135;
        //var taxabel_output = Math.round(semians * 100) / 100;// tax able output
        semians = Math.trunc(semians * 100) / 100;
        var semians_two_point_value = (semians + "").split(".")[1];
        if (semians_two_point_value >= 50) {
            semians = Math.ceil(semians);
        }
        else if (semians_two_point_value < 50) {
            semians = Math.trunc(semians);
        }
        // var taxabel_output = Math.trunc(semians * 100) / 100;// tax able output
        taxableconsole.innerHTML = 'TAXABLE AMOUNT->' + `${semians}`;
        var taxslaveoutput = semians * taxslave / 100;
        taxslaveoutput = Math.trunc(taxslaveoutput * 100) / 100;
        var taxslave_two_point_value = (taxslaveoutput + "").split(".")[1];

        if (taxslave_two_point_value >= 50) {
            taxslaveoutput = Math.ceil(taxslaveoutput);
        }
        else if (taxslave_two_point_value < 50) {
            taxslaveoutput = Math.trunc(taxslaveoutput);
        }
        if (dropdownmenu == "CGST & SGST") {
            var halftaxtypeoutput = taxslaveoutput / 2;
            cgstconsole.innerHTML = 'CGST->' + `${halftaxtypeoutput}`;
            sgstconsole.innerHTML = 'SGST->' + `${halftaxtypeoutput}`;
            igstconsole.innerHTML = 'IGST->' + "";
        } else {
            cgstconsole.innerHTML = 'CGST->' + "";
            sgstconsole.innerHTML = 'SGST->' + "";
            igstconsole.innerHTML = 'IGST->' + `${taxslaveoutput}`;
        }

    } else if (taxslave == 36) {
        showconsole.style.display = "block";
        footershow.style.display = "none";
        var semians = number * 100 / 136;
        // var taxabel_output = Math.round(semians * 100) / 100;// tax able output
        semians = Math.trunc(semians * 100) / 100;
        var semians_two_point_value = (semians + "").split(".")[1];
        if (semians_two_point_value >= 50) {
            semians = Math.ceil(semians);
        }
        else if (semians_two_point_value < 50) {
            semians = Math.trunc(semians);
        }
        // var taxabel_output = Math.trunc(semians * 100) / 100;// tax able output
        taxableconsole.innerHTML = 'TAXABLE AMOUNT->' + `${semians}`;
        var taxslaveoutput = semians * taxslave / 100;
        taxslaveoutput = Math.trunc(taxslaveoutput * 100) / 100;
        var taxslave_two_point_value = (taxslaveoutput + "").split(".")[1];

        if (taxslave_two_point_value >= 50) {
            taxslaveoutput = Math.ceil(taxslaveoutput);
        }
        else if (taxslave_two_point_value < 50) {
            taxslaveoutput = Math.trunc(taxslaveoutput);
        }
        if (dropdownmenu == "CGST & SGST") {
            var halftaxtypeoutput = taxslaveoutput / 2;
            cgstconsole.innerHTML = 'CGST->' + `${halftaxtypeoutput}`;
            sgstconsole.innerHTML = 'SGST->' + `${halftaxtypeoutput}`;
            igstconsole.innerHTML = 'IGST->' + "";
        } else {
            cgstconsole.innerHTML = 'CGST->' + "";
            sgstconsole.innerHTML = 'SGST->' + "";
            igstconsole.innerHTML = 'IGST->' + `${taxslaveoutput}`;
        }

    } else if (taxslave == 37) {
        showconsole.style.display = "block";
        footershow.style.display = "none";
        var semians = number * 100 / 137;
        //var taxabel_output = Math.round(semians * 100) / 100;// tax able output
        semians = Math.trunc(semians * 100) / 100;
        var semians_two_point_value = (semians + "").split(".")[1];
        if (semians_two_point_value >= 50) {
            semians = Math.ceil(semians);
        }
        else if (semians_two_point_value < 50) {
            semians = Math.trunc(semians);
        }
        // var taxabel_output = Math.trunc(semians * 100) / 100;// tax able output
        taxableconsole.innerHTML = 'TAXABLE AMOUNT->' + `${semians}`;
        var taxslaveoutput = semians * taxslave / 100;
        taxslaveoutput = Math.trunc(taxslaveoutput * 100) / 100;
        var taxslave_two_point_value = (taxslaveoutput + "").split(".")[1];

        if (taxslave_two_point_value >= 50) {
            taxslaveoutput = Math.ceil(taxslaveoutput);
        }
        else if (taxslave_two_point_value < 50) {
            taxslaveoutput = Math.trunc(taxslaveoutput);
        }
        if (dropdownmenu == "CGST & SGST") {
            var halftaxtypeoutput = taxslaveoutput / 2;
            cgstconsole.innerHTML = 'CGST->' + `${halftaxtypeoutput}`;
            sgstconsole.innerHTML = 'SGST->' + `${halftaxtypeoutput}`;
            igstconsole.innerHTML = 'IGST->' + "";
        } else {
            cgstconsole.innerHTML = 'CGST->' + "";
            sgstconsole.innerHTML = 'SGST->' + "";
            igstconsole.innerHTML = 'IGST->' + `${taxslaveoutput}`;
        }

    } else if (taxslave == 38) {
        showconsole.style.display = "block";
        footershow.style.display = "none";
        var semians = number * 100 / 138;
        //var taxabel_output = Math.round(semians * 100) / 100;// tax able output
        semians = Math.trunc(semians * 100) / 100;
        var semians_two_point_value = (semians + "").split(".")[1];
        if (semians_two_point_value >= 50) {
            semians = Math.ceil(semians);
        }
        else if (semians_two_point_value < 50) {
            semians = Math.trunc(semians);
        }
        // var taxabel_output = Math.trunc(semians * 100) / 100;// tax able output
        taxableconsole.innerHTML = 'TAXABLE AMOUNT->' + `${semians}`;
        var taxslaveoutput = semians * taxslave / 100;
        taxslaveoutput = Math.trunc(taxslaveoutput * 100) / 100;
        var taxslave_two_point_value = (taxslaveoutput + "").split(".")[1];

        if (taxslave_two_point_value >= 50) {
            taxslaveoutput = Math.ceil(taxslaveoutput);
        }
        else if (taxslave_two_point_value < 50) {
            taxslaveoutput = Math.trunc(taxslaveoutput);
        }
        if (dropdownmenu == "CGST & SGST") {
            var halftaxtypeoutput = taxslaveoutput / 2;
            cgstconsole.innerHTML = 'CGST->' + `${halftaxtypeoutput}`;
            sgstconsole.innerHTML = 'SGST->' + `${halftaxtypeoutput}`;
            igstconsole.innerHTML = 'IGST->' + "";
        } else {
            cgstconsole.innerHTML = 'CGST->' + "";
            sgstconsole.innerHTML = 'SGST->' + "";
            igstconsole.innerHTML = 'IGST->' + `${taxslaveoutput}`;
        }

    } else if (taxslave == 39) {
        showconsole.style.display = "block";
        footershow.style.display = "none";
        var semians = number * 100 / 139;
        // var taxabel_output = Math.round(semians * 100) / 100;// tax able output
        semians = Math.trunc(semians * 100) / 100;
        var semians_two_point_value = (semians + "").split(".")[1];
        if (semians_two_point_value >= 50) {
            semians = Math.ceil(semians);
        }
        else if (semians_two_point_value < 50) {
            semians = Math.trunc(semians);
        }
        // var taxabel_output = Math.trunc(semians * 100) / 100;// tax able output
        taxableconsole.innerHTML = 'TAXABLE AMOUNT->' + `${semians}`;
        var taxslaveoutput = semians * taxslave / 100;
        taxslaveoutput = Math.trunc(taxslaveoutput * 100) / 100;
        var taxslave_two_point_value = (taxslaveoutput + "").split(".")[1];

        if (taxslave_two_point_value >= 50) {
            taxslaveoutput = Math.ceil(taxslaveoutput);
        }
        else if (taxslave_two_point_value < 50) {
            taxslaveoutput = Math.trunc(taxslaveoutput);
        }
        if (dropdownmenu == "CGST & SGST") {
            var halftaxtypeoutput = taxslaveoutput / 2;
            cgstconsole.innerHTML = 'CGST->' + `${halftaxtypeoutput}`;
            sgstconsole.innerHTML = 'SGST->' + `${halftaxtypeoutput}`;
            igstconsole.innerHTML = 'IGST->' + "";
        } else {
            cgstconsole.innerHTML = 'CGST->' + "";
            sgstconsole.innerHTML = 'SGST->' + "";
            igstconsole.innerHTML = 'IGST->' + `${taxslaveoutput}`;
        }

    } else if (taxslave == 40) {
        showconsole.style.display = "block";
        footershow.style.display = "none";
        var semians = number * 100 / 140;
        semians = Math.trunc(semians * 100) / 100;
        var semians_two_point_value = (semians + "").split(".")[1];
        if (semians_two_point_value >= 50) {
            semians = Math.ceil(semians);
        }
        else if (semians_two_point_value < 50) {
            semians = Math.trunc(semians);
        }
        // var taxabel_output = Math.trunc(semians * 100) / 100;// tax able output
        taxableconsole.innerHTML = 'TAXABLE AMOUNT->' + `${semians}`;
        var taxslaveoutput = semians * taxslave / 100;
        taxslaveoutput = Math.trunc(taxslaveoutput * 100) / 100;
        var taxslave_two_point_value = (taxslaveoutput + "").split(".")[1];

        if (taxslave_two_point_value >= 50) {
            taxslaveoutput = Math.ceil(taxslaveoutput);
        }
        else if (taxslave_two_point_value < 50) {
            taxslaveoutput = Math.trunc(taxslaveoutput);
        }
        if (dropdownmenu == "CGST & SGST") {
            var halftaxtypeoutput = taxslaveoutput / 2;
            cgstconsole.innerHTML = 'CGST->' + `${halftaxtypeoutput}`;
            sgstconsole.innerHTML = 'SGST->' + `${halftaxtypeoutput}`;
            igstconsole.innerHTML = 'IGST->' + "";
        } else {
            cgstconsole.innerHTML = 'CGST->' + "";
            sgstconsole.innerHTML = 'SGST->' + "";
            igstconsole.innerHTML = 'IGST->' + `${taxslaveoutput}`;
        }

    } else {
    alert("Sorry at this moment this tax slave are not included, and please click to feedback button to ask add this tax slave!")
    }
}
showbtn.addEventListener('click', getoutput);

const exitbtn = document.getElementById("exitbtn");
function closeoutputwindow(event) {
    event.preventDefault();
    showconsole.style.display = "none";
    footershow.style.display = "block";
}
exitbtn.addEventListener('click', closeoutputwindow);