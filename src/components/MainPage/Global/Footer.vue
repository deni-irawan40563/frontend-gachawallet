<template>
    <div class="fixed-bottom bg-primary">
        <b-navbar variant="faded" type="light" class="text-center">
            <b-navbar-brand  class="style-text">2020 Gacha Wallet. All right reserved.</b-navbar-brand>
            <div class="contact ml-auto">
                <b-navbar-brand  class="style-text">+62 5637 8882 9901</b-navbar-brand>
                <b-navbar-brand  class="style-text">contact@zwallet.com</b-navbar-brand>
            </div>
        </b-navbar>
    </div>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style scoped>
.style-text {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    color: rgba(239, 239, 239, 0.9);
}
@media (max-width: 576px) {
    .contact {
        display: none;
    }
}
</style>
