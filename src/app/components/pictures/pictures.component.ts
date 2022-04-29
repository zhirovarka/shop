import { environment } from './../../../environments/environment';
import { DataService } from './../../services/data.service';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-pictures',
  templateUrl: 'pictures.component.html',
  styleUrls: ['pictures.component.scss'],
})
export class PicturesComponent implements OnInit {
  @Input() imgUrls: string[] = [];
  public imgCurrent: string;
  // public noImage = environment.noImage;
  public noImage = environment['noImage'];
  public checkedUrls: string[] = [];

  constructor(public dataService: DataService) {}

  public ngOnInit(): void {
    this.imgUrls.map((url) => {
      this.dataService.getImage(url).subscribe(
        (response) =>
          response.status === 200
            ? this.checkedUrls.push(url)
            : this.checkedUrls.push(null),
        () => this.checkedUrls.push(null)
      );
    });
    this.imgCurrent = this.imgUrls[0];
  }

  public selectImg(event, url: string): void {
    event.stopPropagation();
    this.imgCurrent = url;
  }
}
