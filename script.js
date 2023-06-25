function computeResult(form) {
    //   console.log(form);
    //   console.log(form.getElementById("form-fieldset"));
    // getElementById is only availabe with document object
    //   console.log(form.querySelector("#from-fieldset").querySelector("#from").value);
  
    document.querySelector("#exception-message").innerHTML = "";
  
    let fromVar = form.querySelector("#from").value;
  
    let result = 0;
    let fromUnit = form.querySelector("#from-unit").value;
    let toUnit = form.querySelector("#to-unit").value;
  
    let pattern = /^([0-9]*)?([.]([0-9]{1,10}))?$/;
  
    if (!pattern.test(fromVar)) {
      document.querySelector("#exception-message").innerHTML = "!!!!!!!!!!!Invalid value!!!!!!!!!!!!!!!!!!!!";
    } else {
      if (fromUnit && toUnit) {
        //conversion code
        if (fromUnit === "mm") {
          if (toUnit === "mm") result = Number(fromVar);
          else if (toUnit === "cm") result = Number(fromVar) * 0.1;
          else if (toUnit === "km") result = Number(fromVar) / 1000000;
          else if (toUnit === "m") result = Number(fromVar) / 1000;
          else if (toUnit === "ft") result = Number(fromVar) / 304.8;
          else if (toUnit === "y") result = Number(fromVar) / 914.4;
          else if (toUnit === "mile") result = Number(fromVar) / 1609340;
          else if (toUnit === "in") result = Number(fromVar) / 25.4;
        } else if (fromUnit === "cm") {
          if (toUnit === "mm") result = Number(fromVar) * 10;
          else if (toUnit === "cm") result = Number(fromVar);
          else if (toUnit === "km") result = Number(fromVar) / 100000;
          else if (toUnit === "m") result = Number(fromVar) / 100;
          else if (toUnit === "ft") result = Number(fromVar) / 30.48;
          else if (toUnit === "y") result = Number(fromVar) / 91.44;
          else if (toUnit === "mile") result = Number(fromVar) / 160934;
          else if (toUnit === "in") result = Number(fromVar) / 2.54;
        } else if (fromUnit === "m") {
          if (toUnit === "mm") result = Number(fromVar) * 1000;
          else if (toUnit === "cm") result = Number(fromVar) * 100;
          else if (toUnit === "km") result = Number(fromVar) / 1000;
          else if (toUnit === "m") result = Number(fromVar);
          else if (toUnit === "ft") result = Number(fromVar) * 3.28084;
          else if (toUnit === "y") result = Number(fromVar) * 1.09361;
          else if (toUnit === "mile") result = Number(fromVar) / 1609.34;
          else if (toUnit === "in") result = Number(fromVar) * 39.3701;
        } else if (fromUnit === "km") {
          if (toUnit === "mm") result = Number(fromVar) * 1000000;
          else if (toUnit === "cm") result = Number(fromVar) * 100000;
          else if (toUnit === "km") result = Number(fromVar);
          else if (toUnit === "m") result = Number(fromVar) * 1000;
          else if (toUnit === "ft") result = Number(fromVar) * 3280.84;
          else if (toUnit === "y") result = Number(fromVar) * 1093.61;
          else if (toUnit === "mile") result = Number(fromVar) / 1.60934;
          else if (toUnit === "in") result = Number(fromVar) * 39370.1;
        } else if (fromUnit === "ft") {
          if (toUnit === "mm") result = Number(fromVar) * 1000000;
          else if (toUnit === "cm") result = Number(fromVar) * 30.48;
          else if (toUnit === "km") result = Number(fromVar) * 0.0003048;
          else if (toUnit === "m") result = Number(fromVar) * 0.3048;
          else if (toUnit === "ft") result = Number(fromVar);
          else if (toUnit === "y") result = Number(fromVar) * 0.333333;
          else if (toUnit === "mile") result = Number(fromVar) / 5280;
          else if (toUnit === "in") result = Number(fromVar) * 12;
        } else if (fromUnit === "y") {
          if (toUnit === "mm") result = Number(fromVar) * 914.4;
          else if (toUnit === "cm") result = Number(fromVar) * 91.44;
          else if (toUnit === "km") result = Number(fromVar) / 1093.6133;
          else if (toUnit === "m") result = Number(fromVar) * 0.9144;
          else if (toUnit === "ft") result = Number(fromVar) * 3;
          else if (toUnit === "y") result = Number(fromVar);
          else if (toUnit === "mile") result = Number(fromVar) / 1760;
          else if (toUnit === "in") result = Number(fromVar) * 36;
        } else if (fromUnit === "in") {
          if (toUnit === "mm") result = Number(fromVar) * 25.4;
          else if (toUnit === "cm") result = Number(fromVar) * 2.54;
          else if (toUnit === "km") result = Number(fromVar) * 0.0000254;
          else if (toUnit === "m") result = Number(fromVar) * 0.0254;
          else if (toUnit === "ft") result = Number(fromVar) / 12;
          else if (toUnit === "y") result = Number(fromVar) / 36;
          else if (toUnit === "mile") result = Number(fromVar) / 63360;
          else if (toUnit === "in") result = Number(fromVar);
        } else if (fromUnit === "mile") {
          if (toUnit === "mm") result = Number(fromVar) * 1609340;
          else if (toUnit === "cm") result = Number(fromVar) * 160934;
          else if (toUnit === "km") result = Number(fromVar) * 1.60934;
          else if (toUnit === "m") result = Number(fromVar) * 1609.34;
          else if (toUnit === "ft") result = Number(fromVar) * 5280;
          else if (toUnit === "y") result = Number(fromVar) * 1760;
          else if (toUnit === "mile") result = Number(fromVar);
          else if (toUnit === "in") result = Number(fromVar) * 63360;
        }
        // console.log(result);
        // form.querySelector("#to").placeholder = result;
        form.querySelector("#to").value = result;
      }
    }
  }