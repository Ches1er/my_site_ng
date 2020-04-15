import {Component, OnInit} from '@angular/core';
import {MouseEvent} from '@agm/core';
import {ContactsService} from '../../../services/http/contacts/contacts.service';
import {Branch} from '../../../dto/Branch/Branch';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.less']
})
export class ContactsComponent implements OnInit {

  private pBranches: Array<Branch> = [];

  // map config

  latitude = 48.4718255;
  longitude = 35.0378349;
  zoom = 10;
  infoWindowOpened = null;
  previousInfoWindow = null;
  infoWindowText = null;
  mapType = 'roadmap'; // 'roadmap' | 'hybrid' | 'satellite' | 'terrain'
  markers = [];
  private pInfoWindowTextArray = [];

  constructor(private contactsService: ContactsService) {
  }

  ngOnInit() {
    this.contactsService.branches.subscribe(branches => {
      this.branches = branches;
      this.fillInMarkers(branches);
    });
  }

  get branches(): Array<Branch> {
    return this.pBranches;
  }

  set branches(value: Array<Branch>) {
    this.pBranches = value;
  }

  get infoWindowTextArray(): any[] {
    return this.pInfoWindowTextArray;
  }

  clickedMarker(infoWindow, index: number) {
    this.infoWindowTextArray.forEach((value, i) => {
      if (i === index) {
        this.infoWindowText = value;
      }
    });
    if (this.previousInfoWindow == null) {
      this.previousInfoWindow = infoWindow;
    } else {
      this.infoWindowOpened = infoWindow;
      this.previousInfoWindow.close();
    }
    this.previousInfoWindow = infoWindow;
  }

  closeWindow() {
    if (this.previousInfoWindow != null) {
      this.previousInfoWindow.close();
    }
  }

  private fillInMarkers(branches: Array<Branch>) {
    branches.forEach(e => {
      if (e.active) {
        this.markers.push({lat: e.lat, lng: e.long, draggable: false});
        this.infoWindowTextArray.push(e.role + ' ' + e.address);
      }
    });
  }
}
