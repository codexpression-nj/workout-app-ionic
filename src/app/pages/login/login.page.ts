import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user:any
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
  }

  async signIn(){
    this.user = await this.authService.googleSignIn()
    console.log(this.user);
    
    if(this.user){
      this.router.navigate(['/home'])
    }
    
  }

}
