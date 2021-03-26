import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../environments/environment';
// import { S3 } from 'aws-sdk'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
   products
   productsSearch

  constructor(private myClient:HttpClient) { }

  // //// AWS config
  // // Enter copied or downloaded access ID and secret key here
  // ID = 'xxxxxxxxx';
  // SECRET = 'xxxxxxx';
  // params

  // // The name of the bucket that you have created
  // BUCKET_NAME = 'xxxxxxxx';

  // // initialize the S3 interface
  // s3 = new S3({
  //     accessKeyId: this.ID,
  //     secretAccessKey: this.SECRET
  // });

  private GetProducts:string = `${environment.api}/api/products/`;
  private GetCategories:string = `${environment.api}/api/products/getCategory`;
  private GetBrand:string = `${environment.api}/api/products/getBrand`;
  private AddProduct:string = `${environment.api}/api/products/`;
  private UpdateProduct:string = `${environment.api}/api/products`;
  private DeleteProduct:string = `${environment.api}/api/products`;
  private GetProductsById:string = `${environment.api}/api/products`;

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
    console.log(image)
    var formData = new FormData()
    formData.append('file',image);
    formData.append('name',product.productName);
    formData.append('brand',product.brand);
    formData.append('category',product.category);
    formData.append('numberInStock',product.numInStock);
    formData.append('price',product.price);
    formData.append('description',product.desc);

    // ///////////////
    // /// AWS usage
    // // Setting up S3 upload parameters
    // this.params = {
    //     Bucket: this.BUCKET_NAME,
    //     Key: "test.jpg", // File name you want to save as in S3
    //     Body: image,
    //     // ContentType: req.file.mimetype
    // };

    // // Uploading files to the bucket
    // this.s3.upload(this.params , function(err, data) {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(`File uploaded successfully. ${data.Location}`);
    // });

    return this.myClient.post(this.AddProduct,formData);
  }

  updateProduct(id,product,image){
    console.log(product)
    var formData = new FormData()
    formData.append('file',image);
    formData.append('name',product.productName);
    formData.append('brand',product.brand);
    formData.append('category',product.category);
    formData.append('numberInStock',product.numInStock);
    formData.append('price',product.price);
    formData.append('description',product.desc);
    return this.myClient.patch(`${this.UpdateProduct}/${id}`,formData)
  }
  
  deleteProduct(id){
    return this.myClient.delete(`${this.DeleteProduct}/${id}`)
  }

}
