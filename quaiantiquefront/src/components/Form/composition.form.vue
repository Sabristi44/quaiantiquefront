<script setup lang="ts">
import z from "zod";
import {useField, useForm} from "vee-validate"
import {toFormValidator} from "@vee-validate/zod";
import {useCompositionStore} from "@/stores/composition.store";
import type { addCompositionInterface } from "@/shared/interface/composition.interface";
import { useMenuStore } from "@/stores/menu.store";

const compositionStore = useCompositionStore()
const menuStore = useMenuStore()

menuStore.getMenues();

const initialValues = {
    price: 0,
    description: "",
    menuId: 1,
}


const required_error = {required_error : "Veuillez renseigner ce champ"}
const validationSchema = toFormValidator(
    z.object({
        price: z.number(required_error),
        description: z.string(required_error),
        menuId: z.number(required_error),
    })
)
const {handleSubmit} = useForm({
  validationSchema,
  initialValues
})

const {value : price } = useField("price");
const {value : description} = useField("description");
const {value : menuId } = useField("menuId");

const tryAddComposition = handleSubmit( async (formValues) => {
  try {
    console.log("fformulaire" + formValues.description);
    await compositionStore.addComposition(formValues as addCompositionInterface);
  }catch (e){
    console.log(e)
  }
})
</script>


<template>
    <form class="form" @submit="tryAddComposition">
        <h3>Formule</h3>
    <div class="input-control">
      <label for="price" class="input-label">Prix : </label>
      <input type="number" v-model="price" name="price" id="price" class="input-field" placeholder=prix>
    </div>
    <div class="input-control">
        <label for="description" class="input-label">Description : </label>
        <input type="text" v-model="description" name="description" id="description" class="input-field" placeholder=description>
      </div>
      <div class="form-group">
        <label for="menuId">Id du menu</label>
        <select class="form-control" v-model="menuId" id="menuId">
          <option v-for="menue in menuStore.menues" v-bind:value="menue.id">{{menue.title}}</option>
        </select>
      </div>
    <button type="submit" class="btn btn-info">Ajouter</button>
  </form>
  </template>
  