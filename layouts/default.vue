<template>
    <div class="min-h-screen">
        <div class="h-96 w-full bg-indigo absolute z-n10 shadow-lg" style="transform: skewY(-3deg); transform-origin: top left;"></div>
        <div class="fixed pin-l pin-y bg-white overflow-y-scroll hidden lg:block w-full max-w-xs shadow-lg">
            <div class="h-16 flex items-center justify-center">
                <zap-icon class="h-6 block mr-2"></zap-icon>
                <div class="text-2xl">Skara</div>
            </div>
            <div class="py-4 px-6 border-b border-t border-grey-light">
                <search :searchFor.sync="searchFor" :results.sync="searchResults" :documents="searchData"></search>
            </div>
            <div v-if="searchFor" class="py-4 px-6">
                <span v-if="searchResults.length == 0" class="block font-light text-sm text-grey-darker">
                    Whoops! We found no results
                </span>
                <span v-if="searchResults.length > 0" class="block font-light text-sm text-grey-darker mb-4">
                    Search results:
                </span>
                <div v-for="result in searchResults" :key="result.id" class="text-sm bg-yellow-light p-4 rounded mb-2">
                    <div class="mt-1" v-for="key in Object.keys(result)" :key="key" v-if="key != 'id'">
                        {{ key.charAt(0).toUpperCase() + key.slice(1) }}: {{ result[key] }}
                    </div>
                </div>
            </div>
            <div v-if="!searchFor" class="flex flex-col">
                <div class="flex flex-col items-center mt-6">
                    <img class="h-24 w-24 rounded-full block lg:mr-2 block" src="https://avatars3.githubusercontent.com/u/6124435?s=460&v=4" alt="Èrik">
                    <div class="text-lg pt-3 text-black">
                        Èrik Campobadal
                    </div>
                    <div class="text-sm pt-1 text-grey-darker">
                        soc@erik.cat
                    </div>
                </div>
                <span class="px-6 mt-6 mb-2 uppercase tracking-wide text-sm text-grey-darker">Primary section</span>
                <nuxt-link to="/" class="no-underline text-black px-6 py-4 flex flex-no-wrap items-center">
                    <grid-icon class="h-4 mr-2 flex-none"></grid-icon>
                    <span class="text-sm uppercase tracking-wide flex-auto">Dashboard</span>
                </nuxt-link>
                <nuxt-link to="/ui-elements" class="no-underline text-black px-6 py-4 flex flex-no-wrap items-center">
                    <box-icon class="h-4 mr-2 flex-none"></box-icon>
                    <span class="text-sm uppercase tracking-wide flex-auto">UI Elements</span>
                </nuxt-link>
                <a href="#" class="no-underline text-black px-6 py-4 flex flex-no-wrap items-center">
                    <zap-icon class="h-4 mr-2 flex-none"></zap-icon>
                    <span class="text-sm uppercase tracking-wide flex-auto">Sample</span>
                </a>
                <span class="px-6 mt-6 mb-2 uppercase tracking-wide text-sm text-grey-darker">Another section</span>
                <a href="#" class="no-underline text-black px-6 py-4 flex flex-no-wrap items-center">
                    <zap-icon class="h-4 mr-2 flex-none"></zap-icon>
                    <span class="text-sm uppercase tracking-wide flex-auto">Sample</span>
                </a>
                <a href="#" class="no-underline text-black px-6 py-4 flex flex-no-wrap items-center">
                    <zap-icon class="h-4 mr-2 flex-none"></zap-icon>
                    <span class="text-sm uppercase tracking-wide flex-auto">Sample</span>
                </a>
                <span class="px-6 mt-6 mb-2 uppercase tracking-wide text-sm text-grey-darker">Latest section</span>
                <a href="#" class="no-underline text-black px-6 py-4 flex flex-no-wrap items-center">
                    <zap-icon class="h-4 mr-2 flex-none"></zap-icon>
                    <span class="text-sm uppercase tracking-wide flex-auto">Sample</span>
                </a>
                <a href="#" class="no-underline text-black px-6 py-4 flex flex-no-wrap items-center">
                    <zap-icon class="h-4 mr-2 flex-none"></zap-icon>
                    <span class="text-sm uppercase tracking-wide flex-auto">Sample</span>
                </a>
            </div>
        </div>
        <div class="lg:ml-80">
            <div class="bg-white shadow-lg text-grey-darkest flex justify-center">
                <div class="flex-auto flex justify-start items-center h-16 px-4">
                    <div class="flex no-wrap items-center">
                        <circle-icon class="ml-2 text-green fill-current lg:ml-0 h-3 block"></circle-icon>
                        <div class="hidden lg:inline lg:px-1 uppercase tracking-wide text-xs text-grey-darker">
                            Service Online
                        </div>
                    </div>
                </div>
                <div class="flex-auto flex justify-end items-center h-16 px-4">
                    <!-- <div class="flex no-wrap items-center">
                        <zap-icon class="h-6 block mr-2"></ zap-icon>
                        <div class="text-2xl">Skara</div>
                    </div>-->
                    <div class="flex no-wrap items-center">
                        <img class="h-8 w-8 rounded-full lg:mr-2 block" src="https://avatars3.githubusercontent.com/u/6124435?s=460&v=4" alt="Èrik">
                        <div class="hidden lg:inline lg:px-1 text-grey-darker">
                            Èrik Campobadal
                        </div>
                        <chevron-down-icon class="ml-2 lg:ml-0 h-6 block"></chevron-down-icon>
                    </div>
                </div>
            </div>
            <div class="container mx-auto px-4">
                <div id="nuxt-body" class="transitioner initial-state">
                    <nuxt />
                </div>
                <div class="mb-6 mt-2 text-grey-darker text-center">
                    &copy; {{ (new Date()).getFullYear() }} Èrik Campobadal. All rights reserved.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ZapIcon, ChevronDownIcon, CircleIcon, GridIcon, BoxIcon } from 'vue-feather-icons'
import Search from '@/components/Search'

export default {
    components: { ZapIcon, ChevronDownIcon, CircleIcon, GridIcon, BoxIcon, 'search': Search },
    data() {
        return {
            searchFor: '',
            searchData: [
                {
                    id: 1,
                    name: 'Erik',
                    job: 'Laralum'
                },
                {
                    id: 2,
                    name: 'Aitor',
                    job: 'Laralum'
                }
            ],
            searchResults: []
        }
    },
    computed: {
        title () {
            return this.$route.matched.map((r) => {
                return (r.components.default.options ? r.components.default.options.title : r.components.default.title)
            })[0]
        }
    },
    head () {
        return {
            title: this.title + ' — Skara'
        }
    },
}
</script>


<style>

</style>
