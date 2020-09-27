<template>
    <div>
        <nav class="navbar navbar-light bg-white rounded-style">
            <span class="navbar-brand mb-0 h1 font-weight-bold text-primary pb-3 pt-3 brand-style">Gacha Wallet</span>
            <div class="mr-5">
                <div class="mr-5 row">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBIAsNvIPQ89lhNbk72HrmU14-fIp6SjETkA&usqp=CAU" class="d-inline-block align-top style-img mr-3">
                    <div class="text-style dropdown">
                    <div class="font-weight-bold">Shigeo Tokuda</div>
                    +62 8139 3877 7946
                    <a class="dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        <b-icon icon="bell" variant="secondary" font-scale="2" class="ml-5 mt-n2"></b-icon> <!-- dropdown belum jalan -->
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'mainnavbar'
}
</script>

<style scoped>
.rounded-style {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
}
.brand-style {
    font-size: 29px;
    line-height: 40px;
}
.style-img {
    width: 52px;
    height: 52px;
    object-fit: cover;
    border-radius: 10px;
}
.text-style {
    font-size: 13px;
    line-height: 24px;
}
</style>
