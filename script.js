document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display');
  const buttons = document.querySelectorAll('input[type="button"]');
  const operators = ['+', '-', '*', '/', '.'];

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.value;

      if (value === 'AC') {
        display.value = '';
      } 
      else if (value === 'DE') {
        display.value = display.value.slice(0, -1);
      } 
      else if (value === '=') {
        try {
          if (display.value !== '') {
            display.value = evaluate(display.value);
          }
        } catch (err) {
          display.value = 'Error';
        }
      } 
      else {
        
        const lastChar = display.value.slice(-1);
        if (operators.includes(value) && operators.includes(lastChar)) {
          return; 
        }
        display.value += value;
      }
    });
  });

  
  function evaluate(expr) {
    
    return new Function('return ' + expr)();
  }
});
