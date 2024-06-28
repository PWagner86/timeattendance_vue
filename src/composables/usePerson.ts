import type { Person } from "@/types/Person";
import type { Ref } from "vue";

const serverUrl: string = 'http://localhost:3000';
const baseUrl: string = `${serverUrl}/users`;

// export async function getAllPerson(p: any): Promise<Response> {
//     // return await fetch(baseUrl);
// }

export async function getAllPerson(p: Ref<Person[]>) {
    try {
        const json = await fetch(baseUrl);
        const data = await json.json();
        p.value = data;
    }
    catch(err){
        console.log(err);
    } 
}

export async function deletePerson(personId: string): Promise<Response> {
    return await fetch(`${baseUrl}/${personId}`, {method: 'DELETE'});
}