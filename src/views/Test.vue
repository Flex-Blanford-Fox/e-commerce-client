<template>
  <mdb-container>
    <section class="text-center my-5">
      <h2 class="h1-responsive font-weight-bold text-center my-5">Our bestsellers</h2>
      <p class="grey-text text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
      <mdb-carousel :items="9" controlls indicators multi slide>
        <template v-for="(item, i) in items" #[i+1]>
          <mdb-card narrow ecommerce class="mb-2" :key="i">
            <mdb-view hover cascade>
              <mdb-card-image waves top :src="item.img" alt="sample photo" />
              <a>
                <mdb-mask overlay="white-slight" waves />
              </a>
            </mdb-view>
            <mdb-card-body cascade>
              <a href class="text-muted">
                <h5>{{item.category}}</h5>
              </a>
              <mdb-card-title>
                <strong>
                  <a href>{{item.title}}</a>
                </strong>
              </mdb-card-title>
              <mdb-card-text>{{item.description}}</mdb-card-text>
              <mdb-card-footer color="white" textColor="black" class="px-1">
                <span class="float-left">{{item.price}}</span>
                <span class="float-right">
                  <a>
                    <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                      <div class="tooltip">Quick look</div>
                      <mdb-icon slot="reference" icon="eye" class="grey-text ml-3"></mdb-icon>
                    </mdb-tooltip>
                  </a>
                  <a>
                    <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                      <div class="tooltip">Add to watchlist</div>
                      <mdb-icon slot="reference" icon="heart" class="grey-text ml-3"></mdb-icon>
                    </mdb-tooltip>
                  </a>
                </span>
              </mdb-card-footer>
            </mdb-card-body>
          </mdb-card>
        </template>
      </mdb-carousel>
    </section>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardFooter, mdbCardText, mdbIcon, mdbTooltip, mdbView, mdbCarousel, mdbMask } from 'mdbvue'
export default {
  name: 'EcommercePage',
  components: {
    mdbContainer,
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardFooter,
    mdbCardText,
    mdbIcon,
    mdbTooltip,
    mdbView,
    mdbCarousel,
    mdbMask
  },
  data () {
    return {
      items: [
        {
          img:
            'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(39).jpg',
          category: 'Shoes',
          title: 'Leather boots',
          description:
            'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.',
          price: '69$'
        },
        {
          img:
            'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(22).jpg',
          category: 'Jeans',
          title: 'Slim jeans',
          description:
            'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.',
          price: '99$'
        },
        {
          img: 'https://mdbootstrap.com/img/Photos/Others/img%20(31).jpg',
          category: 'Shorts',
          title: 'Denim shorts',
          description:
            'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.',
          price: '49$'
        },
        {
          img:
            'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(30).jpg',
          category: 'Accesories',
          title: 'Summer hat',
          description:
            'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.',
          price: '39$'
        },
        {
          img:
            'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(37).jpg',
          category: 'Shoes',
          title: 'Black Heels',
          description:
            'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.',
          price: '79$'
        },
        {
          img:
            'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(31).jpg',
          category: 'Outwear',
          title: 'Black jacket',
          description:
            'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.',
          price: '149$'
        },
        {
          img:
            'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(38).jpg',
          category: 'Accesories',
          title: 'Leather bag',
          description:
            'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.',
          price: '29$'
        },
        {
          img:
            'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/belt.jpg',
          category: 'Accesories',
          title: 'Leather belt',
          description:
            'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.',
          price: '79$'
        },
        {
          img:
            'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(57).jpg',
          category: 'Shoes',
          title: 'Snickers',
          description:
            'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.',
          price: '139$'
        }
      ]
    }
  }
}
</script>
