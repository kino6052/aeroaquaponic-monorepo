// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppModule } from 'src/app/app.module';
import { HeadingComponent } from 'src/app/components/heading/heading.component';
import { SectionComponent } from 'src/app/components/section/section.component';
import { TypographyComponent } from 'src/app/components/typography/typography.component';
import Button from '../../app/components/button.component';

export default {
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [HeadingComponent],
      // imports: [AppModule],
    }),
  ],
  title: 'Aeroaquaponic/Components/Heading',
  component: HeadingComponent,
} as Meta;

const Template: Story<HeadingComponent> = (args: HeadingComponent) => ({
  component: HeadingComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title',
  subtitle: 'Subtitle',
};
