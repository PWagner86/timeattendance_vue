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
                <Button icon="pi pi-trash" outlined rounded severity="danger" @click="deletePerson(slotProps.data)" />
            </template>
        </Column>
        <template #footer>Insgesamt gibt es XY Benutzer</template>
    </DataTable>
</template>

<script setup lang="ts">
import type { Person } from '@/types/Person';
import { ref } from 'vue';

const persons = ref<Person[]>([]);
persons.value.push({id: 0, username: "Test", fullName: "Test User", role: "user", password: "password"});

const editPerson = (p: Person) => {

}

const deletePerson = (p: Person) => {
    persons.value.splice(persons.value.indexOf(p), 1);
}
</script>