<template>
    <div>
        <input type="text" ref="inputRef"/>
        <PostListVue ref="postListRef"/>
        <!--to register an element tothe html element-->


    </div>
</template>

<script>
import PostListVue from './PostList.vue';

    export default {
        name:'TemplateVue',
        mounted(){//place to access the dom
        console.log(this.$refs.postListRef);
        this.$refs.inputRef.focus();  

        },
        components:{
            PostListVue,
        }
    }
</script>

<style lang="scss" scoped>

</style>