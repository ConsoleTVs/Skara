<template>
    <div class="flex flex-no-wrap space-between items-center">
        <input v-model="searchFor" @keyup="search()" type="text" class="text-black w-full" placeholder="Search in the site...">
        <loader :enabled="loader" color="#22292f" class="ml-6"></loader>
    </div>
</template>

<script>
    import Loader from '@/components/Loader'
    import * as JsSearch from 'js-search'

    export default {
        components: { 'loader': Loader },
        props: {
            documents: {
                type: Array,
                default: () => {
                    return [{}]
                }
            },
            results: {
                type: Array,
                default: () => {
                    return []
                }
            }
        },
        data() {
            return {
                searcher: {},
                searchFor: '',
                loader: false
            }
        },
        methods: {
            search() {
                this.loader = true
                let results = this.searchFor ? this.searcher.search(this.searchFor) : this.documents
                this.$emit('update:results', results)
                this.$emit('update:searchFor', this.searchFor)
                this.loader = false
            }
        },
        mounted() {
            this.searcher = new JsSearch.Search('id')
            for (let key in this.documents[0]) {
                this.searcher.addIndex(key)
            }
            this.searcher.addDocuments(this.documents)
            this.search()
        }
    }
</script>
