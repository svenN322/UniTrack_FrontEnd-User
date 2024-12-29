import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  nombres: string = '';
  apellidos: string = '';
  correo: string = '';
  codigo_estudiante: string = '';
  contrasena: string = '';
  correoA: string = ''; 
  carrera: string= ''; 
  ciclo: string = ''; 
  edad: string= ''; 
  sexo: string = ''; 
  
  constructor(private userService: UserService, private router: Router) { }

  onSubmit() {
    this.userService.createUser(this.nombres, this.apellidos, this.correo, this.codigo_estudiante, this.contrasena, this.correoA, this.carrera, this.ciclo, this.edad, this.sexo)
      .subscribe(
        (response: any) => {
          console.log('Usuario registrado con éxito', response);
          this.router.navigate(['/login']);
        },
        (error: any) => {
          console.error('Error al registrar el usuario', error);
        }
      );
  }

  ngOnInit() {
  }

}
