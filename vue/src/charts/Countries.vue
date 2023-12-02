<script setup>
import {FilterMatchMode} from 'primevue/api'
import {ref, onMounted, onBeforeMount} from 'vue'
// import ProductService from '@/service/ProductService';
import {useToast} from 'primevue/usetoast'
import axios from "axios";
const user =ref({})
import data from '../pages/admin/cart.json'
onMounted(() => {
   
   user.value=data.tasks[0].result[0].items[0].referring_links_countries 
   console.log(data.tasks[0].result[0].items[0].referring_links_countries)
});


</script>

<template>
  <div class="grid">
    <div class="col-12">
      <va-card class="card">
        <Toolbar class="mb-4">
          <template #start>
            <div class="font-bold text-lg">
               Top Countries
            </div>
          </template>

        </Toolbar>

        <Toast/>


        <DataTable
          ref="dt"
          v-model:selection="selectedProducts"
          :value="users"
         
          data-key="id"
          :paginator="false"         
          :filters="filters"
          paginator-template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          
        
        >
         

          <Column field="country" header="Country" :sortable="true" header-style="width:14%; min-width:10rem;">
            <template #body="slotProps">
              {{ slotProps.data.name }}
            </template>
          </Column>

           <Column field="Referring Domains" header="Referring Domains"  header-style="width:14%; min-width:10rem;">
            <template #body="slotProps">
              {{ slotProps.data.email }}
            </template>
          </Column>
         
        </DataTable>

        <Dialog
          v-model:visible="productDialog"
          :style="{ width: '450px' }"
          header="users form"
          :modal="true"
          class="p-fluid"
        >

          <div class="field mb-5">
            <label for="first">first name </label>
            <InputText
              class="mt-3"
              id="first"
              v-model.trim="user.first_name"
              required="true"
              autofocus
              :class="{ 'p-invalid': submitted && !user.first_name }"
            />
            <small v-if="submitted && !user.first_name" class="p-invalid">First Name is required.</small>
          </div>

          <div class="field mb-5">
            <label for="last">last name </label>
            <InputText
              class="mt-3"
              id="last"
              v-model.trim="user.last_name"
              required="true"
              autofocus
              :class="{ 'p-invalid': submitted && !user.last_name }"
            />
            <small v-if="submitted && !user.last_name" class="p-invalid">Last Name is required.</small>
          </div>

          <div class="field mb-5">
            <label for="email" class="mb-3">email </label>
            <InputText
              class="mt-3"
              id="email"
              v-model.trim="user.email"
              required="true"
              autofocus
              :class="{ 'p-invalid': submitted && !user.email }"
            />
            <small v-if="submitted && !user.email" class="p-invalid">Email is required.</small>
          </div>

          <div class="field mb-5">
            <label for="password" class="mb-3">password </label>
            <InputText
              class="mt-3"
              id="password"
              v-model.trim="user.password"
              required="true"
              autofocus
              :class="{ 'p-invalid': submitted && !user.password }"
            />
            <small v-if="submitted && !user.password" class="p-invalid">password is required.</small>
          </div>

          <div class="field mb-5">
            <label for="mobile" class="mb-3">mobile</label>
            <InputText
              class="mt-3"
              id="mobile"
              v-model.trim="user.mobile_number"
              required="true"
              autofocus
              :class="{ 'p-invalid': submitted && !user.mobile_number }"
            />
            <small v-if="submitted && !user.mobile_number" class="p-invalid">mobile is required.</small>
          </div>


          <template #footer>
            <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog"/>
            <Button label="Save" icon="pi pi-check" class="p-button-text" @click="save"/>
          </template>
        </Dialog>

        <Dialog v-model:visible="deleteDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">
          <div class="m-auto">
                 <Rating class="m-auto" v-model="rate.tourist_rating" :stars="5" :cancel="false" />
              </div>

          <template #footer>
            <Button label="send" icon="pi pi-check" class="m-auto" @click="rateValue" />
          </template>
        </Dialog>

        <Dialog v-model:visible="deleteProductsDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">
          <div class="flex align-items-center justify-content-center">
            <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem"/>
            <span v-if="product">Are you sure you want to delete the selected products?</span>
          </div>
          <template #footer>
            <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteProductsDialog = false"/>
            <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteSelectedProducts"/>
          </template>
        </Dialog>
      </va-card>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>