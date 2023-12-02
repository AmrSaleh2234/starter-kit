
<template>
    <va-card class=" h-full py-[1%] px-2 ">
        <div class="card">
            <h class="font-bold text-lg ">New and Lost Backlinks</h>
            <Chart type="bar" :data="chartData" :options="chartOptions" class="h-30rem" />
        </div>
    </va-card>
   
</template>

<script setup>
import { ref, onMounted } from "vue";
import data from '../pages/admin/cart.json'



const chartData = ref();
const chartOptions = ref();
onMounted(() => {
   
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
     console.log(data.tasks[0].result[0].items[0].new_referring_domains)
    chartData.value.datasets[0].data[0]=data.tasks[0].result[0].items[0].new_backlinks
    chartData.value.datasets[0].data[1]=data.tasks[0].result[0].items[1].new_backlinks
    chartData.value.datasets[0].data[2]=data.tasks[0].result[0].items[2].new_backlinks
    chartData.value.datasets[0].data[3]=data.tasks[0].result[0].items[3].new_backlinks

    
     chartData.value.datasets[1].data[0]=-data.tasks[0].result[0].items[0].lost_backlinks
    chartData.value.datasets[1].data[1]=-data.tasks[0].result[0].items[1].lost_backlinks
    chartData.value.datasets[1].data[2]=-data.tasks[0].result[0].items[2].lost_backlinks
    chartData.value.datasets[1].data[3]=-data.tasks[0].result[0].items[3].lost_backlinks
    
    
});

const setChartData = () =>  {
    const documentStyle = getComputedStyle(document.documentElement);

    return {
        labels: ['January', 'February', 'March', 'April'],
        datasets: [
            {
                type: 'bar',
                label: 'Dataset 1',
                backgroundColor: documentStyle.getPropertyValue('--blue-300'),
                data: ['']
            },
            
            {
                type: 'bar',
                label: 'Dataset 3',
                backgroundColor: documentStyle.getPropertyValue('--orange-500'),
                data: ['']
            }
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
