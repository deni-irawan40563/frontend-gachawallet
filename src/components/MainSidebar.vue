<template>
    <b-container class="bg-white w-25 ml-0 mt-4 ml-5 h">
            <b-list-group class="border-0 pt-3">
                <router-link to="" class="text-dark"><b-list-group-item class="border-0 mt-3"><b-icon icon="grid" variant="secondary" font-scale="1" class="mr-2"></b-icon>Dashboard</b-list-group-item></router-link>
                <router-link to="" class="text-dark"><b-list-group-item class="border-0 mt-3"><b-icon icon="arrow-up" variant="secondary" font-scale="1" class="mr-2"></b-icon>Transfer</b-list-group-item></router-link>
                <router-link to="" class="text-dark"><b-list-group-item class="border-0 mt-3"><b-icon icon="plus" variant="secondary" font-scale="1" class="mr-2"></b-icon>Top Up</b-list-group-item></router-link>
                <router-link to="" class="text-dark"><b-list-group-item class="border-0 mt-3"><b-icon icon="person" variant="secondary" font-scale="1" class="mr-2"></b-icon>Profile</b-list-group-item></router-link>
            </b-list-group>
            <b-list-group class="handle-buttom">
                <router-link to="" class="text-dark"><b-list-group-item class="border-0"><b-icon icon="box-arrow-right" variant="secondary" font-scale="1" class="mr-2"></b-icon>Logout</b-list-group-item></router-link>
            </b-list-group>
    </b-container>
</template>

<script>
export default {
  name: 'mainsidebar'
}
</script>

<style scoped>
.h {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
}
ul li .style {
    text-decoration: none;
}
.handle-buttom {
    margin-bottom: 0;
}
</style>
