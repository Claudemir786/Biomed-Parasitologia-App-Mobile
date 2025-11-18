const TOKEN = "eGv&>V£s}zV_q]#TSx[B520WGP|!~VOpe@~Y8ex)GTok,~867E"; //TOKEN que serve como chave na hora de enviar para API(tem que ter o token la na API também)
const BASE_URL = "http://localhost:3000/"; //URL com ip maquina Claudemir

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
    //let dadosFormulario = JSON.stringify(exame);
    //console.log("Dados que veio do formulario: ", dadosFormulario);

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

export async function Update(exame){
  try{
  
   //Faz os campos de id viararem inteiros 
    exame.paciente = parseInt( exame.paciente)
    exame.aluno = parseInt(exame.aluno);
    exame.professor = parseInt(exame.professor);
    console.log("dados do exame enviados: ", exame);
    const res = await fetch(`${BASE_URL}exame`,{
      method: "PUT",
      headers: AUTH_HEADER,
      body: JSON.stringify(exame)
    });
    if(res.ok){
      console.log("Deu certo a requisição");
      const id = await res.json();
      
      return true;
    }

return false
  }catch(erro){
    console.error("erro na requisição PUT:, ", erro);
  }
}

export async function Delete(id){
  try{
    console.log("Id do exame: ", id);
    
    const res = await fetch(`${BASE_URL}exame/${id}`,{
      method:"DELETE",
      headers: AUTH_HEADER
    });

    //se retornar status de sucesso//
    if(res.ok){
      console.log("Exame excluido com sucesso");
      return true;
    }
      return false;
    

  }catch(erro){
    console.error("Erro ao fazer a requisição DELETE: ", erro);
    return false;
  }

}

export async function Read(id){
 try{

    const res = await fetch(`${BASE_URL}exame/${id}`,{
      method: "GET",
      headers: AUTH_HEADER
    });

    if(res.ok){
      //console.log("conteudo do response: ", res);
      const exame = await res.json();

      return exame;
    }
    return false;
  

 }catch(erro){
  console.error("Erro ao fazer a requisição GETID: ", erro);
  return false;
 }
}

export async function ReadpacienteId(id){
  try{
    const res = await fetch(`${BASE_URL}pacientes/${id}`,{
      method: "GET",
      headers: AUTH_HEADER
    });
     //console.log("conteudo do response paciente id: ", res);
     if(res.ok){
       const paciente = await res.json();
       
       return paciente;

     }
    return false

  }catch(erro){
    console.error("Erro ao fazer requisição GET PACIENTEID: ", erro);
    return false
  }

}

export async function ReadProfessorId(id){
  try{

    const res = await fetch(`${BASE_URL}professor/${id}`, {
      method: 'GET',
      headers:AUTH_HEADER
    });

    if(res.ok){
      const professor = await res.json();
      return professor;
    }
    return false;

  }catch(erro){
    console.error("Erro a fazer a requisição PROFESSSORID: ", erro);
    return false;
  }
}

export async function ReadAlunoId(id){
  try{
    const res = await fetch(`${BASE_URL}aluno/${id}`,{ 
      method: "GET",
      headers: AUTH_HEADER
  })

  if(res.ok){
    const aluno = res.json();
    return aluno;
  }
  return false;

  }catch(erro){
    console.log("Erro ao fazer a requisição ALUNOID: ", erro);
    return false;
  }
}

export async function ReadPacientes(){

  try{
  //chamando a requisição
  //console.log("chegeui na função Dao front ")
  const res = await fetch(`${BASE_URL}pacientes`,{
    method:"GET",
    headers: AUTH_HEADER  
  });

  if(res.ok){
  //console.log("conteudo do response: ", res);
  const pacientes = await res.json();

  return pacientes;
  }
  }catch(erro){
    console.error("Erro ao fazer a requisição GET Pacientes: ", erro);
    return false;
  }

  

}



export async function ReadAlunos(){
  try{
     //chamando a requisição
    //console.log("chegeui na função Dao front ")
    const res = await fetch(`${BASE_URL}alunos`, {
      method:"GET",
      headers: AUTH_HEADER 
    });
    if(res.ok){
      //console.log("Conteudo do response: ", res);
      const alunos = await res.json();
      return alunos;
    }
    return false;

  }catch(erro){
    console.error("Erro ao fazer requisição GET alunos: ", erro);
    return false;
  }
}

export async function ReadProfessores(){
  try{
     //chamando a requisição
    //console.log("chegeui na função Dao front ")
    const res = await fetch(`${BASE_URL}professores`, {
      method:"GET",
      headers: AUTH_HEADER
    });
    if(res.ok){
//console.log("conteudo retornado do response: ", res);
    const professores = await res.json();
    return professores;

    }
    return false;    

  }catch(erro){
      console.log("Erro ao fazer requisição GET professores: ", erro);
      return false;
  }
}
