// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { AppModule } from 'src/app/app.module';
import { SectionComponent } from 'src/app/components/section/section.component';
import { TypographyComponent } from 'src/app/components/typography/typography.component';

export default {
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [TypographyComponent, SectionComponent],
      // imports: [AppModule],
    }),
  ],
  title: 'Aeroaquaponic/Projects',
  component: SectionComponent,
} as Meta;

const Template: Story<SectionComponent> = (args: SectionComponent) => ({
  component: SectionComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  isDebugging: true,
};
