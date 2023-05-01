<script setup lang="ts">
import z from "zod";
import {useField, useForm} from "vee-validate"
import {toFormValidator} from "@vee-validate/zod";
import {useScheduleStore} from "@/stores/schedule.store"
import type { scheduleInterface } from "@/shared/interface/schedule.interface";

const scheduleStore = useScheduleStore()
const initialValues = {
    openingMonday: scheduleStore.$state.currentSchedule.openingMonday,
    closingMonday: scheduleStore.$state.currentSchedule.closingMonday,
    openingTuesday: scheduleStore.$state.currentSchedule.openingTuesday,
    closingTuesday: scheduleStore.$state.currentSchedule.closingTuesday,
    openingWednesday: scheduleStore.$state.currentSchedule.openingWednesday,
    closingWednesday: scheduleStore.$state.currentSchedule.closingWednesday,
    openingThursday: scheduleStore.$state.currentSchedule.openingThursday,
    closingThursday: scheduleStore.$state.currentSchedule.closingThursday,
    openingFriday: scheduleStore.$state.currentSchedule.openingFriday,
    closingFriday: scheduleStore.$state.currentSchedule.closingFriday,
    openingSaturday: scheduleStore.$state.currentSchedule.openingSaturday,
    closingSaturday: scheduleStore.$state.currentSchedule.closingSaturday,
    openingSunday: scheduleStore.$state.currentSchedule.openingSunday,
    closingSunday: scheduleStore.$state.currentSchedule.closingSunday,

}
const timeRegex = RegExp('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$');
const required_error = {required_error : "Veuillez renseigner ce champ"}
const validationSchema = toFormValidator(
    z.object({
        openingMonday: z.string(required_error).regex(timeRegex),
        closingMonday: z.string(required_error).regex(timeRegex),
        openingTuesday: z.string(required_error).regex(timeRegex),
        closingTuesday: z.string(required_error).regex(timeRegex),
        openingWednesday:  z.string(required_error).regex(timeRegex),
        closingWednesday: z.string(required_error).regex(timeRegex),
        openingThursday: z.string(required_error).regex(timeRegex),
        closingThursday: z.string(required_error).regex(timeRegex),
        openingFriday: z.string(required_error).regex(timeRegex),
        closingFriday: z.string(required_error).regex(timeRegex),
        openingSaturday: z.string(required_error).regex(timeRegex),
        closingSaturday: z.string(required_error).regex(timeRegex),
        openingSunday: z.string(required_error).regex(timeRegex),
        closingSunday: z.string(required_error).regex(timeRegex),
    })
)
const {handleSubmit} = useForm({
  validationSchema,
  initialValues
})
const {value : openingMonday } = useField("openingMonday");
const {value : closingMonday } = useField("closingMonday");
const {value : openingTuesday } = useField("openingTuesday");
const {value : closingTuesday } = useField("closingTuesday");
const {value : openingWednesday } = useField("openingWednesday");
const {value : closingWednesday } = useField("closingWednesday");
const {value : openingThursday } = useField("openingThursday");
const {value : closingThursday } = useField("closingThursday");
const {value : openingFriday } = useField("openingFriday");
const {value : closingFriday } = useField("closingFriday");
const {value : openingSaturday } = useField("openingSaturday");
const {value : closingSaturday } = useField("closingSaturday");
const {value : openingSunday } = useField("openingSunday");
const {value : closingSunday } = useField("closingSunday");

const tryAddSchedule = handleSubmit( async (formValues) => {
  try {
    await scheduleStore.addSchedule(formValues as scheduleInterface);
  }catch (e){
    console.log(e)
  }
})
</script>


<template>
  <h2>Horaires d'ouverture</h2>
  <div class="container">
