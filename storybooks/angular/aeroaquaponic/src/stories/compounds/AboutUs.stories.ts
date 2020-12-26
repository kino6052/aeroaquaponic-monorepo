// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { HeadingComponent } from 'src/app/components/heading/heading.component';
import { SectionComponent } from 'src/app/components/section/section.component';
import { TypographyComponent } from 'src/app/components/typography/typography.component';
import { AboutComponent } from 'src/app/compounds/sections/about/about.component';
import { ProjectsComponent } from 'src/app/compounds/sections/projects/projects.component';

export default {
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [
        AboutComponent,
        TypographyComponent,
        SectionComponent,
        HeadingComponent,
      ],
    }),
  ],
  title: 'Aeroaquaponic/Compounds/Section/AboutUs',
  component: ProjectsComponent,
} as Meta;

const Template: Story<AboutComponent> = (args: AboutComponent) => ({
  component: AboutComponent,
  props: args,
});

export const AboutUs = Template.bind({});
AboutUs.args = {
  title: 'About Us',
  subtitle: 'Our Team',
  text: `We are a non-profit organization of scientists and engineers who want to bring a change to the world. Our goal is to provide tools to achieve the goal of self-sufficiency. This great feat will not be possible without you. Only together can we achieve this.`,
};
