<script setup lang="ts">
import z from "zod";
import {useForm, useField } from "vee-validate";
import {toFormValidator} from "@vee-validate/zod";
import {useImageStore} from "@/stores/image.store";

const imageStore = useImageStore();

const initialValues = {
    file: File,
}

const required_error = {required_error : "Veuillez renseigner ce champ"}
const validationSchema = toFormValidator(
    z.object({
        file: z.record(z.string()),
    })
)
const {handleSubmit} = useForm({
  validationSchema,
  initialValues
})
const {value : file } = useField("file");


const submitFile = handleSubmit( async (formValues) => {
    try {
    await imageStore.addImage(formValues as unknown as File);
  }catch (e){
    console.log(e)
  } 
})

</script>


<template> 
  <div class="container">
<form ref="uploadForm" @submit=submitFile>
   <input type="file" ref="fileInput"  class="form-control" required/>
   <button type="submit" class="btn btn-info">Ajouter</button>
  </form>
  </div>
</template>