import { redirect } from "next/navigation";

const API_URL = "http://localhost:8080/accounts";


export async function createAccount(initialState: any, formData: FormData) {
    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        phone: formData.get("phone")
    };
    console.log("Sending data:", data);  // Verificando o que está sendo enviado
    
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    console.log("Sending data:", data);  // Verificando o que está sendo enviado
    const response = await fetch(API_URL, options);
    
    if (!response.ok) {
        const errors = await response.json();
        console.log("Errors received:", errors);  // Logando os erros recebidos da API
        return {
            values: {
                name: formData.get("name"),
                email: formData.get("email"),
                password: formData.get("password"),
                phone: formData.get("phone")

            },
            errors: {
                name: errors.find(e => e.field === "name")?.message,
                email: errors.find(e => e.field === "email")?.message,
                password: errors.find(e => e.field === "password")?.message,
                phone: errors.find(e => e.field === "phone")?.message

            }
        };
    }
     const createdAccount = await response.json();
    
     if (typeof window !== 'undefined') {
         localStorage.removeItem('account');
         localStorage.setItem('account', JSON.stringify(createdAccount));
     }
    
    redirect("/Reservation");
}

export async function loginAccount(initialState: any, formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const options={
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  };
  const response = await fetch(`${API_URL}/login`, options);
  console.log(response);
  if (!response.ok) {
    // Se a resposta for um erro de autenticação (usuário ou senha errados)
    const error = await response.json();
    return {
      values: { 
        email:formData.get('email'),
        password:formData.get('password') 
      },
      errors: {
        email:error.find(e => e.field === "email")?.message,
        password:error.find(e => e.field === "password")?.message,
      },
    };
  }

    const account = await response.json();

    if (typeof window !== 'undefined') {
      sessionStorage.setItem('account', JSON.stringify(account));
    }

    redirect("/");
}
