<template>
    <div class="card">
        <div class="card-header">
            <slot name="header"></slot>
        </div>
        <div class="card-content">
            <slot></slot>
        </div>
        <div class="card-footer">
            <slot name="footer"></slot>
        </div>
        

    </div>
</template>

<!--we need to specify the name for the slot otherwise
it wont know which slot is what-->

<script>
    export default {
        name: "CardVue",
        props:['content']
    }
</script>

<style scoped>

.card{
    box-shadow: 0 4px 8px rgba(0,0, 0, 0.2);
    transition: 0.3s;
    padding: 16px;
    margin-bottom: 20px;
    width: 200px;
}

.card:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

</style>