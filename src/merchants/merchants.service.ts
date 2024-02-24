
import { Injectable } from '@nestjs/common';
import { ProductDto } from './dto/create-products.dto';

@Injectable()
export class MerchantsService {
    private products: Map<string, ProductDto[]> = new Map();

    findAllByMerchantId(merchantId: string) {
        return this.products.get(merchantId) || [];
    }


    findAll() {
        let allProducts: ProductDto[] = [];
        this.products.forEach((products: ProductDto[]) => {
          allProducts = allProducts.concat(products);
        });
        return allProducts;
      }
    

    // findAll() {
    //     return this.products;
    // }

    create(productDto: ProductDto) {
        const merchantId = productDto.merchantId;
        if (!this.products.has(merchantId)) {
            this.products.set(merchantId, []);
        }
        const productList = this.products.get(merchantId);
        productList.push(productDto);
        this.products.set(merchantId, productList);
        return productDto;
    }

    update(skuId: string, updatedProduct: ProductDto) {
        const merchantId = updatedProduct.merchantId;
        if (!this.products.has(merchantId)) {
            return null;
        }
        let productList = this.products.get(merchantId);
        const index = productList.findIndex(product => product.skuId === skuId);
        if (index !== -1) {
            productList[index] = { ...productList[index], ...updatedProduct };
            this.products.set(merchantId, productList);
            return productList[index];
        }
        return null;
    }

    delete(skuId: string, merchantId: string) {
        if (!this.products.has(merchantId)) {
            return null;
        }
        let productList = this.products.get(merchantId);
        const index = productList.findIndex(product => product.skuId === skuId);
        if (index !== -1) {
            const deletedProduct = productList[index];
            productList.splice(index, 1);
            this.products.set(merchantId, productList);
            return deletedProduct;
        }
        return null;
    }
}






























// import { Injectable } from '@nestjs/common';
// import { ProductDto} from './dto/create-products.dto'

// @Injectable()
// export class MerchantsService {
//     private products = [];

//     findAllByMerchantId(merchantId: string) {
//       return this.products.filter(product => product.merchantId === merchantId);
//     }

//     findAll() {
//       return this.products;
//     }
  
//     create(productDto: ProductDto) {
//       this.products.push(productDto);
//       return 'Product created successfully';
//     }
  
//     update(skuId: string, productDto: ProductDto) {
//       const index = this.products.findIndex(product => product.skuId === skuId);
//       if (index === -1) {
//         return 'Product not found';
//       }
//       this.products[index] = { ...this.products[index], ...productDto };
//       return 'Product updated successfully';
//     }
  
//     delete(skuId: string) {
//       this.products = this.products.filter(product => product.skuId !== skuId);
//       return 'Product deleted successfully';
//     }
// }
