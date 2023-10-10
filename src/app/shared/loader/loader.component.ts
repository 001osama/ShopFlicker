import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderService } from 'src/app/services/loader.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})

export class LoaderComponent implements OnInit, OnDestroy{
  private _loaderService = inject(LoaderService);

  public loader!:BehaviorSubject<boolean>;

  ngOnInit(): void {
    this.loader = this._loaderService.loader;
  }

  ngOnDestroy(): void {
    this._loaderService.hideLoader();
  }
}
