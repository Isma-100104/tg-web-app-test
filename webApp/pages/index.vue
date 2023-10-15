<script setup>
const {$telegram} = useNuxtApp();
const tg = $telegram

const onClose = () => {
    $telegram.WebApp.close()
}

onMounted(() => {
    $telegram.WebApp.ready()
})

</script>

<template>
    <div>
        <h1> Hello World </h1>
        <button @click="onClose"> Закрыть </button>
    </div>
</template>