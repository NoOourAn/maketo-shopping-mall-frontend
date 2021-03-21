import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
   products
   productsSearch

  constructor(private myClient:HttpClient) { }

  private GetProducts:string = `${environment.api}/api/products/`;
  private GetCategories:string = `${environment.api}/api/products/getCategory`;
  private GetBrand:string = `${environment.api}/api/products/getBrand`;
  private AddProduct:string = `${environment.api}/api/products/`;
  private UpdateProduct:string = `${environment.api}/api/products/`;
  private DeleteProduct:string = `${environment.api}/api/products/`;
  private GetProductsById:string = `${environment.api}/api/products/`;

  getProducts(){
    return this.myClient.get(this.GetProducts)
  }
  getProductsByName(name)
  {
    return this.myClient.get(this.GetProducts,{
        params:{
          name:name
        }
      })
  }
  getProductsByCategory(category)
  {
    return this.myClient.get(this.GetProducts,{
        params:{
          category:category
        }
      })
  }
  getProductsByBrand(brand)
  {
    return this.myClient.get(this.GetProducts,{
        params:{
          brand:brand
        }
      })
  }
  getProductsBymaxPrice()
  {
    return this.myClient.get(this.GetProducts,{
        params:{
          maxPrice:"maxPrice"
        }
      })
  }
  getProductsByminPrice()
  {
    return this.myClient.get(this.GetProducts,{
        params:{
          minPrice:"minPrice"
        }
      })
  }
  getProductsBylatestdate()
  {
    return this.myClient.get(this.GetProducts,{
        params:{
          latestdate:"latestdate"
        }
      })
  }
  getProductsByoldestdate()
  {
    return this.myClient.get(this.GetProducts,{
        params:{
          oldestdate:"oldestdate"
        }
      })
  }
  productDetail
  getProductsByID(id)
  {
    return this.myClient.get(this.GetProducts,{
        params:{
          id:id
        }
      })
  }

  getProductsByID2(id)
  {
    return this.myClient.get(`${this.GetProductsById}/${id}`)
  }

  getCategories()
  {
    return this.myClient.get(this.GetCategories)
  }

  getBrands()
  {
    return this.myClient.get(this.GetBrand)
  }

  addProduct(product,image){
    console.log(product)
    var formData = new FormData()
    formData.append('file',image);
    formData.append('name',product.productName);
    formData.append('brand',product.brand);
    formData.append('category',product.category);
    formData.append('numberInStock',product.numInStock);
    formData.append('price',product.price);
    formData.append('description',product.desc);
    return this.myClient.post(this.AddProduct,formData);
  }

  updateProduct(id,product){
    return this.myClient.patch(`${this.UpdateProduct}/${id}`,product)
  }
  
  deleteProduct(id){
    return this.myClient.delete(`${this.DeleteProduct}/${id}`)
  }

}
