<template>
    <div class="container-fluid">
        <div class="handphone"></div>
        <div class="feature">
            <div class="title">
                <h1 class="font-weight-bold text-left"> All The <span>Great</span> Gacha Wallet Features.</h1>
            </div>
            <div class="card mt-5 ml-0 p-2">
                <div class="point text-left mt-2">
                    <h6 class="font-weight-bold"><span>1. </span> Small Fee</h6>
                    <h6>We only charge 5% of every success transaction done in Gacha Wallet app.</h6>
                </div>
            </div>
            <div class="card mt-3 ml-0 p-2">
                <div class="point text-left mt-2">
                    <h6 class="font-weight-bold"><span>2. </span> Data Secured</h6>
                    <h6>Gacha Wallet come up with modern and sleek design and not complicated</h6>
                </div>
            </div>
            <div class="card mt-3 ml-0 p-2">
                <div class="point text-left mt-2">
                    <h6 class="font-weight-bold"><span>3. </span> User Friendly</h6>
                    <h6>Gacha Wallet come up with modern and sleek design and not complicated</h6>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Features'
}
</script>

<style scoped>
.container-fluid {
    height: 800px;
    display: flex;
    flex-direction: row;
    background-color: rgba(71, 58, 209, 0.06);
}

span {
    color: #6379F4;
}

.handphone {
    width: 400px;
    height: 700px;
    margin-top: 50px;
    margin-left: 130px;

    background-image: url('../../assets/Landing/png-phone2.png');
    background-size: 400px;
    background-repeat: no-repeat;
}

.feature {
    width: 600px;
    height: 600px;
    margin-top: 150px;
    margin-left: 50px;
}
.title {
    width: 365px;
}
.card {
    width: 600px;
    height: 100px;
    border-radius: 10px;
}
.point {
    float: left;
}
</style>
