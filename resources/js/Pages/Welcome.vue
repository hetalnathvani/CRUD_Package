<template>
    <header>
        <h1>Welcome</h1>
        <p>Welcome to my first Inertia.js app!!!</p>
        <inertia-link href="/about">About </inertia-link>
        <inertia-link href="/contact">Contact </inertia-link>
        <inertia-link href="/welcome">Welcome </inertia-link>
    </header>
</template>

<script>

import { InertiaLink } from "@inertiajs/inertia-vue";

export default {
    props: {
      title: String,
    },
}
</script>