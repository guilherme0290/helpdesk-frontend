import { Component, OnInit } from '@angular/core';
import { FormControl, MinLengthValidator, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from 'src/app/models/credenciais';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  creds: Credenciais = {
    email :'',
    senha :''
  }

  email = new FormControl(null,Validators.email)
  senha = new FormControl(null,Validators.minLength(3))

  ngOnInit(): void {
    
  }
  
  constructor(private toast: ToastrService) { }

  validaCampos(): boolean{
    if(this.email.valid && this.senha.valid){
      return true;
    }
    return false;    
  }

  logar(){
    this.toast.error('Usuário e/ou senha inválidas','Login');
    this.creds.senha = '';
  }

}