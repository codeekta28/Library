export function billPrompt(bill,qty,book){
    var response = confirm(`Your total bill is Rs ${bill}.Are you sure you want to proceed`);
    if (response == true) {
      // Do the action
      alert(
        `Request is send to admin for ${qty} ${book} books `
      );
    } else {
      // Don't do the action
      alert("check some other books hope you like it")
    }
  }
 