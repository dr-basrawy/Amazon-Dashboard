import { Component, OnInit } from '@angular/core';
import { Category } from 'src/Models/category';
import { CategoryService } from 'src/services/category.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/services/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  catObj: any = {};
  categoryList: Category[] = [];
  category: any = {};
  categoryForm!: FormGroup;
  checkString = /^[a-z A-Z ا-ي آ-ی]{3}[ 0-9 a-z A-Z ا-ي آ-ی]{1,100}$/;
  productsId = /(?:[0-9a-z]{10,},)+/i;

  categoryId?: string | null;
  constructor(
    private categoryServices: CategoryService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductsService
  ) {
    this.categoryForm = new FormGroup({
      name_en: new FormControl('', [
        Validators.required,
        Validators.pattern(this.checkString),
      ]),
      name_ar: new FormControl('', [
        Validators.required,
        Validators.pattern(this.checkString),
      ]),
      products: new FormControl('', [Validators.pattern(this.productsId)]),
    });
  }
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((paramMap) => {
      this.categoryId = paramMap.get('id') ? paramMap.get('id') : '';
      this.categoryServices
        .getCategoryById(this.categoryId)
        .subscribe((data) => {
          this.category = data;
          this.category = this.category.data;
          let catProductsId = this.category.products
            ? this.category.products
                .map((product: { _id: any }) => product._id)
                .join(',')
            : '';
          this.categoryForm.patchValue({
            name_en: this.category.name_en || '',
            name_ar: this.category.name_ar || '',
            products: catProductsId || '',
          });
        });
    });
    this.categoryServices.getAllCategory().subscribe((data) => {
      this.catObj = data;
      this.categoryList = this.catObj.data;
    });
  }

  get name_en() {
    return this.categoryForm.get('name_en');
  }
  get name_ar() {
    return this.categoryForm.get('name_ar');
  }
  get products() {
    return this.categoryForm.get('products');
  }
  delete(category: Category) {
    Swal.fire({
      title: 'Do you want to delete This Category',
      icon: 'question',
      confirmButtonText: 'Delete Product',
      cancelButtonText: 'Cancel',
      showCancelButton: true,
    })
      .then((result) => {
        if (result.isConfirmed) {
          this.categoryServices.deleteCategory(category).subscribe(() => {
            this.categoryList = this.categoryList.filter(
              (cat) => cat._id !== category._id,
              Swal.fire({
                title: 'Category deleted',
                text: 'Category deleted',
                icon: 'success',
              })
            );
          });
        }
      })
      .catch((err) => console.log(err));
  }
  update(category: Category) {
    this.router.navigate(['category', category._id]);
  }

  onSubmit() {
    if (!this.categoryId) {
      if (this.categoryForm.valid) {
        let productsArr = this.products?.value.split(',').filter(Boolean);
        const category: Category = {
          name_en: this.name_en?.value,
          name_ar: this.name_ar?.value,
          products: productsArr,
        };
        this.categoryServices.addCategory(category).subscribe(() => {
          this.categoryServices.getAllCategory().subscribe((data) => {
            this.catObj = data;
            this.categoryList = this.catObj.data;
          });
        });
        this.name_en?.setValue('');
        this.name_ar?.setValue('');
        this.products?.setValue('');
      } else {
        alert('enter a valid data');
      }
    } else {
      let confirmUpdate = confirm('Do you Really want Update this Category');
      if (confirmUpdate) {
        let catProductsId = this.category.products
          .map((product: { _id: any }) => product._id)
          .join(',');
        let productsArr = catProductsId.split(',').filter(Boolean);
        console.log(productsArr);
        const updateCategory: Category = {
          _id: this.categoryId,
          name_en: this.name_en?.value,
          name_ar: this.name_ar?.value,
          products: productsArr,
        };
        this.categoryServices.updateCategory(updateCategory).subscribe(() => {
          this.categoryServices.getAllCategory().subscribe((data) => {
            this.catObj = data;
            this.categoryList = this.catObj.data;
          });
          this.name_en?.setValue('');
          this.name_ar?.setValue('');
          this.products?.setValue('');
        });
        this.router.navigate(['category']);
      }
    }
  }
  language: string = 'en';
  changLanguage() {
    this.language = this.language == 'en' ? 'arabic' : 'en';
  }
}
