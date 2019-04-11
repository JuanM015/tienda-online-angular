import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.scss']
})
export class NuevoProductoComponent implements OnInit {

  constructor(private api: ApiService, private afs: AngularFirestore) { }

  ngOnInit() {
    this.resetForm()
  }

  resetForm(form?: NgForm){
    if(form!=null)
      form.resetForm()
      // AQUÍ ME DI CUENTA QUE PRESENTABA CONFLICTOS, POR ENDE BORRE Y VUELVA A PONER EL .formData  Y SE SOLUCIONA EL ERROR
    this.api.formData = {
      id: null,
      producto: '',
      precio: null,
      imagen_url: ''
    }
  }

  guardarProducto(form: NgForm) {
    let data = form.value
    this.afs.collection('productos').add(data)
    this.resetForm(form)
    console.log('Se ha creado correctamente')
  }

}
