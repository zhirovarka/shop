import { Component, Input, OnInit, Output, EventEmitter, AfterViewChecked, DoCheck } from '@angular/core';
import { strict } from 'assert';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-dropdown-animation',
  templateUrl: 'dropdown.component.html',
  styleUrls: ['dropdown.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class DropdownAnimatedComponent implements OnInit {
  @Input() items: any; // object[] | string[];
  @Input() name: string;
  @Input() value: EventEmitter<string>;
  public dropdownTitle: string;
  public selectedValue: string;
  @Output() changeValue = new EventEmitter();

  public ngOnInit(): void {
    this.dropdownTitle = this.name;
    this.selectedValue = '';
    this.value.subscribe((res: string) => {
      const temp = this.items === undefined ? undefined : this.items.filter(value => value.item !== undefined);
      if (!temp || temp.length === 0) {
        this.dropdownTitle = res ? res : this.name;
        this.selectedValue = res ? res : '';
      }
      else {
        const item = this.items.find((currentItem) => currentItem.value === res);
        this.dropdownTitle = item && item.item ? item.item : this.name;
        this.selectedValue = item && item.value ? item.value : '';
      }
    });
  }

  public selectValue(value): void {
    if (!this.isString(value)) {
      this.dropdownTitle = value ? value.item : this.name;
      this.selectedValue = value ? value.value : '';
    }
    else {
      this.dropdownTitle = value ? value : this.name;
      this.selectedValue = value ? value : '';
    }
    this.changeValue.emit(this.selectedValue);
  }

  public isString(value): boolean {
    return typeof value === 'string';
  }
}
