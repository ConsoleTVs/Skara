<template>
    <div>
        <div class="my-12 text-white">
            <h1 class="text-5xl font-light mb-4">
                <box-icon class="h-8 w-8"></box-icon>
                UI Elements
            </h1>
            <h1 class="text-xl font-light">All the template UI elements</h1>
        </div>
        <div class="flex flex-wrap">
            <div class="w-full">
                <div class="card bg-white">
                    <div class="card-header">
                        Sample buttons
                    </div>
                    <div class="card-body">
                        Sample
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { BoxIcon } from 'vue-feather-icons'

export default {
    components: {
        BoxIcon
    },
    title: 'UI Elements',
}
</script>


<style>

</style>
