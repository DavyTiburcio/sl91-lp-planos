import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "../../core/components/header/header.component";
import { beneficios } from '../../shared/interfaces/beneficios';
import { PlanosComponent } from '../../core/components/planos/planos.component';
import { FooterComponent } from "../../core/components/footer/footer.component";
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { apiService } from '../../shared/services/api.service';
import { environment } from '../../shared/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, PlanosComponent, FooterComponent, FormsModule,
  ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{

  fb = inject(FormBuilder);
  apiService = inject(apiService);

  public formHome = this.fb.group({
    nome: [''],
    email: [''],
    telefone: [''],
    cidade: [''],
  })

  public sendForm(){
    if(this.formHome.valid) {
      const headers = new HttpHeaders().set('Content-Type', 'application/json')
      .set('Accept', 'application/json');
      this.apiService.httpClient.post(environment.url,
          {
            name: this.formHome.value.nome,
            email: this.formHome.value.email,
            telefone: this.formHome.value.telefone,
            cidade: this.formHome.value.cidade,
          },
      { headers: headers }).pipe(finalize(() => {
        this.clearForm()
      })).subscribe()
    }
  }

  private clearForm(){
    this.formHome.patchValue({
      nome: '',
      email: '',
      telefone: '',
      cidade: ''
    })
    alert('Registro enviado com sucesso!')
  }

  public default: boolean = false;
  public beneficios: beneficios[] = [
  {
    img: 'assets/icons/hospital.png',
    title: 'Rede Exclusiva Expandida',
    description: 'Com 32 Hospitais próprios, 20 Prontos Atendimentos e 105 Clínicas, nosso plano oferece uma estrutura completa ao seu alcance.',
  },
  {
    img: 'assets/icons/dente.png',
    title: 'Odontologia Integrada',
    description: 'Somente em nosso plano, você tem acesso a um plano odontológico completo, incluindo prevenção, diagnóstico, atendimento de urgência 24h e cobertura em todo o Brasil.',
  },
  {
    img: 'assets/icons/pediatra.png',
    title: 'Maior Rede Pediátrica Exclusiva',
    description: 'A mais abrangente rede de atendimento infantil com infraestrutura moderna e especializada, incluindo UTI neonatal e acompanhamento pediátrico.',
  },
  {
    img: 'assets/icons/telemarketing.png',
    title: 'Serviço de Atendimento 24h',
    description: 'Não perca tempo: sua saúde não pode esperar. Marcação de consultas, exames e autorizações disponíveis através do nosso exclusivo call center 24h.',
  },
  {
    img: 'assets/icons/mapa.png',
    title: 'Atendimento nas Regiões Norte e Nordeste',
    description: 'Você pode receber atendimento nas regiões Norte e Nordeste onde nosso plano está presente, sem custo adicional.',
  },
  {
    img: 'assets/icons/agenda.png',
    title: 'Agendamento Online Simplificado',
    description: 'Agende consultas, solicite autorizações online e tire suas dúvidas diretamente pelo chat em nosso site.',
  },
];
}
