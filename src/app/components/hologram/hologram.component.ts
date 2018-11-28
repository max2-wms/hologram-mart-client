import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

// Services
import { HologramService } from "../../shared/services/hologram/hologram.service";

@Component({
  selector: 'app-hologram',
  templateUrl: './hologram.component.html',
  styleUrls: ['./hologram.component.scss']
})
export class HologramComponent implements OnInit {

  private hologram: any;

  constructor(private hologramService: HologramService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    let hologramid: string = this.activatedRoute.snapshot.url[1].path || null;

    if ( hologramid ) {
      this.hologramService.getHologram(hologramid)
        .subscribe((hologram: any) => {
          this.hologram = hologram;
        });
    }
  }

  deleteHologram(hologramid: any) {
    this.hologramService.deleteHologram(hologramid)
      .subscribe(() => {
        console.log('hologram deleted!');
        this.router.navigate(['/']);
      });    
  }

}
