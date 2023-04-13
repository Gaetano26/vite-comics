:<template>
     <div class="bg-footer ">
        <div class="container py-4 ps-5 d-flex justify-content-between align-items-center">
            <div>
                <button>Sign-up now!</button>
            </div>
            <div class="d-flex align-items-center gap-3">
                <h3 class="text-primary m-0">Follow us</h3>
                <div class="d-flex gap-3">
                    <img src="/images/footer-facebook.png" alt="facebook">
                    <img src="/images/footer-twitter.png" alt="twitter">
                    <img src="/images/footer-youtube.png" alt="youtube">
                    <img src="/images/footer-pinterest.png" alt="pinterest">
                    <img src="/images/footer-periscope.png" alt="periscope">
                </div>
            </div>
           
        </div>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
button{
    border: 1px solid blue;
    background-color: transparent;
    color: white;
    font-size: 12px;
    padding: .5rem;
    text-transform: uppercase;
}
h3 {
    text-transform: uppercase;
    font-size: 15px;
}
.bg-footer {
    background-color: black;
}

img {
    width: 30px;
    height: 30px;
}
</style>