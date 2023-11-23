const products = [
    { id: "1", name: "IPhone 15", img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone15-digitalmat-gallery-4-202309?wid=364&hei=333&fmt=png-alpha&.v=1693011169045", price: 100, category: "IPhone", description: "IPhone 15", stock: 10 },
    { id: "2", name: "IPhone 15 Plus", img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone15plus-digitalmat-gallery-4-202309?wid=364&hei=333&fmt=png-alpha&.v=1693011173707", price: 100, category: "IPhone", description: "IPhone 15 Plus", stock: 10 },
    { id: "3", name: "IPhone 14", img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone14-digitalmat-gallery-3-202209?wid=364&hei=333&fmt=png-alpha&.v=1662055813794", price: 100, category: "IPhone", description: "IPhone 14", stock: 10 },
    { id: "4", name: "IPhone 14 Plus", img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone14plus-digitalmat-gallery-3-202209?wid=364&hei=333&fmt=png-alpha&.v=1662055814336", price: 100, category: "IPhone", description: "IPhone 14 Plus", stock: 10 },
    { id: "5", name: "AirPods", img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1632861342000", price: 100, category: "AirPods", description: "AirPods", stock: 10 },
    { id: "6", name: "AirPods Pro", img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTJV3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1694014871985", price: 100, category: "AirPods", description: "AirPods Pro", stock: 10 },
    { id: "7", name: "AirPods Max", img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-hero-select-202011?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1604709293000", price: 100, category: "AirPods", description: "AirPods Max", stock: 10 },
  ];
    
    export const getProducts = () => {
      return new Promise((resolve, reject) => {
        if (products.length > 0) {
          setTimeout(() => {
            resolve(products);
          }, 1000);
        } else {
          reject("No hay productos.");
        }
      });
    };
  
    export const getProductById = (id) => {
      return new Promise((resolve, reject) => {
        
        if (products.length > 0) {
          const product = products.find( p => p.id === id);
          
          setTimeout(() => {
            if(!product) {
              reject(`No se encuentra el productos con el id ${id}.`)
            }
            resolve(product);
          }, 1000);
        } else {
          reject("No hay productos.");
        }
      });
    };