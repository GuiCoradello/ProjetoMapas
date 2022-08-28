//AIzaSyAwrnE0tfOdJJSW279mK40ptwsqY9nY0A0
/*
marcador para estilizacao
card test
<input type="checkbox" name="teste1" id="teste1" data-check>
          <label for="teste1"></label>
          <label for="teste1" data-Rua>Rua francisca de paula</label>


*/
const marcador = (color) => {
    return `http://www.guilhermestorck.com.br/dadosfinos/pinos-gmaps/m/${color}.png`;

}






function initMap() {
    const containerMap = document.getElementById('map');
    const ctProFitgh = { lat: -23.560770, lng: -46.532341 }

    //responsavel por gerar cordenadas atraves de endereco !!
    const gerandoCordenadas = new google.maps.Geocoder()

    const especificacoesMapa = {
        center: ctProFitgh,
        zoom: 15,
        mapTypeControl: false,
        fullscreenControl: false,
        zoomControl: false
    }

    let map = new google.maps.Map(containerMap, especificacoesMapa);


    let marcarLocalizacaoCentral = new google.maps.Marker({
        position: ctProFitgh,
        map: map,
        icon: '',
        label: '',
        title: 'Academia de Jiu-Jitsu',
        animation: google.maps.Animation.BOUNCE,

    });
    // 
    function adicionarMakerNoMapa(posicao, color) {
        const marca = new google.maps.Marker({
            position: posicao,
            map: map,
            label: '',
            icon: '',
            title: '',
            animation: google.maps.Animation.BOUNCE
        })

    };

    const definirPosicaoDoMarkerNoMapa = (endereco, color) => {
        gerandoCordenadas.geocode({ address: endereco },
            (resultado) => {
                adicionarMakerNoMapa(resultado[0].geometry.location, color)

            })

    }


    const botaoDemarcacao = document.querySelector('[data-botaoDemarcacao]')


    botaoDemarcacao.addEventListener('click', () => {
        //nao entendi o escopo destes inputs (enderecoRua/inputCheck) [!!pesquisar!!]
        const enderecoRua = document.querySelectorAll('[data-Rua]');
        const inputCheck = document.querySelectorAll('[data-check]');

        let enderecosPraMostrarNoMapa = []
        map = new google.maps.Map(containerMap, especificacoesMapa);
        marcarLocalizacaoCentral = new google.maps.Marker({
            position: ctProFitgh,
            map: map,
            icon: '',
            label: '',
            title: 'Academia de Jiu-Jitsu',
            animation: google.maps.Animation.BOUNCE,

        });



        for (let i = 0; i < inputCheck.length; i++) {

            if (inputCheck[i].checked) {
                enderecosPraMostrarNoMapa.push(enderecoRua[i].innerHTML)
            }

        }

        for (let i = 0; i < enderecosPraMostrarNoMapa.length; i++) {
            definirPosicaoDoMarkerNoMapa(enderecosPraMostrarNoMapa[i], 'vermelho')
        }
        console.log(enderecosPraMostrarNoMapa)
    })
}

const abreModal = document.querySelector('[data-botaoCadastroUser]');
const modalCadastro = document.querySelector('[data-modalCadastro]');
const boxMapa = document.querySelector('[data-mapa]')
abreModal.addEventListener('click', () => {
    boxMapa.classList.toggle('z-menos')
    modalCadastro.classList.toggle('display--none');
    modalCadastro.classList.toggle('display--flex');

}
)

//modal Cadastro alunos

const listaAlunos = document.querySelector('[data-listaAlunos]')

const nomeAluno = document.querySelector('[data-nomeAluno]');
const enderecoAluno = document.querySelector('[data-enderecoAluno]')

const addAlunos = document.querySelector('[data-AddAluno]')
addAlunos.addEventListener('click', () => {
    boxMapa.classList.toggle('z-menos')
    modalCadastro.classList.toggle('display--none');
    modalCadastro.classList.toggle('display--flex');
    let nomeDoAluno = nomeAluno.value;
    let enderecoDoAluno = enderecoAluno.value;

    listaAlunos.innerHTML += `
    <label for="${nomeDoAluno}" class="box__sombra--card">
            <li class="box__alunos--infos box-Shadow">
              <div class="box__alunos--img">

                <img src="./fotos/homem.jpg" class="foto" alt="">

              </div>
              <div class="alunos--infos">
                <span>
                  ${nomeDoAluno}
                </span>
                <span data-Rua>
                 ${enderecoDoAluno}
                </span>

              </div>
              <div>

                <input type="checkbox" name="" id="${nomeDoAluno}" data-Check>
              </div>
            </li>
          </label>
    `
    nomeDoAluno = " ";
    enderecoDoAluno = " ";

});


//const checkbox cards
const checkCard = document.querySelectorAll('[data-cardCheck]')

//zona  filtros 

const botaoFiltroAcesso = document.querySelector('[data-botaoFiltros]');
const campoDosComponentes = document.querySelector('[data-filtosComponentes]')

botaoFiltroAcesso.addEventListener('click', () => {
    campoDosComponentes.classList.toggle('display--none');




})
