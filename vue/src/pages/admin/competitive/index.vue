
<template>

    <va-card style="background-color:#F5F6FB !important;" class=" h-full grid bg-[#F5F6FB] grid-cols-2 gap-5  p-5 ">
     <Lineper></Lineper>  
     <Linegx />
     <Line></Line> 
     <LineLine></LineLine>   
     <Liney></Liney>   
     <Lineyy></Lineyy>  
     <Linex></Linex>
     <country> </country>
     <pages></pages>
     <competories></competories>
     
        
    </va-card>
   
</template>


<script setup>
import { ref, onMounted } from "vue";
import data from '../cart.json'
import Line from '../../../charts/Line.vue'
import Linex from '../../../charts/Linex.vue'
import Liney from '../../../charts/Liney.vue'
import Lineyy from '../../../charts/Lineyy.vue'
import Lineper from '../../../charts/Lineper.vue'
import LineLine from '../../../charts/LineLine.vue'
import Linexy from '../../../charts/Linexy.vue'
import Linegx from '../../../charts/Linegx.vue'
import country from '../../../charts/Countries.vue'
import pages from '../../../charts/Toppages.vue'
import competories from '../../../charts/Topcomptitors.vue'
import axios from 'axios'








</script>
