import axios from 'axios';

// export const api = axios.create({
//   baseURL: 'http://localhost:21002/',
// });

export const api = axios.create({
  baseURL: 'http://localhost:21002',
});

// Solicita o token do usuario após autenticação
// export function TOKEN_POST(body) {
//   return {
//     options: {
//       Headers: {
//         "Content-Type": "application/json",
//       },
//       cd_email: body.cd_email,
//       password: body.password
//     },
//   };
// }

// Verifica se o token é valido
// export function TOKEN_VALIDATE_POST(token) {
//   return {
//     options: {
//       Headers: {
//         Authorization: "Bearer " + token,
//       },
//     },
//   };
// }

// Solicita os dados do usuário após informar o token
// export function USER_GET(token) {
//   return {
//     options: {
//       Headers: {
//         Authorization: "Bearer " + token,
//       },
//     },
//   };
// }


// export function PASSWORD_LOST(body) {
//   return {
//     url: API_URL + '/api/password/lost',
//     options: {
//       method: 'POST',
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(body)
//     }
//   }
// }

// export function PASSWORD_RESET(body) {
//   return {
//     url: API_URL + '/api/password/reset',
//     options: {
//       method: 'POST',
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(body)
//     }
//   }
// }

// Lista Usuarios
// export function LIST_USERS(body) {
//   return {
//     url: API_URL,
//     options: {
//       method: 'GET',
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(body)
//     }
//   }
// }