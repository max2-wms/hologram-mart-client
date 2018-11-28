import { Component, OnInit } from '@angular/core';

// Config
import { config } from "../../../app.config";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  CONFIG = config;

  constructor() { }

  ngOnInit() {
  }

}
