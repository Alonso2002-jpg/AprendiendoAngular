import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component, DoCheck,
  OnChanges,
  OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, AfterContentInit, AfterViewInit, OnDestroy, OnChanges,DoCheck,AfterContentChecked, AfterViewChecked{
  companyName = 'My Company';
  ngOnChanges(changes: SimpleChanges): void {
  }
  ngOnInit(): void {
    console.log("Componente inicializado")
  }

  ngDoCheck(): void {
    console.log("ngDoCheck inicializado")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit inicializado")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit inicializado")
  }


  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked inicializado")
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked inicializado")
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy inicializado")
  }
}


