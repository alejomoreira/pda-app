<template>

    <div class="full-width intro">
        <div class="full-height">
            <div class="fixed">
                <figure class="background-image1 "></figure>
            </div>
            <div class="full-height-wrapper white-text">
                <div class="custom-caption"></div>
                <div class="parent">
                <div class="bottom">
                    <div class="container">
                        <div class="">
                            <div class="col-lg-3 col-lg-offset-8 col-md-5 col-sm-offset-6 col-sm-6">
                                <div class="banner-textblock">
                                    <h1>{{ $t(name + ".mensaje") }}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div class="overlay"></div>
            </div>
        </div>
    </div>

</template>
    
<script>
    
    export default {
        name: 'MaintenanceMode',
        components: {
        },
        props: 
            { name: String }
        ,
        mounted () {
            document.body.classList.add('no-intro', 'white-header', 'amiri');
        },
        unmounted() {
            document.body.classList.remove('no-intro', 'white-header', 'amiri');
        }
    }
    
</script>

<style scoped>
.black {background: #000;}
</style>