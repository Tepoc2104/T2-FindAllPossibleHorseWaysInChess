function PossibleWays(startpos) {
    startpos = document.getElementById('start').value; // Запоминаем поле где находится конь
    var ChessX = 9;
    var ChessY = 9;
    var Chess = [];
    for ( var i = 0; i < ChessX; i++ ) {
        Chess[i] = [];
    }
    var alphabet=65; // Для использования кода символов из алфавита
    for (var i=1; i<ChessX; i++){//Заполняем массив значениями  типа А1, D4
        for(var j=1; j<ChessY;j++){
            Chess[i-1][j-1]=""+String.fromCharCode(alphabet)+j;
        }
        alphabet++;
    }
    var result = '';// Переменная для вывода итога проверки

    for (var i=0; i<ChessX; i++){
        for(var j=0; j<ChessY;j++){
            if (Chess[i][j]==startpos) // Проверяем местонахождение коня и его возможные ходы
            {
                if(i<6 && j>0){ // вправо вниз
                    result+=Chess[i+2][j-1]+" ";
                }
                if(i<6 && j<7){ // вправо вверх
                    result+=Chess[i+2][j+1]+" ";
                }
                if(i>1 && j>0){ // влево вниз
                    result+=Chess[i-2][j-1]+" ";
                }
                if(i>1 && j<7){ // влево вверх
                    result+=Chess[i-2][j+1]+" ";
                }
                if(j>2 && i<7){ // вниз вправо
                    result+=Chess[i+1][j-2]+" ";
                }
                if(j<6 && i<7){ // вверх вправо
                    result+=Chess[i+1][j+2]+" ";
                }
                if(j>1 && i>0) { // вниз влево
                    result+=Chess[i-1][j-2]+" "
                }
                if(j<6 && i>0){ // вверх влево
                    result+=Chess[i-1][j+2];
                }
                alert("Возможные варианты хода:"+"\r\n\n\n"+result);
                return; //Завершаем функцию
            }
        }
    }// Если функция не завершена и выполняется этот код, значит ввели неверный номер клетки
    alert("Попробуйте ввести корректный номер шахматной клетки!");

}