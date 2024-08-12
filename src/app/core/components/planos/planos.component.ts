import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-planos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planos.component.html',
  styleUrl: './planos.component.scss'
})
export class PlanosComponent {

  @Input() public default: string = "true";
  @Input() public img: string = '';
  @Input() public tipoPlano: string = '';
  @Input() public descriptionPlano: string = '';
  @Input() public check1: string = '';
  @Input() public check2: string = '';
  @Input() public check3: string = '';
  @Input() public check4: string = '';
  @Input() public check5: string = '';

}
