    const getSumBtn = document.createElement("button");
    getSumBtn.append("Get Total Price");
    document.body.appendChild(getSumBtn);
    let price = document.querySelectorAll(".price");
    let sum;
    let table = document.querySelector("table");
    const getSum = () => {
    //Add your code here
        sum=0
        for(let t of price){
            sum+=(t.innerHTML)-0
        }
        let tr = document.createElement("tr");
        table.append(tr);
        let td = document.createElement("td");
        // tr.append(td);
		td.id = "ans"
        td.innerHTML = sum;
        tr.append(td);
    };

    getSumBtn.addEventListener("click", getSum);

