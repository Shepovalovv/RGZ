function finance() {
    let data = ["28.04.2023", "27.04.2023", "26.04.2023", "25.04.2023", "24.04.2023", "21.04.2023", 
                "20.04.2023", "19.04.2023", "18.04.2023", "17.04.2023", "14.04.2023", "13.04.2023",
                "12.04.2023", "11.04.2023", "10.04.2023", "07.04.2023", "06.04.2023", "05.04.2023",
                "04.04.2023", "03.04.2023"];

    let price = [191.49, 194.49, 193.82, 195.92, 200.51, 
                 196.94, 194.38, 198.26, 196.19, 181.75, 
                 176.01, 176.93, 173.60, 166.24, 162.78, 
                 155.99, 150.71, 152.83, 152.85, 156.80];

    let table = document.getElementById("table1");
        for(let i = 0; i < price.length; i++) {
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            td2.innerHTML = price[i];
            td1.innerHTML = data[i];
            tr.appendChild(td1);
            tr.appendChild(td2);
            table.appendChild(tr);
    }
    let max = document.getElementById("max");
    let min = document.getElementById("min");
    let sum = 0;
    max.innerHTML = "Максимальное значение: " + Math.max.apply(0, price);
    min.innerHTML = "Минимальное значение: " + Math.min.apply(0, price);

    for(i = 0; i < price.length; i++) {
        sum = sum + price[i];
    }

    let average = sum / 20;
    let sumkvadrat = 0;
    
    for(let i = 0; i < price.length; i++){
        sumkvadrat = sumkvadrat + (price[i] - average)**2;
    }

    let standartDjho = Math.sqrt(sumkvadrat / 20);
    let final = document.getElementById("standartDjho")
    final.innerHTML = "Среднееквадратическое отклонение: " + standartDjho.toFixed(2);
}

finance()

