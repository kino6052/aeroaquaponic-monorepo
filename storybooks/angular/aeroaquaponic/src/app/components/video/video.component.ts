import { Component, Input, OnInit } from '@angular/core';

let apiLoaded = false;

@Component({
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  selector: 'aeroaquaponic-video',
})
export class VideoComponent implements OnInit {
  onError = (e: unknown) => console.warn(e);
  handlePlayerReady = (event: CustomEvent) => {
    const target = (event.target as unknown) as {
      mute: Function;
      playVideo: Function;
    };
    target?.mute();
    target?.playVideo();
  };

  handleStateChange = (event: CustomEvent) => {
    // @ts-ignore
    const data: number = event.data as number;
    if (data !== 0) return;
    const target = (event.target as unknown) as {
      mute: Function;
      playVideo: Function;
      stopVideo: Function;
    };
    target?.mute();
    target?.stopVideo();
    target?.playVideo();
  };

  @Input()
  videoId: string = VideoComponentData.videoId;

  getWidth = () => (window.innerWidth / 100) * 50;
  getHeight = () => (window.innerWidth / 100) * 28.2;

  width: number = this.getWidth();
  height: number = this.getHeight();

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

    window.addEventListener('resize', () => {
      this.width = this.getWidth();
      this.height = this.getHeight();
    });
  }
}

export const VideoComponentData = {
  videoId: 'jO_HwylS6gk',
};
