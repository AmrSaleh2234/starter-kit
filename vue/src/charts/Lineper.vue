
<template>
    <va-card class=" h-full py-[1%] px-2 ">
        <div class="card">
            <h class="font-bold text-lg ">organic Postion Distribution</h>
            <Chart type="bar" :data="chartData" :options="chartOptions" class="h-30rem" />
        </div>
    </va-card>
   
</template>

<script setup>
import { ref, onMounted } from "vue";
import data from '../pages/admin/keyword.json'



const chartData = ref();
const chartOptions = ref();
onMounted(() => {
    console.log("ascsac")
   console.log(data.tasks[0].result[0].metrics.organic)
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
     console.log(data.tasks[0].result[0].items[0].new_referring_domains)
    chartData.value.datasets[0].data[0]=data.tasks[0].result[0].metrics.organic.pos_1
    chartData.value.datasets[0].data[1]=data.tasks[0].result[0].metrics.organic.pos_2_3
    chartData.value.datasets[0].data[2]=data.tasks[0].result[0].metrics.organic.pos_4_10
    chartData.value.datasets[0].data[3]=data.tasks[0].result[0].metrics.organic.pos_11_20
    chartData.value.datasets[0].data[4]=data.tasks[0].result[0].metrics.organic.pos_21_30
    chartData.value.datasets[0].data[5]=data.tasks[0].result[0].metrics.organic.pos_31_40
    chartData.value.datasets[0].data[6]=data.tasks[0].result[0].metrics.organic.pos_41_50
    chartData.value.datasets[0].data[7]=data.tasks[0].result[0].metrics.organic.pos_51_60
    chartData.value.datasets[0].data[8]=data.tasks[0].result[0].metrics.organic.pos_61_70
    chartData.value.datasets[0].data[9]=data.tasks[0].result[0].metrics.organic.pos_71_80

    
    
    
});

const setChartData = () =>  {
    const documentStyle = getComputedStyle(document.documentElement);
    

    return {
        labels: ['1', '2-3', '4-10', '11-20','21-30', '31-40', '41-50', '51-60', '61-70', '71-80'],
        datasets: [
            {
                type: 'bar',
                label: 'Dataset 1',
                backgroundColor: documentStyle.getPropertyValue('--blue-300'),
                data: ['']
            },
            
           
        ]
    };
};
const setChartOptions = () =>  {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    return {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
            tooltips: {
                mode: 'index',
                intersect: false
            },
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                stacked: true,
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            },
            y: {
                stacked: true,
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            }
        }
    };
}
</script>
