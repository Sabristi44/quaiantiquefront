<script setup lang="ts">
import z from "zod";
import {useForm, useField } from "vee-validate"
import {toFormValidator} from "@vee-validate/zod";
import {useUserStore} from "@/stores/user.store"
import type { UserAllergies } from "@/shared/interface/user.interface";
import router from "@/router";


const userStore = useUserStore()
const initialValues = {
allergies: userStore.currentUser.allergies,
}

const validationSchema = toFormValidator(
    z.object({
      allergies : z.string(),
    })
)
const {handleSubmit} = useForm({
  validationSchema,
  initialValues
})

const {value : allergies} = useField("allergies")


const addAllergies = handleSubmit( async (formValues) => {
  try {
userStore.updateAllergies(formValues as UserAllergies)
if(userStore.currentUser.allergies != null) {
router.push('/secure');
}
  }catch (e){
    console.log(e)
  }
})
</script>


<template> 
  <div class="container">
<form @submit=addAllergies>
    <div class="form-group">
      <h3 class="mb-5">Indiquer mes allergies</h3>
      <input type="textarea" v-model="allergies" class="form-control" id="allergies" placeholder="allergies">
    </div>
    <button type="submit" class="btn btn-info mt-5">Ajouter</button>
  </form>
  </div>
</template>