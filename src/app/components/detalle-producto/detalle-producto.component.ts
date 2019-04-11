import { Component, OnInit } from '@angular/core';

// IMPORTACIÓN DEL SERVICIO API
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent implements OnInit {

  constructor(private api: ApiService) { }

  public productos = []
  public producto = ''

  ngOnInit() {
    this.api.getProductos().subscribe(productos=>{
      console.log('PRODUCTOS', productos);
      this.productos = productos
    })
  }

}
