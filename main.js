const app=Vue.createApp({
    data(){
        return {
            description:'hello guys i am tushar arora and this is my first vue',
            url:'https://web.whatsapp.com/',
            image:'./assets/dp.jpg',
            onSale:true,
            inventory:'10',
            sizes:['green','red'],
            cart:0
        }
        
    },
    methods: {
            addToCart(){
                this.cart+=1
                
            },
            deleteFromCart(){
                this.cart-=1
            }
        }
})