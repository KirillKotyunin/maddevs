<template>
  <div class="gallery-slice">
    <h3 v-if="galleryTitle">{{ galleryTitle }}</h3>
    <swiper-blog :components="slice.items"/>
  </div>
</template>

<script>
import SwiperBlog from '@/components/Blog/SwiperBlog';

export default {
  name: 'GallerySlice',
  components: {
    SwiperBlog
  },
  props: {
    slice: {
      type: Object,
      required: true
    }
  },
  computed: {
    galleryTitle: function() {
      return this.$prismic.asText(this.slice.primary.name_of_the_gallery);
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../../assets/styles/_vars';

  .gallery-slice {
    margin-bottom: 48px;
  }

</style>
