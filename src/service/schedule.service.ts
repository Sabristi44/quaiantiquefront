import type { slotInterface } from './../shared/interface/slot.interface';
import type { scheduleInterface } from './../shared/interface/schedule.interface';
import { URL_SCHEME } from './index.service';


export async function addScheduleService(Schedule : scheduleInterface): Promise<scheduleInterface> {
    const response = await (await fetch(`${URL_SCHEME}/schedule`,
        {
            method: "POST",
            body: JSON.stringify({
                openingMonday: Schedule.openingMonday,
                closingMonday: Schedule.closingMonday,
                openingTuesday: Schedule.openingTuesday,
                closingTuesday: Schedule.closingTuesday,
                openingWednesday: Schedule.openingWednesday,
                closingWednesday: Schedule.closingWednesday,
                openingThursday: Schedule.openingThursday,
                closingThursday: Schedule.closingThursday,
                openingFriday: Schedule.openingFriday,
                closingFriday: Schedule.closingFriday,
                openingSaturday: Schedule.openingSaturday,
                closingSaturday: Schedule.closingSaturday,
                openingSunday: Schedule.openingSunday,
                closingSunday: Schedule.closingSunday,
            }),
            headers: {
                "Content-type": "application/json"
            }
        })).json();
    if(!response.error){
        return response;
    }else{
        throw response;
    }
}

export async function getScheduleService(): Promise<scheduleInterface> {
    const response = await (await fetch(`${URL_SCHEME}/schedule`,
        {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        })).json();
    if(!response.error){
        return response;
    }else{
        throw response;
    }
}

export async function getBookingSlotService(): Promise<slotInterface[]> {
    const response = await (await fetch(`${URL_SCHEME}/slot`,
        {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        })).json();
    if(!response.error){
        return response;
    }else{
        throw response;
    }
}
