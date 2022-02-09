<template>
  <h1 class="mb-6 text-3xl font-extrabold">home</h1>
  <p class="mb-6">Name in store is {{ name }}</p>

  <input v-model="newName" class="p-2 border rounded mr-4 border-gray-600" type="text" />
  <button class="p-2 text-white bg-indigo-600 rounded">Submit</button>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, ref } from "vue";

const store = useStore();

// inorder to display name we need computed
const name = computed(() => {
  return store.state.user.name;
});

const newName = ref("")

//handle submit 
const saveName = () =>{
  store.dispatch("saveName", newName.value)

}
</script>
