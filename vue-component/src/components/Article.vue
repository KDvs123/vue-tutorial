<template>
    <h2>Article Component</h2>
    <h2>{{title}}</h2>
    <h2>Likes: {{likes}}</h2>
    <h2>Published {{isPublished ? "Yes":"No"}}</h2>
</template>

<script>
    export default {
        name: "ArticleVue",
        props:{
            title:{
                type: String,
                required: true,
                default:'Article Default Title'
            },
            likes:Number,
            isPublished:Boolean,

        }
    }
</script>

<style scoped>

</style>