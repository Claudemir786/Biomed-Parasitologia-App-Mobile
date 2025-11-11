const TOKEN = "eGv&>V£s}zV_q]#TSx[B520WGP|!~VOpe@~Y8ex)GTok,~867E";
const BASE_URL = "http://localhost:3000/";

const AUTH_HEADER = {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${TOKEN}`
}

// CREATE - Cadastrar novo paciente
export async function CreatePaciente(paciente) {
  try {
    // COM dataNasc
    const dadosParaBackend = {
      nome: paciente.nome,
      dataNasc: paciente.dataNasc, // ← ADICIONADO
      telefone: paciente.telefone,
      pacienteMail: paciente.email,
      nomeMae: paciente.nomeMae,
      medicamento: paciente.medicamento,
      nome_medicamento: paciente.nome_medicamento
    };
    
    console.log("Dados enviados para backend: ", dadosParaBackend);
    
    const res = await fetch(`${BASE_URL}pacientes`, {
      method: "POST",
      headers: AUTH_HEADER,
      body: JSON.stringify(dadosParaBackend)
    });

    if (res.ok) {
      const resultado = await res.json();
      console.log("Paciente cadastrado com sucesso: ", resultado);
      return resultado;
    } else {
      console.error("Erro na resposta da API: ", res.status);
      return false;
    }
    
  } catch (erro) {
    console.error("Erro ao realizar requisição POST Paciente: ", erro);
    return false;
  }
}

// READ - Buscar paciente por ID
export async function ReadPaciente(id) {
  try {
    const res = await fetch(`${BASE_URL}pacientes/${id}`, {
      method: "GET",
      headers: AUTH_HEADER
    });

    if (res.ok) {
      const paciente = await res.json();
      return paciente;
    }
    return false;

  } catch (erro) {
    console.error("Erro ao fazer requisição GET Paciente: ", erro);
    return false;
  }
}

// READ ALL - Buscar todos os pacientes
export async function ReadPacientes() {
  try {
    const res = await fetch(`${BASE_URL}pacientes`, {
      method: "GET",
      headers: AUTH_HEADER
    });

    if (res.ok) {
      const pacientes = await res.json();
      return pacientes;
    }
    return false;

  } catch (erro) {
    console.error("Erro ao fazer requisição GET Pacientes: ", erro);
    return false;
  }
}

// UPDATE - Atualizar paciente
export async function UpdatePaciente(paciente) {
  try {
    console.log("Dados do paciente para atualizar: ", paciente);
    
    const res = await fetch(`${BASE_URL}pacientes/${paciente.id}`, {
      method: "PUT",
      headers: AUTH_HEADER,
      body: JSON.stringify(paciente)
    });

    if (res.ok) {
      console.log("Paciente atualizado com sucesso");
      return true;
    }
    return false;

  } catch (erro) {
    console.error("Erro na requisição PUT Paciente: ", erro);
    return false;
  }
}

// DELETE - Excluir paciente
export async function DeletePaciente(id) {
  try {
    const res = await fetch(`${BASE_URL}pacientes/${id}`, {
      method: "DELETE",
      headers: AUTH_HEADER
    });

    if (res.ok) {
      console.log("Paciente excluído com sucesso");
      return true;
    }
    return false;

  } catch (erro) {
    console.error("Erro ao fazer requisição DELETE Paciente: ", erro);
    return false;
  }
}

// BUSCAR POR NOME - Para a tela de consulta
export async function SearchPacientePorNome(nome) {
  try {
    const res = await fetch(`${BASE_URL}pacientes/search?nome=${encodeURIComponent(nome)}`, {
      method: "GET",
      headers: AUTH_HEADER
    });

    if (res.ok) {
      const pacientes = await res.json();
      return pacientes;
    }
    return [];

  } catch (erro) {
    console.error("Erro ao buscar paciente por nome: ", erro);
    return [];
  }
}