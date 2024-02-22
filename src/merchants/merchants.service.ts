import { Injectable } from '@nestjs/common';
import { ProductDto} from './dto/create-products.dto'

@Injectable()
export class MerchantsService {
    private products = [];

    findAllByMerchantId(merchantId: string) {
      return this.products.filter(product => product.merchantId === merchantId);
    }

    findAll() {
      return this.products;
    }
  
    create(productDto: ProductDto) {
      this.products.push(productDto);
      return 'Product created successfully';
    }
  
    update(skuId: string, productDto: ProductDto) {
      const index = this.products.findIndex(product => product.skuId === skuId);
      if (index === -1) {
        return 'Product not found';
      }
      this.products[index] = { ...this.products[index], ...productDto };
      return 'Product updated successfully';
    }
  
    delete(skuId: string) {
      this.products = this.products.filter(product => product.skuId !== skuId);
      return 'Product deleted successfully';
    }
}
