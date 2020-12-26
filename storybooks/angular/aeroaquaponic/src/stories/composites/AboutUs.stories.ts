// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { HeadingComponent } from 'src/app/components/heading/heading.component';
import { ProfileCardComponent } from 'src/app/components/profile-card/profile-card.component';
import { SectionComponent } from 'src/app/components/section/section.component';
import { SpacerComponent } from 'src/app/components/spacer/spacer.component';
import { TypographyComponent } from 'src/app/components/typography/typography.component';
import { ProfileCardContainerComponent } from 'src/app/composites/profile-card-container/profile-card-container.component';
import {
  AboutComponent,
  data,
} from 'src/app/composites/sections/about/about.component';

export default {
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [
        AboutComponent,
        TypographyComponent,
        SectionComponent,
        HeadingComponent,
        SpacerComponent,
        ProfileCardComponent,
        ProfileCardContainerComponent,
      ],
    }),
  ],
  title: 'Aeroaquaponic/Composites/Section/About',
  component: AboutComponent,
} as Meta;

const Template: Story<AboutComponent> = (args: AboutComponent) => ({
  component: AboutComponent,
  props: args,
});

export const About = Template.bind({});
About.args = data;
