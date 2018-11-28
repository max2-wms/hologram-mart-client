import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

// Services
import { HologramService } from "../../shared/services/hologram/hologram.service";

@Component({
  selector: 'app-holograms',
  templateUrl: './holograms.component.html',
  styleUrls: ['./holograms.component.scss']
})
export class HologramsComponent implements OnInit {

  holograms = [];

  constructor(private hologramService: HologramService,
              private router: Router) { }

  ngOnInit() {
    this.hologramService.getHolograms()
      .subscribe((holograms: any[]) => {
        this.holograms = holograms;
        console.log('retrived holograms');
      },
      err => {
        console.log(err);
      });
  }

  deleteHologram(hologramid: any) {
    this.hologramService.deleteHologram(hologramid)
      .subscribe(() => {
        console.log('hologram deleted!');
        this.holograms = this.holograms.filter( hologram => hologram._id != hologramid);
      });    
  }

}
