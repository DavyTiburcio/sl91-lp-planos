import { Component, inject } from '@angular/core';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { CommonModule, NgOptimizedImage } from '@angular/common';
// FORMULARIO
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { stringValidator } from '../../shared/validators/formulario';
// SERVICE / API
import { apiService } from '../../shared/services/api.service';
import { environment } from '../../../environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { finalize } from 'rxjs';
// INTERFACES
import { beneficios } from '../../shared/interfaces/beneficios';
// COMPONENTS
import { HeaderComponent } from "../../core/components/header/header.component";
import { PlanosComponent } from '../../core/components/planos/planos.component';
import { FooterComponent } from "../../core/components/footer/footer.component";
// ROUTER
import { Router } from '@angular/router';

declare const gtag: Function;
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, PlanosComponent, FooterComponent, FormsModule,
  ReactiveFormsModule, NgxMaskDirective, NgOptimizedImage],
  providers: [provideNgxMask({})],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{

  fb = inject(FormBuilder);
  apiService = inject(apiService);
  router = inject(Router);

  public formHome = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), stringValidator()]],
    email: ['', [Validators.required, Validators.pattern(/.+@.+\..+/)]],
    telefone: ['', [Validators.required]],
    cidade: ['', [Validators.required, Validators.minLength(3), stringValidator()]],
  })

  public sendForm(){
    if(this.formHome.valid) {
      const headers = new HttpHeaders().set('Content-Type', 'application/json')
      .set('Accept', 'application/json');
      this.apiService.httpClient.post(environment.url,
          {
            name: this.formHome.value.name,
            email: this.formHome.value.email,
            telefone: this.formHome.value.telefone,
            cidade: this.formHome.value.cidade,
          },
      { headers: headers }).pipe(finalize(() => {
        this.router.navigate(['/sucesso']);
        this.formHome.reset();
      })).subscribe()
    } else {
      alert("Preencha todas as informações corretamente!")
    }
  }

  public imgEmpresarial: string = 'assets/men.webp';
  public imgBanner: string = 'assets/mulher.webp';

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
