// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { VideoComponent } from 'src/app/components/video/video.component';
import { VideoModule } from 'src/app/video/video.module';

export default {
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      imports: [VideoModule],
    }),
  ],
  title: 'Aeroaquaponic/Components/Video',
  component: VideoComponent,
} as Meta;

const Template: Story<VideoComponent> = (args: VideoComponent) => ({
  component: VideoComponent,
  props: args,
});

export const Video = Template.bind({});
Video.args = {};
