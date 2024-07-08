export type User = {
    id: number,
    name: string,
    residence: string,
    email: string,
    password: string,
    age: number,
    weight: number,
    height: number,
    activity: string,
    image: string,
    kcal: number,
    new_password: string,
    current_password: string,  
    auth: boolean 
}

export type Nutritionist = {
    id: number,
    name: string,
    residence: string,
    email: string,
    image: string,
    phone: number,
    description: string
}