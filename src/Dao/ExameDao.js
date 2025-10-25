const TOKEN = "eGv&>V£s}zV_q]#TSx[B520WGP|!~VOpe@~Y8ex)GTok,~867E"; //TOKEN que serve como chave na hora de enviar para API(tem que ter o token la na API também)
const BASE_URL = "http://192.168.3.24:3000/"; //URL com ip maquina Claudemir

const AUTH_HEADER = {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${TOKEN}`
}//cabeçalho da requisição 

export async function Create(exame){
  try{
    //Faz os campos de id viararem inteiros 
    exame.paciente = parseInt( exame.paciente)
    exame.aluno = parseInt(exame.aluno);
    exame.professor = parseInt(exame.professor);
    
    //usado para testes
    let dadosFormulario = JSON.stringify(exame);
    console.log("Dados que veio do formulario: ", dadosFormulario);

    //chamando a requisição
    const res = await fetch(`${BASE_URL}exame`,{
      method:"POST",
      headers: AUTH_HEADER,
      body: JSON.stringify(exame)
    });  

    //json que retorna do banco com o estado(sucess) e o id do exame criado
    const id = await res.json();  
      
    return id;
    
  }catch(erro){

    console.error("Erro ao realizar requisição POST: ", erro);
    return false
  }
    
}

export async function Update(){

}

export async function Delete(){

}

export async function Read(){
  console.log("cheguei no Read")
   return "cheguei no read";
}