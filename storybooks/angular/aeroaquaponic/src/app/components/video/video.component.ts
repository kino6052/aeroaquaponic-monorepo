import { Component, OnInit } from '@angular/core';

let apiLoaded = false;

@Component({
  template:
    '<youtube-player (ready)="onPlayerReady($event)" videoId="PRQCAL_RMVo" autoplay="1"></youtube-player>',
  selector: 'aeroaquaponic-video-module',
})
export class VideoComponent implements OnInit {
  onPlayerReady = (event: CustomEvent) => {
    console.warn('#####', event);
    const target = (event.target as unknown) as {
      mute: Function;
      playVideo: Function;
    };
    target?.mute();
    target?.playVideo();
  };

  ngOnInit() {
    if (!apiLoaded) {
      console.warn(1);
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      apiLoaded = true;
    }
  }
}
