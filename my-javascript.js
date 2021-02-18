
    /* A validation message is alerted if data is missing in a certain filled */
function validData () {
    //if customer ID is missing
    var customerid = document.getElementById ("customer-id-input");
    if (customerid.value == "") {
            document.getElementById("outer-box").style.display = "block";
            document.getElementById("alert").innerHTML = "Please fill in Customer ID first !";
            return false;
    };
    //if customer name is missing
    var name = document.getElementById("name-input");
    if ( name.value =="") {
            document.getElementById("outer-box").style.display = "block";
            document.getElementById("alert").innerHTML = "Your name can't be missing !";
            return false;
    };
    //if customer state is missing
    var state = document.getElementById("state-input");
    if (state.value =="" && document.getElementById("state-input").validity.rangeOverflow) {
            document.getElementById("outer-box").style.display = "block";
            document.getElementById("alert").innerHTML = " Please fill in your state!";
            return false;
    };
    // if part number is missing
    var partNum = document.getElementById("id1");
    if (partNum.value =="") {
           document.getElementById("outer-box").style.display = "block";
           document.getElementById("alert").innerHTML = "Please fill in part number !";
           return false;
    };
    //if description of part ordered is missing
    var partOrderDescrip = document.getElementById("id2");
    if (partOrderDescrip.value == "") {
           document.getElementById("outer-box").style.display = "block";
           document.getElementById("alert").innerHTML = "Please describe part ordered !";
           return false;
    };
    //Price must be a number greater than 0
    var pricePart = document.getElementById ("id3");
    if (pricePart.value == "" || pricePart.value <= 0) {
        document.getElementById("outer-box").style.display = "block";
           document.getElementById("alert").innerHTML = "Price must be a number greater than zero !";
           return false;
    }
    // Quantity must be a number greater than zero
    var quantityPart = document.getElementById ("id4");
    if (quantityPart.value == "" || quantityPart.value <= 0) {
        document.getElementById("outer-box").style.display = "block";
           document.getElementById("alert").innerHTML = "Quantity must be a number greater than zero !";
           return false;
    }
     /*A function that computes cost of the part ordered with cost as argument*/
 var cost ;
 var tax;
 function myFunc() {
// Getting the values passed into the price per part and quantity to compute cost
   var price = document.getElementById ("id3").value;
   var quantity = document.getElementById ("id4").value;
   cost = (price * quantity);
   document.getElementById ("div1").innerHTML = "$" + Math.floor (cost % (10 * 100));

   /* Computation for the tax rates for the part ordered fo kampala retail customers and mbarara retail customers*/
    //tax rate for kampala retail customers
    var percentage1 = Math.floor (((10/100) * (cost)) % (10 * 100));
    //tax rate for Mbarara retail customers 
    var percentage2 = Math.floor (((5/100) * (cost)) % (10 * 100));
    // tax rate for Entebbe
    var percentage3 = Math.floor (((5/100) * (cost)) % (10 * 100));
    // tax rate for retail customers from other states
    var percentage4 = Math. floor (((0/100) * (cost)) % (10 * 100));
    //tax rate for non retail customers regadless of the state of operation
    var percentage5 = Math.floor (((0/100) * (cost)) % (100 * 1000)); 
    var state = document.getElementById ("state-input");
    var retailCustomer = document.getElementById ("checkbox-input");
            if (retailCustomer.checked === true) {
                if (state.value) {
                    if (state.value === "KLA") {
                        tax = percentage1;
                        document.getElementById ("div2").innerHTML = "$" + percentage1;
                    }
                    if(state.value === "MBR") {
                        tax = percentage2;
                        document.getElementById ("div2").innerHTML = "$" + percentage2;
                    }
                    if (state.value === "EBB") {
                        tax = percentage3;
                        document.getElementById ("div2").innerHTML =  "$" + percentage3; 
                    }
                }
                }
                if (retailCustomer.checked === false) {
                    if (state.value !== "KLA" || state.value !== "MBR" || state.value !== "EBB") {
                        tax = percentage4;
                        tax = percentage5;
                        document.getElementById ("div2").innerHTML = "$" + percentage4;
                        document.getElementById ("div2").innerHTML = "$" + percentage5;
                        document.getElementById ("div2").innerHTML = "$" + percentage4;
                    }

                }
}
myFunc ();
var shiphandling ;
function ShippingHandling () {
    /** Charges for Shipping And Handling  for the part ordered using the different shipping agencies**/
    var price = document.getElementById ("id3");
    var quantity = document.getElementById ("id4");
    var overSizedContainer = document.getElementById ("id5");
   // Ship handling for part ordered using UPS
     var byUps = document.getElementById ("box-1");
    if (byUps.checked === true) {
    if (price.value) {
               shiphandling  = Math.floor((7.00 * quantity.value) % (100 * 1000 ));
               document.getElementById ("div3").innerHTML = "$" + shiphandling;
    }
    // Extra handling charge for checked oversized container
    else if(overSizedContainer.checked === true) {
              shiphandling = Math.floor (((7.00 + 5.00) * quantity.value) % (100 * 1000));
              document.getElementById ("div3").innerHTML =  "$" + shiphandling;
    };
    }
   // ship handling for part ordered using U.S Postal Air
   var postalAir = document.getElementById ("box-3");
   if (postalAir.checked === true) {
    if (price.value) {
              shiphandling = Math.floor((8.50 * quantity.value) % (100 * 1000 ));
              document.getElementById ("div3").innerHTML = "$" + shiphandling;
    }
    // Extra handling charge for checked container
    if(overSizedContainer.checked === true) {
             shiphandling = Math.floor (((8.50 + 5.00) * quantity.value) % (100 * 1000));
             document.getElementById ("div3").innerHTML = "$" + shiphandling;
    };
   }
   // ship handling for part ordered using Fred Ex Ground
   var fredExground = document.getElementById ("box-2");
   if (fredExground.checked === true) {
   if (price.value) {
             shiphandling = Math.floor ((9.25 * quantity.value) % (100 * 1000 ));
             document.getElementById ("div3").innerHTML = "$" + shiphandling;
    }
    // Extra handling charge for part orderd
    if (overSizedContainer.checked === true) {
            shiphandling = Math.floor (((9.25 + 5.00) * quantity.value) % (100 * 1000));
            document.getElementById ("div3").innerHTML = "$" + shiphandling;
    };
   }
   // ship handling for part ordered using Fred Ex Air
   var fredExair = document.getElementById("box-4");
   if (fredExair.checked === true) {
       if (price.value) {
            shiphandling = Math.floor ((12.00 * quantity.value) % (100 * 1000));
            document.getElementById ("div3").innerHTML = "$" + shiphandling;
       }
       // Extra handling charge for part ordered
      if (overSizedContainer.checked === true) {
           shiphandling = Math.floor (((12.00 + 5.00) * quantity.value) % (100 * 1000));
           document.getElementById ("div3").innerHTML = "$" + shiphandling;
   };
   }
}
ShippingHandling ();
function mytotal (){
    var total = tax + cost + shiphandling;
    document.getElementById ("div4").innerHTML = "$" + total;
    }
    mytotal ();
}
// Displaying the exit yes and no buttons
function exit () {
    var exit = document.getElementById ("myalert");
    exit.style.display = "block";
}
function pressingNo () {
    var exit = document.getElementById ("myalert");
    exit.style.display = "none";
}
//Exiting alert pop up
function removePopUp () {
    var exit = document.getElementById ("outer-box");
    exit.style.display = "none";
}
                      
