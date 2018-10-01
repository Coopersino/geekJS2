    /* ДЗ
    Доработать кофеварку:
   1) ввести значение зерен (deal)
   2) проверить на пустую кофеварку (deal) 
   3) реализовать кнопку стоп (deal)
   4)* время приготовления зависит от кол-ва зерен (deal)

    */
    function CoffeMachine(power) {
        const waterHeatCapacity = 4200;
        const maxTemp = 90;
        let coffeeBeansOnGramms = 0;
        let waterAmount = 0;

        this.fill = function (newAmout, newСoffeeBeansOnGramms) {
            if (newAmout === 0 || newСoffeeBeansOnGramms === 0) {
                console.error('Кофеварка пуста!');
            } else {
                if (newAmout >= 50) {
                    waterAmount = newAmout;
                } else {
                    console.error('Слишком мало воды!');
                }

                if (newСoffeeBeansOnGramms >= 10) {
                    coffeeBeansOnGramms = newСoffeeBeansOnGramms;
                } else {
                    console.error('Слишком мало кофезерен!');
                }
            }
        }

        const getBoilTime = function () {
            return ((waterAmount + waterAmount * (coffeeBeansOnGramms * 0.01))* waterHeatCapacity * maxTemp) / power;
        }

        this.launch = function () {
            const time = getBoilTime();

            console.info(`Время ожидания ${time}`);
            let timerID = setTimeout(function () {
                console.log('Ваш кофе готов!');
            }, time);
            return timerID;
        }

        this.stop = function (timerID) {
            clearTimeout(timerID);
            console.log('Приготовление кофе прервано!');
        }
    }

    var vitek = new CoffeMachine(3000);
    vitek.fill(50, 20);
    let timerID = vitek.launch();
    //vitek.stop(timerID);