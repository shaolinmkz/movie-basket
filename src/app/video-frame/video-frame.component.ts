import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-video-frame',
  templateUrl: './video-frame.component.html',
  styleUrls: ['./video-frame.component.css']
})
export class VideoFrameComponent implements OnInit {

  @Input() source: string;
  @Input() width = 1280;
  @Input() height = 720;

  @ViewChild('iframeContainer', { static: true }) iframeContainer: ElementRef;

  constructor() { }

  ngOnInit() {
    this.iframeContainer.nativeElement.innerHTML = `
      <iframe width="${this.width}" height="${this.height}" src="${this.source}" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  }

}
