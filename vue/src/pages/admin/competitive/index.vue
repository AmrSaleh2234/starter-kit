
<template>

    <va-card class=" h-full grid grid-cols-2 gap-5  p-5 ">
     <Lineper></Lineper>  
     <Linegx />
     <Line></Line> 
     <LineLine></LineLine>   
     <Liney></Liney>   
     <Lineyy></Lineyy>  
     <Linex></Linex>
         
     
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
import axios from 'axios'








</script>
