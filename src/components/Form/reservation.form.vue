<script setup lang="ts">
import z, { boolean } from "zod";
import {useField, useForm} from "vee-validate"
import {toFormValidator} from "@vee-validate/zod";
import {useScheduleStore} from "@/stores/schedule.store";
import { useReservationStore } from "@/stores/reservation.store";
import type { reservationInterface } from "@/shared/interface/reservation.interface";
import { useRouter } from "vue-router";

const router = useRouter();

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
        mail: z.string(required_error).email(),
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
  try {
    await reservationStore.addReservation(formValues as reservationInterface);
    if(mail)
  	if(localStorage.getItem("user") != null){
      await router.push("/secure");
    } else {
    await router.push('/')
    }
  }catch (e){
    console.log(e)
  }
})

</script>

<template>
  <div class="form-group padding-footer">
    <div class="form-sub-group">
    <form class="form" @submit="tryAddReservation">
        <div class="input-control py-1">
            <label for="mail" class="input-label">Email</label>
            <input type="text" v-model="mail" name="mail" id="mail" class="input-field input-sm" placeholder=email>
          </div>
    <div class="input-control">
      <label for="allergies" class="input-label">Allergies</label>
      <input type="text" v-model="allergies" name="allergies" id="allergies" class="input-field" placeholder=allergies>
    </div>
    <div class="input-control">
        <label for="numPerson" class="input-label">Nombre de personnes</label>
        <input type="number" v-model="numPerson" name="numPerson" id="numPerson" class="input-field" placeholder=nombre/personne>
      </div>
      <div class="input-control">
        <label for="date" class="input-label">Date de Réservation</label>
        <select class="form-control" @change="scheduleStore.updateSelectSlot(date as Date)" v-model="date" id="date">
          <option v-for="dateresa in scheduleStore.dayslot" v-bind:value="dateresa">{{dateresa}}</option>
        </select>
      </div>
      <div class="input-control">
        <label for="hour" class="input-label">Heure de Réservation</label>
        <select class="form-control" v-model="hour" id="hour">
          <option v-for="hour in scheduleStore.listOfDaySlot" v-bind:value="hour">{{hour}}</option>
        </select>
      </div>
    <button type="submit" class="btn btn-info ">Réserver</button>

  </form>
</div>
  </div>
  </template>

  <style>


  .form-group {
    width: 70%;
    margin: auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-bottom: 2em;
}
.form-sub-group{
  margin:  auto;
  width: auto;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
}
.form {
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
}

.padding-footer {
  padding-bottom: 10em;
}

.form-input {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  place-items: center left;
  -webkit-box-align: center;
  margin: 20px 0px;
}
.input-label {
  padding-right: 5rem;
}
</style>
  