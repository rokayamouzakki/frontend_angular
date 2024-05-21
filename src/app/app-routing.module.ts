import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './defaultPages/login/login.component';
import { SignupComponent } from './defaultPages/signup/signup.component';
import { PostProductComponent } from './admin/components/post-product/post-product.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './defaultPages/home/home.component';
import { OurStoryComponent } from './defaultPages/our-story/our-story.component';
import { PostCategoryComponent } from './admin/components/post-category/post-category.component';

const routes: Routes = [
                        { path: '', component: HomeComponent }, 
                        { path: "login",component: LoginComponent},
                        { path: "signup",component: SignupComponent},
                        { path: 'customers/dashboard', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
                        { path: 'admin/dashboard', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
                        { path: 'admin/category', component: PostCategoryComponent },
                        { path: 'admin/product', component: PostProductComponent },
                        { path: 'header', component: HeaderComponent },
                        { path: 'footer', component: FooterComponent },
                        { path: 'ourStory', component: OurStoryComponent }, 

                        { path: '**', redirectTo: '' } 

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
