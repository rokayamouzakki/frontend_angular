import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../../service/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-product',
  templateUrl: './post-product.component.html',
  styleUrls: ['./post-product.component.scss']
})
export class PostProductComponent {

  productForm : FormGroup; 
  listofCategories : any = [];
  selectedFile: File | null;
  imagePreview: string | ArrayBuffer | null; 

  constructor(
    private fb :  FormBuilder,
    private router : Router, 
    private snackBar: MatSnackBar,
    private adminService: AdminService
  ){}

  onFileSelected(event: any){
    this.selectedFile = event.target.files[0];
    this.previewImage();
  }

  previewImage(){
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    }
    reader.readAsDataURL(this.selectedFile);
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      categoriId: [null, [Validators.required]],
      name: [null, [Validators.required]],
      price : [null, [Validators.required]],
      description : [null, [Validators.required]],
    });

    this.getAllCategories();

  }

  getAllCategories(){
    this.adminService.getAllCategories().subscribe(res=>{
      this.listofCategories = res;
    })
  }

  addProduct(): void{
    
  }
}
