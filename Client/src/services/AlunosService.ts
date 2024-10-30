import axios from 'axios';

const URL_API = "http://localhost:8080/alunos";

export async function fetchAlunos() {
    try {
        const response = await axios.get(URL_API);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar alunos:', error);
        throw error;
    }
}

// export async function createAluno(aluno: { nome: string; idade: number }) {
//     try {
//         const response = await axios.post('https://api.exemplo.com/alunos', aluno);
//         return response.data;
//     } catch (error) {
//         console.error('Erro ao criar aluno:', error);
//         throw error;
//     }
// }