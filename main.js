const app=Vue.createApp({
    data(){
        return {
            description:'hello guys i am tushar arora and this is my first vue',
            url:'https://web.whatsapp.com/',
            brand:'vivo',
            product:'m31',
            image:'./assets/dp.jpg',
            onSale:true,
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
                return this.brand+' '+this.product
            }
        }
})