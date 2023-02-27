// import React from "react";
// import { API_URL, USER_GET, TOKEN_POST, TOKEN_VALIDATE_POST } from "../src/services/api.js";
// import { useNavigate } from "react-router-dom";

// export const UserContext = React.createContext();

// export const UserStorage = ({ children }) => {
//   const [data, setData] = React.useState(null);
//   const [login, setLogin] = React.useState(null);
//   const [loading, setLoading] = React.useState(null);
//   
//   const [error, setError] = React.useState(null);
//   const navigate = useNavigate();

//   const userLogout = React.useCallback(
//     async function () {
//       setData(null);
//       setError(null);
//       setLoading(false);
//       setLogin(false);
//       window.localStorage.removeItem("token");
//       navigate("/");
//     },
//     [navigate]
//   );

//   async function getUser(token) {
//     const { options } = USER_GET(token);
//     const response = await API_URL.get("usuario",options);
//     const json = await response;

//     setData(json);
//     setLogin(true);
//   }

//   async function userLogin(cd_email, password) {
//     try {
//       setError(null);
//       setLoading(true);
//       const { options } = TOKEN_POST({ cd_email, password });

//       const tokenRes = await API_URL.post("autenticador", options);
//       if (tokenRes.statusText !== "OK") throw new Error(`Error: Usuário ou senha inválido.`);

//       const { token } =  await tokenRes.data;
//       window.localStorage.setItem("token", token);

//       await getUser(token);
//       navigate("/dashboard");
//     } catch (err) {
//       setError(err.message);
//       setLogin(false);
//     } finally {
//       setLoading(false);
//     }
//   }

//   async function listUsers() {
//     try {
//       const token = window.localStorage.getItem("token");
//       console.log("MEU TOKEN: ", token)
//       if(token){
//         const response = await API_URL.get("usuario");
//         setUsers(response)
//       }
//     } catch (err) {
      
//     }
//   }

//   React.useEffect(() => {
//     async function autoLogin() {
//       const token = window.localStorage.getItem("token");

//       if (token) {
//         try {
//           setError(null);
//           setLoading(true);
//           const { options } = TOKEN_VALIDATE_POST(token);
//           const response = await API_URL.post("autenticador", options);
//           if (!response.statusText !== "OK") throw new Error("Token inválido.");
//           await getUser(token);
//         } catch (err) {
//           userLogout();
//         } finally {
//           setLoading(false);
//         }
//       } else {
//         setLogin(false);
//       }
//     }

//     // autoLogin();
//   }, [userLogout]);



//   return (
//     <UserContext.Provider
//       value={{ userLogin, userLogout, data, error, loading, login, listUsers }}
//     >
//       {children}
//     </UserContext.Provider>
//   );
// };
