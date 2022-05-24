import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InspecaoApiService } from 'src/services/inspecao-api.service';

@Component({
  selector: 'app-adicionar-editar-inspecao',
  templateUrl: './adicionar-editar-inspecao.component.html',
  styleUrls: ['./adicionar-editar-inspecao.component.css']
})
export class AdicionarEditarInspecaoComponent implements OnInit {

  inspecoesLista$!: Observable<any[]>;
  inspecoesTiposLista$!: Observable<any[]>;
  statusLista$!: Observable<any[]>;

  constructor(private service: InspecaoApiService) { }

  @Input() inspecao:any;
  id: number = 0;
  status: string = "";
  comentario: string = "";
  inspecaoTipoId!:number;


  ngOnInit(): void {
    this.id = this.inspecao.id;
    this.status = this.inspecao.status;
    this.comentario = this.inspecao.comentario;
    this.inspecaoTipoId = this.inspecao.inspecaoTipoId;
    this.statusLista$ = this.service.getStatusLista();
    this.inspecoesLista$ = this.service.getInspecoesLista();
    this.inspecoesTiposLista$ = this.service.getInspecoesTiposLista();
  }

  addInspecao() {
    var inspecao = {
      status: this.status,
      comentario: this.comentario,
      inspecaoTipoId:this.inspecaoTipoId
    }
    this.service.addInspecoes(inspecao).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showAddSucesso = document.getElementById('add-succes-alert');
      if(showAddSucesso) {
        showAddSucesso.style.display = "block";
      }
      setTimeout(function() {
        if(showAddSucesso) {
          showAddSucesso.style.display = "none";
        }
      }, 4000);
    })
  }

  updateInspecao() {
    var inspecao = {
      id:this.id,
      status: this.status,
      comentario: this.comentario,
      inspecaoTipoId:this.inspecaoTipoId
    }
    var id: number = this.id;
    this.service.updateInspecoes(id, inspecao).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showUpdateSucesso = document.getElementById('update-succes-alert');
      if(showUpdateSucesso) {
        showUpdateSucesso.style.display = "block";
      }
      setTimeout(function() {
        if(showUpdateSucesso) {
          showUpdateSucesso.style.display = "none";
        }
      }, 4000);
    })
  }

}
