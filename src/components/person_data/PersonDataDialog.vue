<template>
    <Dialog :visible="visible" :modal="true" header="Benutzer bearbeiten">
        <div class="field">
            <label>Personen ID: <b>{{ person.id }}</b></label>
        </div>
        <div class="field">
            <label for="fullName">Name</label>
            <InputText id="fullName" v-model="person.fullName"></InputText>
        </div>
        <div class="field">
            <label for="username">Benutzername</label>
            <InputText id="username" v-model="person.username"/>
        </div>
        <div class="field">
            <label for="password">Passwort</label>
            <InputText id="passwortd" v-model="person.password"/>
        </div>
        <div class="field">
            <label for="role">Rolle</label>
            <InputText id="role" v-model="person.role"/>
        </div>
        <template #footer>
            <Button label="Abbrechen" icon="pi pi-times" @click="hideDialog"></Button>
            <Button label="Speichern" icon="pi pi-check" @click="savePerson"></Button>
        </template>
    </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Person } from "@/types/Person";


const person = ref<Person>({id: '', username: '', fullName: '', role: '', password: ''});

defineProps({
    visible: {
        type: Boolean,
        required: true
    }
})

const emit = defineEmits([
    'hideDialog'
])

const hideDialog = () => {
    emit("hideDialog")
}
</script>