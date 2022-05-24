import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { InspecaoApiService } from 'src/services/inspecao-api.service';

@Component({
  selector: 'app-mostrar-inspecao',
  templateUrl: './mostrar-inspecao.component.html',
  styleUrls: ['./mostrar-inspecao.component.css']
})
export class MostrarInspecaoComponent implements OnInit {

  inspecoesLista$!: Observable<any[]>;
  inspecoesTiposLista$!: Observable<any[]>;
  inspecoesTiposLista: any=[];

  inspecoesTiposMap: Map<number, string> = new Map()

  constructor(private service: InspecaoApiService) { }

  ngOnInit(): void {
    this.inspecoesLista$ = this.service.getInspecoesLista();
    this.inspecoesTiposLista$ = this.service.getInspecoesTiposLista();
    this.atualizarInspecoesTipos();
  }

  modalTitulo: string = '';
  adicionarEditarInspecao: boolean = false;
  inspecao: any;

  modalAdd() {
    this.inspecao = {
      id:0,
      status: null,
      comentario: null,
      inspecaoTipoId: null
    }
    this.modalTitulo = "Adicionar Inspeção";
    this.adicionarEditarInspecao = true;
  }

  modalEditar(item: any) {
    this.inspecao = item;
    this.modalTitulo = "Editar Inspeção";
    this.adicionarEditarInspecao = true;
  }

  delete(item: any) {
    if(confirm(`Voce deseja apagar a Inspeção ${item.id}`)) {
      this.service.deleteInspecoes(item.id).subscribe(res => {
        var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showDeleteSucesso = document.getElementById('delete-succes-alert');
      if(showDeleteSucesso) {
        showDeleteSucesso.style.display = "block";
      }
      setTimeout(function() {
        if(showDeleteSucesso) {
          showDeleteSucesso.style.display = "none";
        }
      }, 4000);
      this.inspecoesLista$ = this.service.getInspecoesLista();
      });
    }
  }

  modalClose() {
    this.adicionarEditarInspecao = false;
    this.inspecoesLista$ = this.service.getInspecoesLista();
  }

  atualizarInspecoesTipos(){
    this.service.getInspecoesTiposLista().subscribe(data => {
      this.inspecoesTiposLista = data;

      for(let i=0; i< data.length; i++)
      {
        this.inspecoesTiposMap.set(this.inspecoesTiposLista[i].id, this.inspecoesTiposLista[i].inspecaoNome);
      }
    });
  }

}
