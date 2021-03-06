// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { HeadingComponent } from 'src/app/components/heading/heading.component';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { SectionComponent } from 'src/app/components/section/section.component';
import { SpacerComponent } from 'src/app/components/spacer/spacer.component';
import { TypographyComponent } from 'src/app/components/typography/typography.component';
import { VideoComponent } from 'src/app/components/video/video.component';
import {
  MainComponent,
  MainSectionData,
} from 'src/app/composites/sections/main/main.component';
import { VideoModule } from 'src/app/video/video.module';

export default {
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [
        TypographyComponent,
        SectionComponent,
        HeadingComponent,
        SpacerComponent,
        MainComponent,
        MenuComponent,
        ButtonComponent,
      ],
      imports: [VideoModule],
    }),
  ],
  title: 'Aeroaquaponic/Composites/Sections/Main',
  component: MainComponent,
} as Meta;

const Template: Story<MainComponent> = (args: MainComponent) => ({
  component: MainComponent,
  props: args,
});

export const Main = Template.bind({});
Main.args = MainSectionData;
