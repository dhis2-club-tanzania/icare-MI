import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../core/services';

@Component({
  selector: 'app-icare-interfacing',
  templateUrl: './icare-interfacing.component.html',
  styleUrls: ['./icare-interfacing.component.scss'],
})
export class IcareInterfacingComponent implements OnInit {
  isElectron: boolean = false;
  constructor(private electronService: ElectronService) {}

  ngOnInit(): void {
    this.isElectron = this.electronService.isElectron;
  }
}
