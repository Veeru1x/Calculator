 let display = document.getElementById('display');
        let currentValue = '0';

        function updateDisplay() {
            display.textContent = currentValue;
        }

        function appendNumber(num) {
            if (currentValue === '0') currentValue = num;
            else currentValue += num;
            updateDisplay();
        }

        function appendOperator(op) {
            currentValue += op;
            updateDisplay();
        }

        function clearDisplay() {
            currentValue = '0';
            updateDisplay();
        }

        function deleteLast() {
            currentValue = currentValue.slice(0, -1) || '0';
            updateDisplay();
        }

        function calculate() {
            try {
                currentValue = eval(currentValue).toString();
            } catch {
                currentValue = 'Error';
            }
            updateDisplay();
        }
