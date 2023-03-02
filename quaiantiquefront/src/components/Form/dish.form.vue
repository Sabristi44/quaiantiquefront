<script setup lang="ts">
import z from "zod";
import {useForm, useField } from "vee-validate"
import {toFormValidator} from "@vee-validate/zod";
import {useDishStore} from "@/stores/dish.store"
import type { addDishInterface } from "@/shared/interface/dish.interface";

const dishStore = useDishStore()
const initialValues = {
  title: "",
  description: "",
  price: 0,
  category: "Plat",
}
const required_error = {required_error : "Veuillez renseigner ce champ"}
const validationSchema = toFormValidator(
    z.object({
      title : z.string(required_error),
      description : z.string(required_error),
      price : z.number(required_error),
      category: z.string(required_error),
    })
)
const {handleSubmit} = useForm({
  validationSchema,
  initialValues
})

const {value : title} = useField("title")
const {value : description} = useField("description")
const {value : price} = useField("price")
const {value : category} = useField("category")


const addDish = handleSubmit( async (formValues) => {
  try {
    await dishStore.addDish(formValues as addDishInterface);
  }catch (e){
    console.log(e)
  }
})
</script>


<template> 
  <div class="container">
<form @submit=addDish>
    <div class="form-group">
      <label for="title">Nom</label>
      <input type="text"  v-model="title" class="form-control" id="title" placeholder="Nom">
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <input type="text" v-model="description" class="form-control" id="description" placeholder="Description">
    </div>
    <div class="form-group">
      <label for="price">Prix</label>
      <input type="number" v-model="price" class="form-control" id="prix" placeholder="prix">
    </div>
    <div class="form-group">
      <label for="category">Categorie</label>
      <select class="form-control" v-model="category" id="category">
        <option>Entrée</option>
        <option>Plat</option>
        <option>Dessert</option>
      </select>
    </div>
    <button type="submit" class="btn btn-info">Ajouter</button>
  </form>
  </div>
</template>