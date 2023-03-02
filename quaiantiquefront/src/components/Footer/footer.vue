<script setup lang="ts">
import {useScheduleStore} from "@/stores/schedule.store";

const scheduleStore = useScheduleStore()
scheduleStore.getSchedule()

</script>

<template>
    <div class="footer">                
                <div class="row-lg-4 row-sm-4 row-xs-12">
                    <div class="single_footer">
                        <h4>Ouverture</h4>
                        <ul>
                            <li>Lundi : {{scheduleStore.$state.currentSchedule.openingMonday}}</li>
                            <li>Lundi : {{scheduleStore.$state.currentSchedule.openingTuesday}}</li>
                            <li>Mercredi : {{scheduleStore.$state.currentSchedule.openingWednesday}}</li>
                            <li>Jeudi : {{scheduleStore.$state.currentSchedule.openingThursday}}</li>
                            <li>Vendredi : {{scheduleStore.$state.currentSchedule.openingFriday}}</li>
                            <li>Samedi: {{scheduleStore.$state.currentSchedule.openingSaturday}}</li>
                            <li>Dimanche : {{scheduleStore.$state.currentSchedule.openingSunday}}</li>
                        </ul>
                    </div>
                            <div class="single_footer ">
                                <h4>Fermeture</h4>
                                <ul>
                                    <li>Lundi : {{scheduleStore.$state.currentSchedule.closingMonday}}</li>
                                    <li>Lundi : {{scheduleStore.$state.currentSchedule.closingTuesday}}</li>
                                    <li>Mercredi : {{scheduleStore.$state.currentSchedule.closingWednesday}}</li>
                                    <li>Jeudi : {{scheduleStore.$state.currentSchedule.closingThursday}}</li>
                                    <li>Vendredi : {{scheduleStore.$state.currentSchedule.closingFriday}}</li>
                                    <li>Samedi: {{scheduleStore.$state.currentSchedule.closingSaturday}}</li>
                                    <li>Dimanche : {{scheduleStore.$state.currentSchedule.closingSunday}}</li>
                                </ul>
                       
                </div>
            </div>             

    </div>

    
</template>

<style>  
a,
a:hover,
a:focus,
a:active {
    text-decoration: none;
    outline: none;
}

a,
a:active,
a:focus {
    color: #333;
    text-decoration: none;
    transition-timing-function: ease-in-out;
    -ms-transition-timing-function: ease-in-out;
    -moz-transition-timing-function: ease-in-out;
    -webkit-transition-timing-function: ease-in-out;
    -o-transition-timing-function: ease-in-out;
    transition-duration: .2s;
    -ms-transition-duration: .2s;
    -moz-transition-duration: .2s;
    -webkit-transition-duration: .2s;
    -o-transition-duration: .2s;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
section {
    padding: 60px 0;
   /* min-height: 100vh;*/
}
.footer {
background: linear-gradient(105deg,#6e99e6 ,#093c94);
}

@media only screen and (max-width:768px) { 
.single_footer{margin-bottom:30px;}
}
.single_footer h4 {
color: #fff;
margin-top: 0;
margin-bottom: 25px;
font-weight: 700;
text-transform: uppercase;
font-size: 20px;
}
.single_footer h4::after {
content: "";
display: block;
height: 2px;
width: 40px;
background: #fff;
margin-top: 20px;
}
.single_footer p{color:#fff;}
.single_footer ul {
margin: 0;
padding: 0;
color: #fff;
list-style: none;
}
.single_footer ul li a {
color: #fff;
font-size: 15px;

}
.single_footer ul li a:hover { color: #ff3666; }

.single_footer_address ul li{color:#fff;}

</style>