let app = new Vue({
    el: '#app',
    data: {
        screen: '0',
        firstNumber: '',
        operator: '',
        secondNumber: '',
        calculateStatus: false
    },
    methods: {
        clickMe(value) {
            if (this.operator == '') {
                if (this.screen == '0' || this.calculateStatus == true) {
                    this.calculateStatus = false;
                    this.screen = '';
                }
                this.screen += value;
                this.firstNumber = this.screen;
            }else {
                this.screen += value;
                this.secondNumber += value; 
            }
        },
        clickOperator(value) {
            this.screen += value;
            this.operator = value;
        },
        calculate() {
            if (this.operator && this.firstNumber && this.secondNumber) {
                let result = this.operation();
                this.screen = `${this.firstNumber} ${this.operator} ${this.secondNumber} = ${result}`;
                this.operator = '';
                this.firstNumber = '';
                this.secondNumber = '';
                this.calculateStatus = true;
            }else {
                this.screen = '0';
                this.firstNumber = '';
                this.operator = '';
                this.secondNumber = '';
            }
        },
        operation() {
            let num1 = parseFloat(this.firstNumber);
            let num2 = parseFloat(this.secondNumber);
            switch (this.operator) {
                case '+':
                    return num1 + num2;
                    break;
                case '-':
                    return num1 - num2;
                    break;
                case '*':
                    return num1 * num2;
                    break;
                case '/':
                    return num1 / num2;
                    break;
                default:
                    return 'error';
                    break;
            }
        },
        clear() {
            this.screen = '0';
            this.firstNumber = '';
            this.operator = '';
            this.secondNumber = '';
            this.calculateStatus = false;
        }
    }
})
