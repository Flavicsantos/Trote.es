function calcular() {
        let qtdeArroz = Number(document.getElementById("qtdeArroz").value)
        let qtdeFeijao = Number(document.getElementById("qtdeFeijao").value)
        let qtdeOleo = Number(document.getElementById("qtdeOleo").value)
        let qtdeMacarrao = Number(document.getElementById("qtdeMacarrao").value)
        let pontos = (qtdeArroz * 10) + (qtdeFeijao * 8) + (qtdeOleo * 4) + (qtdeMacarrao * 2)

        let cor = document.getElementById("cor").value

        let metaProva1
        if(cor == "amarela"){
            metaProva1 = 54
        }
        else if ( cor == "ciza") {
            metaProva1 = 51
        }
        else if (cor == "laranja") {
            metaProva1 = 24
        }
        else if ( cor == "marrom") {
            metaProva1 = 88
        }
        else if (cor == "preta") {
            metaProva1 = 60
        }
        else if (cor == "rosa") {
            metaProva1 = 44
        }
        else if (cor == "roxa") {
            metaProva1 = 42
        }
        else if (cor == "verde") {
            metaProva1 = 61
        }
        else if (cor == "vermelha") {
            metaProva1 = 32
        }

        let kitAlimentacao = Number(document.getElementById("kitAlimentacao").value)
         if (kitAlimentacao >= 60) {
        pontos = pontos + 5000 // já garantimos 5000
        if (kitAlimentacao > 60){
            // ganhamos 83.33 a mais de ponto por itens que ultrapassaram 60
            pontos = pontos + (kitAlimentacao - 60) * 83.33
        }
    }
    else {
        pontos = pontos + kitAlimentacao * 83.33
    }
        document.getElementById("resultado").innerText = "Pontuação total: " + pontos + ' pontos'
}
