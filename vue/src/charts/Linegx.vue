
<template>
    <va-card class=" h-full py-[1%] px-2 ">
      <h style="border-bottom:1px solid rgb(132, 122, 122);" class="w-full py-1 text-2xl font-bold">Backlinks Types</h>  
      <div class="my-2">
        <h1 class="text-lg font-bold " >Text</h1>
        <ProgressBar style="background-color:"  :value="keyword.text"></ProgressBar>
      </div>
       <div class="my-2">
        <h1 class="text-lg font-bold " >Image</h1>
        <ProgressBar  :value="keyword.Image"></ProgressBar>
      </div>
       <div class="my-2">
        <h1 class="text-lg font-bold " >Form</h1>
        <ProgressBar  :value="keyword.form"></ProgressBar>
      </div>      
       <h style="border-bottom:1px solid rgb(132, 122, 122);" class="w-full pt-5 text-2xl font-bold">Link Attributes Types</h>  
      <div class="my-2">
        <h1 class="text-lg font-bold " >Follow</h1>
        <ProgressBar style="background-color:"  :value="keyword.Follow"></ProgressBar>
      </div>
       <div class="my-2">
        <h1 class="text-lg font-bold " >Unfollow</h1>
        <ProgressBar  :value="keyword.Unfollow"></ProgressBar>
      </div>
       <div class="my-2">
        <h1 class="text-lg font-bold " >Sponsored</h1>
        <ProgressBar  :value="keyword.Sponsored"></ProgressBar>
      </div>  
        <div class="my-2">
        <h1 class="text-lg font-bold " >UGC</h1>
        <ProgressBar  :value="keyword.UGC"></ProgressBar>
      </div>      
    </va-card>
   
</template>

<script setup>
import { ref, onMounted } from "vue";
const keyword=ref({
    text:'',
    Image:'',
    form:'',
    Follow:'',
    Unfollow:'',
    Sponsored:'',
    UGC:''

})
import data from '../pages/admin/cart.json'
onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
    
    console.log(data.tasks[0].result[0].items[0].referring_links_types.anchor)
    keyword.value.text=(data.tasks[0].result[0].items[0].referring_links_types.anchor)%100
    keyword.value.Image=(data.tasks[0].result[0].items[0].referring_links_types.redirect)%100
    keyword.value.form=data.tasks[0].result[0].items[0].referring_links_types.alternate
    keyword.value.Follow=((data.tasks[0].result[0].items[0].backlinks) - (data.tasks[0].result[0].items[0].referring_links_attributes.nofollow))%100
    keyword.value.Unfollow=(data.tasks[0].result[0].items[0].referring_links_attributes.nofollow)%100
    keyword.value.Sponsored=(data.tasks[0].result[0].items[0].referring_links_attributes.sponsored)%100
    keyword.value.UGC=(data.tasks[0].result[0].items[0].referring_links_attributes.ugc)%100 
});

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
    const documentStyle = getComputedStyle(document.documentElement);

    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor:['#25B2FA'],
                // borderColor: documentStyle.getPropertyValue('--blue-500'),
                data: [65, 59, 80, 81, 56, 55, 40]
            },
           
        ]
    };
};
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    return {
        indexAxis: 'y',
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary,
                    font: {
                        weight: 500
                    }
                },
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            }
        }
    };
}
</script>
