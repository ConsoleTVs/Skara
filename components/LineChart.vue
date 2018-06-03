<script>
    import { Line } from 'vue-chartjs'

    export default {
        extends: Line,
        props: {
            minimalist: {
                type: Boolean,
                default: false
            },
            data: {
                type: Object,
                default: () => {
                    return { };
                }
            },
            options: {
                type: Object,
                default: () => {
                    return { };
                }
            }
        },
        mounted () {
            if (this.minimalist) {
                this.options = Object.assign(this.options, {
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [
                            {
                                display: false
                            }
                        ],
                        yAxes: [
                            {
                                display: false
                            }
                        ]
                    }
                })
            }
            this.renderChart(this.data, Object.assign(this.options, {
                responsive: true,
                maintainAspectRatio: false,
            }))
        }
    }
</script>
