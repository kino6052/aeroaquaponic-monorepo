// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { AppModule } from 'src/app/app.module';
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
        ProjectsComponent,
        AboutComponent,
        TypographyComponent,
        SectionComponent,
        HeadingComponent,
      ],
    }),
  ],
  title: 'Aeroaquaponic/Compounds/Section',
  component: ProjectsComponent,
} as Meta;

const ProjectsTemplate: Story<ProjectsComponent> = (
  args: ProjectsComponent
) => ({
  component: ProjectsComponent,
  props: args,
});

export const Projects = ProjectsTemplate.bind({});
Projects.args = {};

const AboutUsTemplate: Story<AboutComponent> = (args: AboutComponent) => ({
  component: AboutComponent,
  props: args,
});

export const AboutUs = AboutUsTemplate.bind({});
AboutUs.args = {};