<form
      class="form"

      @submit="tryAddSchedule"
  >
    <div class="input-control">
      <label for="openingMonday" class="input-label">Ouverture Lundi</label>
      <input type="openingMonday" v-model="openingMonday" name="openingMonday" id="openingMonday" class="input-field" placeholder={{initialValues.openingMonday}}>
    </div>
    <div class="input-control">
        <label for="closingMonday" class="input-label">Fermeture Lundi</label>
        <input type="closingMonday" v-model="closingMonday" name="closingMonday" id="closingMonday" class="input-field" placeholder={{initialValues.closingMonday}}>
      </div>
      <div class="input-control">
        <label for="openingTuesday" class="input-label">Ouverture Mardi</label>
        <input type="openingTuesday" v-model="openingTuesday" name="openingTuesday" id="openingTuesday" class="input-field" placeholder={{initialValues.openingTuesday}}>
      </div>
      <div class="input-control">
        <label for="closingTuesday" class="input-label">Fermeture Mardi</label>
        <input type="closingTuesday" v-model="closingTuesday" name="closingTuesday" id="closingTuesday" class="input-field" placeholder={{initialValues.closingTuesday}}>
      </div>
      <div class="input-control">
        <label for="openingWednesday" class="input-label">Ouverture Mercredi</label>
        <input type="openingWednesday" v-model="openingWednesday" name="openingWednesday" id="openingWednesday" class="input-field" placeholder={{initialValues.openingWednesday}}>
      </div>
      <div class="input-control">
        <label for="closingWednesday" class="input-label">Fermeture Mercredi</label>
        <input type="closingWednesday" v-model="closingWednesday" name="closingMonday" id="closingMonday" class="input-field" placeholder={{initialValues.closingWednesday}}>
      </div>
      <div class="input-control">
        <label for="openingThursday" class="input-label">Ouverture Jeudi</label>
        <input type="openingThursday" v-model="openingThursday" name="openingThursday" id="openingThursday" class="input-field" placeholder={{initialValues.openingThursday}}>
      </div>
      <div class="input-control">
        <label for="closingThursday" class="input-label">Fermeture Jeudi</label>
        <input type="closingThursday" v-model="closingThursday" name="closingThursday" id="closingThursday" class="input-field" placeholder={{initialValues.closingThursday}}>
      </div>
      <div class="input-control">
        <label for="openingFriday" class="input-label">Ouverture Vendredi</label>
        <input type="openingFriday" v-model="openingFriday" name="openingFriday" id="openingFriday" class="input-field" placeholder={{initialValues.openingFriday}}>
      </div>
      <div class="input-control">
        <label for="closingFriday" class="input-label">Fermeture Vendredi</label>
        <input type="closingFriday" v-model="closingFriday" name="closingFriday" id="closingFriday" class="input-field" placeholder={{initialValues.closingFriday}}>
      </div>
      <div class="input-control">
        <label for="openingSaturday" class="input-label">Ouverture Samedi</label>
        <input type="openingSaturday" v-model="openingSaturday" name="openingSaturday" id="openingSaturday" class="input-field" placeholder={{initialValues.openingSaturday}}>
      </div>
      <div class="input-control">
        <label for="closingSaturday" class="input-label">Fermeture Samedi</label>
        <input type="closingSaturday" v-model="closingSaturday" name="closingSaturday" id="closingSaturday" class="input-field" placeholder={{initialValues.ClosingSaturday}}>
      </div>
      <div class="input-control">
        <label for="openingSunday" class="input-label">Ouverture Dimanche</label>
        <input type="openingSunday" v-model="openingSunday" name="openingSunday" id="openingSunday" class="input-field" placeholder={{initialValues.openingSunday}}>
      </div>
      <div class="input-control">
        <label for="closingSunday" class="input-label" >Fermeture dimanche</label>
        <input type="closingSunday" v-model="closingSunday" name="closingSunday" id="closingSunday" class="input-field" placeholder=initialValues.openingSunday>
      </div>
    <div class="input-control">
      <input type="submit" class="input-submit" value="Envoyer">
    </div>
  </form>
</div>
  </template>
  