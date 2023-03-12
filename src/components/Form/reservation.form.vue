<script setup lang="ts">
import z from "zod";
import {useField, useForm} from "vee-validate"
import {toFormValidator} from "@vee-validate/zod";
import {useScheduleStore} from "@/stores/schedule.store";
import { useReservationStore } from "@/stores/reservation.store";
import type { reservationInterface } from "@/shared/interface/reservation.interface";

const scheduleStore = useScheduleStore()
const reservationStore = useReservationStore()

scheduleStore.getSlots();

const initialValues = {
    allergies: "",
    numPerson: 1,
    mail: "",
    date: new Date("2019-01-16"),  
    hour: new Date("2019-01-16"),  
}

const required_error = {required_error : "Veuillez renseigner ce champ"}
const validationSchema = toFormValidator(
    z.object({
        allergies: z.string(required_error),
        numPerson: z.number(required_error),
        mail: z.string(required_error),
        date: z.any(required_error),
        hour: z.any(required_error),
    })
)
const {handleSubmit} = useForm({
  validationSchema,
  initialValues
})

const {value : allergies } = useField("allergies");
const {value : numPerson} = useField("numPerson");
const {value : mail } = useField("mail");
const {value : date } = useField("date");
const {value : hour } = useField("hour");


const tryAddReservation = handleSubmit( async (formValues) => {
  console.log("ça")
  try {
    await reservationStore.addReservation(formValues as reservationInterface);
  }catch (e){
    console.log(e)
  }
})

</script>

<template>
    <form class="form" @submit="tryAddReservation">
        <h3>Réservation</h3>
        <div class="input-control">
            <label for="mail" class="input-label">Email :  </label>
            <input type="text" v-model="mail" name="mail" id="mail" class="input-field" placeholder=email>
          </div>
    <div class="input-control">
      <label for="allergies" class="input-label">Allergies :  </label>
      <input type="text" v-model="allergies" name="allergies" id="allergies" class="input-field" placeholder=allergies>
    </div>
    <div class="input-control">
        <label for="numPerson" class="input-label">Nombre de personnes :  </label>
        <input type="number" v-model="numPerson" name="numPerson" id="numPerson" class="input-field" placeholder=nombre/personne>
      </div>
      <div class="form-group">
        <label for="date">Date de Réservation</label>
        <select class="form-control" @change="scheduleStore.updateSelectSlot(date as Date)" v-model="date" id="date">
          <option v-for="dateresa in scheduleStore.dayslot" v-bind:value="dateresa">{{dateresa}}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="hour">Heure de Réservation</label>
        <select class="form-control" v-model="hour" id="hour">
          <option v-for="hour in scheduleStore.listOfDaySlot" v-bind:value="hour">{{hour}}</option>
        </select>
      </div>
    <button type="submit" class="btn btn-info ">Réserver</button>
  </form>
  </template>
  