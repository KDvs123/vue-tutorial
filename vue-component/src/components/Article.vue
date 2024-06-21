<template>
    <h2>Article Component</h2>
    <h2>{{title}}</h2>
    <h2 v-bind="$attrs">Likes: {{likes}}</h2>
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

        },
        inheritAttrs:false,//prevent Non prop attributes  to be applied to the root node

       
    }
</script>



<!--Non-Prop Attributes are attributes that passed to a component but does not have a corresponding prpoerty defined in the props option

id , class , style-->

<style scoped>

</style>