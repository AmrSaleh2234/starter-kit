<template>
    <va-card class=" h-full py-[1%] px-4 ">
        <div class="card ">
          
            <Button @click="createproject" label="Create project" icon="pi pi-plus " class="w-[200px] " />
            <div>
                <div>
                <h1 class="text-xl py-3 font-bold">Heres What You Will Find inside a project :</h1>
                </div>
                <div>
                    <div class="flex py-2">
                        <i class="pi pi-check font-bold text-[green] my-auto px-3" ></i>
                        <p class="text-lg">Top organic Keywords the domain us ranking for in SERP</p>
                    </div>
                    <div class="flex py-2">
                        <i class="pi pi-check font-bold text-[green] my-auto px-3" ></i>
                        <p class="text-lg">Top competitor domains with a full overview of ranking and traffic data <br> of the competitor domains from organic search</p>
                    </div>
                    <div class="flex py-2">
                        <i class="pi pi-check font-bold text-[green] my-auto px-3" ></i>
                        <p class="text-lg">Backing data for a given domain had with the number of new & lost <br>backing refering domains , and more.</p>
                    </div>
                    <div class="flex py-2">
                        <i class="pi pi-check font-bold text-[green] my-auto px-3" ></i>
                        <p class="text-lg">Top indexed pages with ranking and traffic data for the web pages of <br> the specified domain</p>
                    </div>
                    
                </div>
            </div>
            <Dialog v-model:visible="visible" modal header="setup new project" :style="{ width: '60rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                <div>
                    <h1 class="py-2 text-lg font-bold">Setup URL / Domain</h1>
                    <div class="flex">
                       
                        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="http + https" class="round w-[20%]" />
                        <InputText class="w-full round" placeholder="Domain or URL "  type="text" v-model="value" />
                        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="*.domain/*" class="round w-[20%]" />
                    </div>
                   
                    <div class="w-full py-3">
                        <div class="py-2 text-lg font-bold"><label>project name</label></div>
                        <InputText class="w-full" placeholder="Change project name"  type="text" v-model="value" />
                    </div>
                </div>
                <div class="text-center my-4 " >
                    <Button  label="Next"  class="w-[150px] m-auto " />
                </div>
            </Dialog>
         
        </div>
    </va-card>
</template>
<script setup>
import { ref } from "vue";

const visible = ref(false);
const createproject =()=>{
    visible.value=!(visible.value)
}
const selectedCity = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
</script>
<style scoped>
Button{
    background-color: #448AEB !important;
}
.round{
    border-radius: 0px !important;
}
</style>