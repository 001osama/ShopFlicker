import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderService } from 'src/app/services/loader.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html'
})

export class LoaderComponent implements OnInit, OnDestroy{
  private _loaderService = inject(LoaderService);

  loader!:Observable<any>;

  ngOnInit(): void {
    this.loader = this._loaderService.loaderStatus;
  }

  ngOnDestroy(): void {
    this._loaderService.hideLoader();
  }
}
