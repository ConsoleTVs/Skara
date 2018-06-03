<template>
    <div>
        <div class="my-12 text-white">
            <h1 class="text-5xl font-light mb-4">
                <grid-icon class="h-8 w-8"></grid-icon>
                Dashboard
            </h1>
            <h1 class="text-xl font-light">Welcome back, Erik</h1>
        </div>
        <div class="flex flex-wrap">
            <div class="w-full lg:w-1/3 mb-4">
                <div class="card bg-white lg:mr-2">
                    <div class="card-body">
                        <h1 class="text-5xl text-grey-darkest font-light mb-2">
                             112.758
                        </h1>
                        <span class="text-grey-darker uppercase tracking-wide">Page views</span>
                    </div>
                </div>
            </div>
            <div class="w-full lg:w-1/3 mb-4">
                <div class="card bg-white lg:mx-2">
                    <div class="card-body">
                        <h1 class="text-5xl text-grey-darkest font-light mb-2">4.632</h1>
                        <span class="text-grey-darker uppercase tracking-wide">Users registered</span>
                    </div>
                </div>
            </div>
            <div class="w-full lg:w-1/3 mb-4">
                <div class="card bg-white lg:ml-2">
                    <div class="card-body">
                        <h1 class="text-5xl text-grey-darkest font-light mb-2">$12.286</h1>
                        <span class="text-grey-darker uppercase tracking-wide">Estimated income</span>
                    </div>
                </div>
            </div>
            <div class="w-full mb-4">
                <div class="card bg-white">
                    <div class="card-header">
                        Page views in the last days
                    </div>
                    <div class="flex flex-wrap justify-around p-6">
                        <div>
                            <div class="flex flex-no-wrap justify-between items-center">
                                <h1 class="text-5xl text-grey-darkest font-light mb-2">1.952</h1>
                                <trending-up-icon class="text-green mx-1"></trending-up-icon>
                                <span class="text-grey-dark">(25%)</span>
                            </div>
                            <span class="text-grey-darker uppercase tracking-wide">Page views this month</span>
                        </div>
                        <div>
                            <div class="flex flex-no-wrap justify-between items-center">
                                <h1 class="text-5xl text-grey-darkest font-light mb-2">118</h1>
                                <trending-down-icon class="text-red mx-1"></trending-down-icon>
                                <span class="text-grey-dark">(-13%)</span>
                            </div>
                            <span class="text-grey-darker uppercase tracking-wide">Page views today</span>
                        </div>
                    </div>
                    <line-chart :height="200" :minimalist="true" :data="chart"></line-chart>
                </div>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/4">
                <div class="card bg-white mr-2">
                    <div class="card-body">
                        <h1 class="text-5xl text-grey-darkest font-light">
                            8.21
                            <span class="text-grey-dark text-2xl">GB</span>
                        </h1>
                        <span class="text-grey-darker uppercase tracking-wide">Storage used</span>
                    </div>
                    <progress-bar :progress="65"></progress-bar>
                </div>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/4">
                <div class="card bg-white md:ml-2 xl:mx-2">
                    <div class="card-body">
                        <h1 class="text-5xl text-grey-darkest font-light">
                            2.1
                            <span class="text-grey-dark text-2xl">GB</span>
                        </h1>
                        <span class="text-grey-darker uppercase tracking-wide">Ram usage</span>
                    </div>
                    <progress-bar :progress="21"></progress-bar>
                </div>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/4">
                <div class="card bg-white md:mr-2 xl:mx-2">
                    <div class="card-body">
                        <h1 class="text-5xl text-grey-darkest font-light">
                            88
                            <span class="text-grey-dark text-2xl">%</span>
                        </h1>
                        <span class="text-grey-darker uppercase tracking-wide">CPU load</span>
                    </div>
                    <progress-bar :progress="88"></progress-bar>
                </div>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/4">
                <div class="card bg-white ml-2">
                    <div class="card-body">
                        <h1 class="text-5xl text-grey-darkest font-light">
                            720
                            <span class="text-grey-dark text-2xl">GB</span>
                        </h1>
                        <span class="text-grey-darker uppercase tracking-wide">Bandwidth used</span>
                    </div>
                    <progress-bar :progress="72"></progress-bar>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LineChart from '@/components/LineChart'
import ProgressBar from '@/components/ProgressBar'
import { TrendingUpIcon, TrendingDownIcon, GridIcon  } from 'vue-feather-icons'

export default {
    components: {
        LineChart,
        TrendingUpIcon,
        TrendingDownIcon,
        GridIcon,
        'progress-bar': ProgressBar,
    },
    title: 'Dashboard',
    data() {
        return {
            chart: {
                labels: ["One","Two","Three","Four","Five"],
                datasets: [
                    {
                        label: 'GitHub Commits',
                        borderColor: 'rgba(101, 116, 205, 1)',
                        backgroundColor: 'rgba(101, 116, 205, 0.5)',
                        pointRadius: 0,
                        borderWidth: 2,
                        data: [100,65,84,45,90]
                    }
                ]
            }
        }
    }
}
</script>


<style>

</style>
