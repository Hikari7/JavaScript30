"use strict";
{
  const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

  let lastChecked;
  
  function handleCheck(e) {
    // Check if they had the shift key down
    // AND check that they are checking it
    let inBetween = false;
    if (e.shiftKey && this.checked) {
      // go ahead and do what we please
      // loop over every single checkbox
      checkboxes.forEach(checkbox => {
        console.log(checkbox);
        if (checkbox === this || checkbox === lastChecked) 
        //チェックがクリックしたのと同じもしくは最後にチェックしたもの
        {
          inBetween = !inBetween; //上からのShiftと下からのShift
          console.log('Starting to check them in between!');
        }
  
        if (inBetween) {
          checkbox.checked = true;
        }
      });
    }
  
    lastChecked = this;
  }

  //👆we are going to loop over every single checkbox, and create a variable called in-between: we'll loop over this one and I'll say in-between false. it sets true we are here, but in the last one, we'll say in-between is false.

  checkboxes.forEach((checkbox) =>
    checkbox.addEventListener("click", handleCheck)
  );
}
