import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements AfterViewInit{
  @ViewChild('insta') public insta!: ElementRef;
  @ViewChild('whats') public whats!: ElementRef;
  @ViewChild('gmail') public gmail!: ElementRef;

  ngAfterViewInit(): void {
      this.insta.nativeElement.innerHTML = '@central_planosdesaude';
      this.whats.nativeElement.innerHTML = '(71) 99240-2722';
      this.gmail.nativeElement.innerHTML = 'planodesaude@gmail.com';
  }
}
