const cards = document.querySelectorAll(".item")
    const button = document.querySelector("button")
    var tentativas = document.querySelector("span")

    iniciarContador()

    const newRadom = () => parseInt(Math.random() * (4 - 0) + 0)
    const reset = () =>{
        random = newRadom();

        cards.forEach(value => value.classList.remove("true"));
        cards.forEach(value => value.classList.remove("false"));
        button.classList.add("hide");
        tentativas.innerHTML = 3;
        document.getElementById("final").innerHTML = "Você tem " 
        document.getElementById("final").appendChild(tentativas)
        document.getElementById("final").innerHTML += " tentativas, ache a carta dourada, <br> escolha uma carta"
        tentativas = document.querySelector("span")
    }

    const showAll = () => cards.forEach((value,index) =>{
        if(random === index){
            value.classList.add("true")
        }
        else{
            value.classList.add("false")
        }
    })

    button.addEventListener("click", reset)
    let random = newRadom()

    function iniciarContador() {
        cards.forEach((value,index) =>{
            value.addEventListener("click", () =>{
                console.log(Number(tentativas.innerHTML));

                if(random === index){
                    value.classList.add("true")
                    showAll()
                    button.classList.remove("hide")
                    document.getElementById("final").innerHTML = "Você acertou!!!";
                }
                else if(Number(tentativas.innerHTML) > 1){
                    value.classList.add("false")
                    tentativas.innerHTML = Number(tentativas.innerHTML) - 1
                }
                else{
                    value.classList.add("false")
                    tentativas.innerHTML = Number(tentativas.innerHTML) - 1
                    document.getElementById("final").innerHTML = "Você errou!!!"
                    showAll()
                    button.classList.remove("hide")
                }
            })
        })
    }
