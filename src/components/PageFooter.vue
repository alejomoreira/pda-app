<template>
    <footer id="footer">
        <div class="container clearfix">
            <p class="alignleft">© {{currentYear}}, Paseo de las Américas.</p>
           <!--<p class="alignright">Made with <i class="fa fa-heart"></i> by <a href="http://www.weibergmedia.com" data-title="Premium HTML5 Website Templates">weibergmedia</a>.</p>--> 
        </div>
    </footer>
</template>

<script>
export default {
    name: 'PageFooter',
    data: () => {
        return {
            currentYear: new Date().getFullYear(), // 2020
        };
    },
    props: {
        msg: String
    }
}
</script>
