import type { slotInterface } from './../shared/interface/slot.interface';
import { defaultSchedule } from './../shared/interface/schedule.interface';
import {defineStore} from "pinia";
import type { scheduleInterface } from "@/shared/interface/schedule.interface";
import { addScheduleService, getBookingSlotService, getScheduleService } from "@/service/schedule.service";


interface ScheduleStoreInterface{
    currentSchedule: scheduleInterface,
    slot: slotInterface[],
    day: Date[],
    selectedDate: Date[],
}


export const useScheduleStore = defineStore("scheduleStore", {
    state: (): ScheduleStoreInterface => ({
        currentSchedule: defaultSchedule,
        slot: [],
        day:[],
        selectedDate: [],
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
        },
        async getSlots() {
            const response = await getBookingSlotService();
            if(response) {
                this.slot = response;
                response.map((slot) => this.day.push(slot.day));
            }
        }, updateSelectSlot(selecteDate: Date) {
            const indexSlots = (slots: slotInterface) => slots.day === selecteDate;
            var i  = this.slot.findIndex(indexSlots);
            console.log("coucou" + this.slot[i].slots);
             this.selectedDate = this.slot[i].slots;
        }
    },
    getters: {
        schedule: (state) => state.currentSchedule,
        bookingSlots: (state) => state.slot,
        dayslot: (state) => state.day,
        listOfDaySlot: (state) => state.selectedDate,
    }
})