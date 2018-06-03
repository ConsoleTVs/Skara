<template>
    <div class="flex">
        <div class="rounded" :class="[barColor, barHeight]" :style="{ width: progress + '%' }"></div>
        <div class="bg-grey-light flex-auto rounded" :class="[barHeight]"></div>
    </div>
</template>

<script>
export default {
    props: {
        progress: {
            type: Number,
            default: 0
        },
        height: {
            type: Number,
            default: 1
        },
        inversedColors: {
            type: Boolean,
            default: false
        },
        autoColor: {
            type: Boolean,
            default: true
        },
        color: {
            type: String,
            default: 'green'
        }
    },
    computed: {
        barHeight() {
            return 'h-' + this.height
        },
        barColor() {
            let prefix = 'bg-'
            let high = 'red'
            let medium = 'orange'
            let low = 'green'

            if (this.inversedColors) {
                high = 'green'
                low = 'red'
            }

            if (this.autoColor) {
                if (this.progress > 75) {
                    return prefix + high
                } else if (this.progress > 25) {
                    return prefix + medium
                }
                return prefix + low
            }

            return prefix + this.color
        }
    }
}
</script>
