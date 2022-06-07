// Your code here
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace('px', '');
    let left = parseInt(leftNumbers, 10);
  
    if ( left < 400) {
      dodger.style.left = `${left + 7}px`;
    }
  }

  document.addEventListener('keydown', function(e) {
    if ( e.which === 39 ) {
      moveDodgerLeft();
    }
    if ( e.which === 42) {
      moveDodgerRight();
    }
  });




