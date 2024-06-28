<template>
    <h2>PersonView</h2>
    <DataTable :value="persons" table-style="min-width: 50rem;">
        <template #header>

        </template>
        <Column field="fullName" header="Name" />
        <Column field="username" header="Benutzername" />
        <Column field="role" header="Rolle" />
        <Column field="password" header="Passwort" />
        <Column style="min-width: 8rem;">
            <template #body="slotProps">
                <Button icon="pi pi-pencil" outlined rounded class="mr-2" @click="editPerson(slotProps.data)" />
                <Button icon="pi pi-trash" outlined rounded severity="danger" @click="deleteEntry(slotProps.data)" />
            </template>
        </Column>
        <template #footer>Insgesamt gibt es {{ persons.length }} Benutzer</template>
    </DataTable>
</template>

<script setup lang="ts">
import { getAllPerson, deletePerson } from '@/composables/usePerson';
import type { Person } from '@/types/Person';
import { ref, onMounted } from 'vue';

const persons = ref<Person[]>([]);


onMounted(() => {
    getAllPerson(persons);
    // .then(res => res.json())
    // .then(data => persons.value = data)
    // .catch(err => console.log(err))
})


const editPerson = (p: Person) => {

}

const deleteEntry = (p: Person) => {
    deletePerson(p.id)
    persons.value.splice(persons.value.indexOf(p), 1);
}
</script>