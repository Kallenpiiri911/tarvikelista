const vettaSataa = document.getElementById("vettaSataa");
const normaaliKeli = document.getElementById("normaaliKeli");

const nollaYo = document.getElementById("nollaYo");
const yksiYo = document.getElementById("yksiYo");

const eiLaavua = document.getElementById("eiLaavua");
const kyllaLaavu = document.getElementById("kyllaLaavu");
const ehkaLaavu = document.getElementById("ehkaLaavu");

const eiNuotio = document.getElementById("eiNuotio");
const kyllaNuotio = document.getElementById("kyllaNuotio");

function annaLista() {
  if (vettaSataa.checked) {
    document.getElementById("sadeVaatteet").style.color = "green";
    document.getElementById("rinkanSadesuoja").style.color = "green";
    document.getElementById("desinfiointi").style.color = "green";
    document.getElementById("laastari").style.color = "green";
    document.getElementById("side").style.color = "green";
    document.getElementById("sarkuLaake").style.color = "green";
    document.getElementById("hammasTahna").style.color = "green";
    document.getElementById("bebanthen").style.color = "green";
    document.getElementById("laakkeet").style.color = "green";
  }
  if (normaaliKeli.checked) {
    document.getElementById("sadeVaatteet").style.color = "red";
    document.getElementById("rinkanSadesuoja").style.color = "red";
    document.getElementById("desinfiointi").style.color = "green";
    document.getElementById("laastari").style.color = "green";
    document.getElementById("side").style.color = "green";
    document.getElementById("sarkuLaake").style.color = "green";
    document.getElementById("hammasTahna").style.color = "green";
    document.getElementById("bebanthen").style.color = "green";
    document.getElementById("laakkeet").style.color = "green";
  }
  if (nollaYo.checked) {
    document.getElementById("teltta").style.color = "red";
    document.getElementById("makuuPussi").style.color = "red";
    document.getElementById("makuuAlusta").style.color = "red";
  }
  if (yksiYo.checked) {
    document.getElementById("teltta").style.color = "yellow";
    document.getElementById("makuuPussi").style.color = "green";
    document.getElementById("makuuAlusta").style.color = "green";
    document.getElementById("vara-akku").style.color = "green";
    document.getElementById("taskuLamppu").style.color = "green";
  }
  if (eiLaavua.checked) {
    document.getElementById("teltta").style.color = "yellow";
    document.getElementById("makuuPussi").style.color = "yellow";
    document.getElementById("makuuAlusta").style.color = "yellow";
    if (yksiYo.checked) {
        document.getElementById("teltta").style.color = "green";
        document.getElementById("makuuPussi").style.color = "green";
        document.getElementById("makuuAlusta").style.color = "green";
        document.getElementById("vara-akku").style.color = "green";
        document.getElementById("taskuLamppu").style.color = "green";
    }
    if (nollaYo.checked) {
        document.getElementById("teltta").style.color = "red";
        document.getElementById("makuuPussi").style.color = "red";
        document.getElementById("makuuAlusta").style.color = "red";
    }
  }
  if (kyllaLaavu.checked) {
    document.getElementById("teltta").style.color = "red";
    document.getElementById("makuuPussi").style.color = "yellow";
    document.getElementById("makuuAlusta").style.color = "yellow";
    if (yksiYo.checked) {
        document.getElementById("teltta").style.color = "red";
        document.getElementById("makuuPussi").style.color = "green";
        document.getElementById("makuuAlusta").style.color = "green";
        document.getElementById("vara-akku").style.color = "green";
        document.getElementById("taskuLamppu").style.color = "green";
    }
    if (nollaYo.checked) {
        document.getElementById("teltta").style.color = "red";
        document.getElementById("makuuPussi").style.color = "red";
        document.getElementById("makuuAlusta").style.color = "red";
    }
  }
  if (ehkaLaavu.checked) {
    document.getElementById("teltta").style.color = "yellow";
    document.getElementById("makuuPussi").style.color = "yellow";
    document.getElementById("makuuAlusta").style.color = "yellow";
    if (yksiYo.checked) {
        document.getElementById("teltta").style.color = "green";
        document.getElementById("makuuPussi").style.color = "green";
        document.getElementById("makuuAlusta").style.color = "green";
        document.getElementById("vara-akku").style.color = "green";
        document.getElementById("taskuLamppu").style.color = "green";
    }
    if (nollaYo.checked) {
        document.getElementById("teltta").style.color = "red";
        document.getElementById("makuuPussi").style.color = "red";
        document.getElementById("makuuAlusta").style.color = "red";
    }
  }
  if (eiNuotio.checked) {
    document.getElementById("tuliTikku").style.color = "yellow";
    document.getElementById("sytyke").style.color = "yellow";
    document.getElementById("tulukset").style.color = "yellow";
    document.getElementById("aterimet").style.color = "yellow";
    document.getElementById("ruokaAstia").style.color = "yellow";
    document.getElementById("kirves").style.color = "yellow";
    document.getElementById("puukko").style.color = "yellow";
    document.getElementById("trangia").style.color = "yellow";
    document.getElementById("sinol").style.color = "yellow";
    if (yksiYo.checked) {
        document.getElementById("tuliTikku").style.color = "green";
        document.getElementById("sytyke").style.color = "green";
        document.getElementById("tulukset").style.color = "green";
        document.getElementById("aterimet").style.color = "green";
        document.getElementById("ruokaAstia").style.color = "green";
        document.getElementById("kirves").style.color = "yellow";
        document.getElementById("puukko").style.color = "yellow";
        document.getElementById("trangia").style.color = "green";
        document.getElementById("sinol").style.color = "green";
    }
    if (nollaYo.checked) {
        document.getElementById("tuliTikku").style.color = "yellow";
        document.getElementById("sytyke").style.color = "yellow";
        document.getElementById("tulukset").style.color = "yellow";
        document.getElementById("aterimet").style.color = "yellow";
        document.getElementById("ruokaAstia").style.color = "yellow";
        document.getElementById("kirves").style.color = "red";
        document.getElementById("puukko").style.color = "red";
        document.getElementById("trangia").style.color = "yellow";
        document.getElementById("sinol").style.color = "yellow";
    }
  }
  if (kyllaNuotio.checked) {
    document.getElementById("tuliTikku").style.color = "yellow";
    document.getElementById("sytyke").style.color = "yellow";
    document.getElementById("tulukset").style.color = "yellow";
    document.getElementById("aterimet").style.color = "yellow";
    document.getElementById("ruokaAstia").style.color = "yellow";
    document.getElementById("kirves").style.color = "yellow";
    document.getElementById("puukko").style.color = "yellow";
    document.getElementById("trangia").style.color = "yellow";
    document.getElementById("sinol").style.color = "yellow";
    if (yksiYo.checked) {
        document.getElementById("tuliTikku").style.color = "green";
        document.getElementById("sytyke").style.color = "green";
        document.getElementById("tulukset").style.color = "green";
        document.getElementById("aterimet").style.color = "green";
        document.getElementById("ruokaAstia").style.color = "green";
        document.getElementById("kirves").style.color = "green";
        document.getElementById("puukko").style.color = "green";
        document.getElementById("trangia").style.color = "yellow";
        document.getElementById("sinol").style.color = "yellow";
    }
    if (nollaYo.checked) {
        document.getElementById("tuliTikku").style.color = "yellow";
        document.getElementById("sytyke").style.color = "yellow";
        document.getElementById("tulukset").style.color = "yellow";
        document.getElementById("aterimet").style.color = "yellow";
        document.getElementById("ruokaAstia").style.color = "yellow";
        document.getElementById("kirves").style.color = "yellow";
        document.getElementById("puukko").style.color = "yellow";
        document.getElementById("trangia").style.color = "yellow";
        document.getElementById("sinol").style.color = "yellow";
    }
  }
}