app.component('product-details',{
    props:{
        onSale:{
            type:Boolean,
           required:true
        }
        
    },
    template:
    /*html*/
    `<p>{{ description }}</p>
    <a v-bind:href="url">Click Me!</a>
    <div>
      <img v-bind:src="image" alt="" />
    </div>
    <div>
      <h1 v-if="onSale">{{title}} is On sale</h1>
    </div>
    <div>
      <h1 v-if="inventory>10">Lot of Stock</h1>
      <h1 v-else-if="inventory<=10 && inventory>0">Limited Stock</h1>
      <h1 v-else="inventory">Out of Stock</h1>
    </div>
    <ul>
      <li v-for="size in sizes">{{size}}</li>
    </ul>

    <div>
      <p>Cart[{{cart}}]</p>
      <button v-on:click="addToCart" :disabled="!inStock">Add To Cart</button>
    </div>`,
    
    data(){
        return {
            description:'hello guys i am tushar arora and this is my first vue',
            url:'https://web.whatsapp.com/',
            brand:'vivo',
            product:'m31',
            image:'./assets/dp.jpg',
            inventory:'10',
            sizes:['green','red'],
            cart:0,
            inStock:false,
            styles:{
                
                fontSize:'14px'
            }
        }
        
    },
    methods: {
            addToCart(){
                this.cart+=1
           },
            deleteFromCart(){
                this.cart-=1
            }
        },
        computed:{
            title(){
                if(this.onSale){
                    return this.brand+' '+this.product
                }
            }
        }
})