import { defaultSchedule } from './../shared/interface/schedule.interface';
import {defineStore} from "pinia";
import type { scheduleInterface } from "@/shared/interface/schedule.interface";
import { addScheduleService, getScheduleService } from "@/service/schedule.service";
import { defaultUser } from "@/shared/interface/user.interface";


interface ScheduleStoreInterface{
    currentSchedule: scheduleInterface,
}


export const useScheduleStore = defineStore("scheduleStore", {
    state: (): ScheduleStoreInterface => ({
        currentSchedule: defaultSchedule,
    }),
    actions: {
        async getSchedule(){
            this.currentSchedule = await getScheduleService();
        },
        async addSchedule(formValues: scheduleInterface) {
           const response = await addScheduleService(formValues);
           if(response) {
            this.currentSchedule = response;
           }
        }
    },
    getters: {
        schedule: (state) => state.currentSchedule,
    }
})