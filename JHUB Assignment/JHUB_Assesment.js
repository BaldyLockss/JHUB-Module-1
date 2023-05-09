// RADIO BUTTON CALCULATIONS //
function chosen() {
    alert("Thankyou for viewing my assessment submission");
  }
  
  function prices() {
    document.formList.total.value = "";
    var sum = 0;
    for (i = 0; i < document.formList.order.length; i++) {
      if (document.formList.order[i].checked) {
        sum = sum + parseInt(document.formList.order[i].value);
      }
    }
    document.formList.total.value = "£" + sum;
  }
  