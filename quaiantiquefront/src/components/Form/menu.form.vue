<script setup lang="ts">
import z from "zod";
import {useField, useForm} from "vee-validate"
import {toFormValidator} from "@vee-validate/zod";
import {useMenuStore} from "@/stores/menu.store";
import type { addMenuInterface } from "@/shared/interface/menu.interface";

const menuStore = useMenuStore()
const initialValues = {
    title: "",
}

const required_error = {required_error : "Veuillez renseigner ce champ"}
const validationSchema = toFormValidator(
    z.object({
        title: z.string(required_error),
    })
)
const {handleSubmit} = useForm({
  validationSchema,
  initialValues
})
const {value : title } = useField("title");


const tryAddMenu = handleSubmit( async (formValues) => {
  try {
    await menuStore.addMenu(formValues as addMenuInterface);
  }catch (e){
    console.log(e)
  }
})
</script>


<template>
<form class="form" @submit="tryAddMenu">
  <h3>Menu</h3>
    <div class="input-control">
      <label for="title" class="input-label">Titre du menu</label>
      <input type="title" v-model="title" name="title" id="title" class="input-field" placeholder=titre>
    </div>
    <button type="submit" class="btn btn-info">Ajouter</button>
  </form>
  </template>
  