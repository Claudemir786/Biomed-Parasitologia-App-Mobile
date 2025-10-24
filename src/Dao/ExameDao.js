const TOKEN = "eGv&>V£s}zV_q]#TSx[B520WGP|!~VOpe@~Y8ex)GTok,~867E"; //TOKEN que serve como chave na hora de enviar para API(tem que ter o token la na API também)
const BASE_URL = "http://192.168.3.24:3000/"; //URL com ip maquina Claudemir

const AUTH_HEADER = {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${TOKEN}`
}//cabeçalho da requisição 

export async function Create(exame){
    console.log("cheguei aqui ", exame);
}

export async function Update(){

}

export async function Delete(){

}

export async function Read(){

}